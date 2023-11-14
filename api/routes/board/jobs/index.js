import { Router } from "express"
import middlewares from "../../../middlewares/index.js"
import listJobs from "./list-jobs.js"
import createJob from "./create-job.js"

const route = Router()

export default app => {
  app.use("/jobs", route)

  route.get("/", listJobs)
  route.post("/create-job", middlewares.authenticate, createJob)

  return app
}