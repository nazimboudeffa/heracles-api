import mongoose from "mongoose"
import _ from "lodash"
import JobberError from "../core-utils/errors.js"
import BaseService from "../interfaces/base-service.js"

/**
 * Provides layer to manipulate products.
 * @implements BaseService
 */
class JobService extends BaseService {
  /** @param { jobModel: (JobModel) } */
  constructor({ jobModel, eventBusService }) {
    super()

    /** @private @const {ProductModel} */
    this.jobModel_ = jobModel

    /** @private @const {EventBus} */
    this.eventBus_ = eventBusService
  }

  /**
   * @param {Object} selector - the query object for find
   * @return {Promise} the result of the find operation
   */
  list(selector) {
    return this.jobModel_.find(selector)
  }
}

export default JobService
