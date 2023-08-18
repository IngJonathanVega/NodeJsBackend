import { RegisterRoutes } from '../build/routes'
import express, { json, urlencoded, Response as ExResponse, Request as ExRequest, NextFunction } from 'express'
import swaggerUi from 'swagger-ui-express'
import { ValidateError } from 'tsoa'

export const app = express()

app.use(
  urlencoded({
    extended: true,
  })
)
app.use(json())

app.use('/swagger', swaggerUi.serve, async (_req: ExRequest, res: ExResponse) => {
  return res.send(swaggerUi.generateHTML(await import('../build/swagger.json')))
})

RegisterRoutes(app)

//TODO: validate how to inject this as a middleware
app.use(function notFoundHandler(_req, res: ExResponse) {
  res.status(404).send({
    message: "Not Found",
  });
});

//TODO: validate how to inject this as a middleware
app.use(function errorHandler(
  err: unknown,
  req: ExRequest,
  res: ExResponse,
  next: NextFunction
): ExResponse | void {
  if (err instanceof ValidateError) {
    console.warn(`Caught Validation Error for ${req.path}:`, err.fields)
    return res.status(422).json({
      message: "Validation Failed",
      details: err?.fields,
    })
  }
  if (err instanceof Error) {
    return res.status(500).json({
      message: "Internal Server Error",
    })
  }

  next()
})
