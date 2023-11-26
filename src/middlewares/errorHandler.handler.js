function logErrors(error, req, res, next) {
    console.error(error)
    next(error)
}
function errorHandler(error, req, res, next) {
    if (error.isBoom) {
        res.status(error.output.statusCode).json(error.output.payload)
    } else {
        res.status(500).json({
            message: error.message,
            stack: error.stack
        })
        
    }
}
module.exports = { logErrors, errorHandler}
