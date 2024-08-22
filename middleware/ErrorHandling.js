function errorHandling(err, req, res, next) {
    if (err || res.statusCode >= 400) {
        res.json(
            {
                status: res.status||
                res.statusCode || 500,
                err: "We apologize, an error seems to have occured. Please try again later."
            }
        )
    } next()
}

export {
    errorHandling
}