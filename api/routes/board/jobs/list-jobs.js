import { StatusCodes } from "http-status-codes"

export default async (req, res) => {
    try {
        const selector = {}

        const jobService = req.scope.resolve("jobService")
        const jobs = await jobService.list(selector);
        res.status(StatusCodes.OK).json({success : true, jobs, size : jobs.length});
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({success : false, error : error.message});
    }
}
