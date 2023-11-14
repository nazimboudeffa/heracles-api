import { StatusCodes } from "http-status-codes"

export default async (req, res) => {
    try {
        const jobModel = req.scope.resolve("jobModel")
        const job = await jobModel.create({...req.body})
        res.status(StatusCodes.CREATED).json({success : true, job, msg : 'Successfully Created'});
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({success : false, error : error.message});
    }
}