import { Router } from "express"
import jobRoutes from "./jobs/index.js"

const route = Router()

export default app => {
  app.use("/board", route)

  jobRoutes(route)

  return app
}