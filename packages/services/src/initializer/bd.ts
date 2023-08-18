import { AppDataSource } from '@jvega/repositories'

export const startAppDataSource = () => {
  AppDataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })
}