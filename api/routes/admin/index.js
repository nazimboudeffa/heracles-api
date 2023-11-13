import { Router } from "express"
import JobModel from '../../../models/job.js';
import {StatusCodes} from 'http-status-codes';

const createJob = async (req, res) => {
    try {
        const job = await JobModel.create({...req.body})
        res.status(StatusCodes.CREATED).json({success : true, job, msg : 'Successfully Created'});
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({success : false, error : error.message});
    }
}

const route = Router()

export default app => {
  app.use("/jobs", route)

  route.post("/create-job", createJob)

  // route.get("/:productId", middlewares.wrap(require("./get-product").default))

  return app
}