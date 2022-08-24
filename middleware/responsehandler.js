const BadRequestError = require("../errors/baderror");
const UnauthorizedError = require("../errors/unauthorizedaccess");

let onError = (err, req, res, next) => {

    
    if (err instanceof BadRequestError  || err instanceof UnauthorizedError) {
        res.json(err.json);

        return next();
    }
}
module.exports={
onError:onError};