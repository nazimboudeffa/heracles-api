import { Router } from "express"
import { StatusCodes } from "http-status-codes"

const createJob = async (req, res) => {
    try {
        const jobModel = req.scope.resolve("jobModel")
        const job = await jobModel.create({...req.body})
        res.status(StatusCodes.CREATED).json({success : true, job, msg : 'Successfully Created'});
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({success : false, error : error.message});
    }
}

const route = Router()

export default app => {
  app.use("/admin", route)

  route.post("/create-job", createJob)

  return app
}