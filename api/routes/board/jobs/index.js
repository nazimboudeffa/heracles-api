import { Router } from "express"
import middlewares from "../../../middlewares/index.js"
import listJobs from "./list-jobs.js"

const route = Router()

export default app => {
  app.use("/jobs", route)

  route.get("/", middlewares.wrap(listJobs))

  return app
}