import { Router } from "express"
import JobModel from '../../../../models/job.js';
import {StatusCodes} from 'http-status-codes';

const getJobs = async (req, res) => {
    try {
        const jobs = await JobModel.find({}).sort('createdAt');
        res.status(StatusCodes.OK).json({success : true, jobs, size : jobs.length});
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({success : false, error : error.message});
    }
}

const route = Router()

export default app => {
  app.use("/jobs", route)

  route.get("/", getJobs)

  return app
}