/**
 * @typedef JobberErrorType
 *
 */
export const JobberErrorTypes = {
    /** Errors stemming from the database */
    DB_ERROR: "database_error",
    INVALID_ARGUMENT: "invalid_argument",
    INVALID_DATA: "invalid_data",
    NOT_FOUND: "not_found",
    NOT_ALLOWED: "not_allowed"
  }
  
  /**
   * Standardized error to be used across Jobber project.
   * @extends Error
   */
  class JobberError extends Error {
    /**
     * Creates a standardized error to be used across Medusa project.
     * @param type {MedusaErrorType} - the type of error.
     * @param params {Array} - Error params.
     */
    constructor(name, message, ...params) {
      super(...params)
  
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, MedusaError)
      }
  
      this.name = name
      this.message = message
      this.date = new Date()
    }
  }
  
  JobberError.Types = JobberErrorTypes
  
  export default JobberError
  