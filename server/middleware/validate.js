module.exports = (validator) => {
    return (req, res, next) => {
        // destructure the error from body
        const { error } = validator(req.body);
        if (error) {
            return res.status(400).send(error.details[0].message)
        }

        next();
    }
}