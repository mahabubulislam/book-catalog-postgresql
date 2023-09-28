class ApiError extends Error {
  statusCode: number
  constructor(message: string, stack = '', statusCode: number) {
    super(message)
    this.statusCode = statusCode
    if (stack) {
      this.stack = stack
    } else {
      Error.captureStackTrace(this, this.constructor)
    }
  }
}

export default ApiError
