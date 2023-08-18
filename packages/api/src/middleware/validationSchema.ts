import { Request, Response, NextFunction } from 'express'
import { z } from 'zod'

function getSchemaErrors(schema: z.Schema<any>, data: any): any[] {
  try {
    schema.parse(data)
    return []
  } catch (error) {
    if (error instanceof z.ZodError) {
      return error.errors.map(err => {
        if (err.path.length === 0) {
          return {
            field: `${err.path.toString()}`,
            error: 'required',
          }
        }
        return {
          field: `${err.path.toString()}`,
          error: `${err.message.toString()}`,
        }
      })
    } else {
      throw error
    }
  }
}

function validateSchema(schema: z.Schema<any>) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const schemaErrors = getSchemaErrors(schema, req.body)

    if (schemaErrors.length === 0) {
      next()
    } else {
      res.status(400).json({ errors: schemaErrors })
    }
  }
}

export { validateSchema }
