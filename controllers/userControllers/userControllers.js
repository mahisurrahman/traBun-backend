const statusCode = require ("../../services/statusCodes/statusCodes.js");
const { createUserServices, loginUserServices } = require("../../services/userServices/userServices.js");

const createErrorMessage = (message, data)=>{
    return {
        status: statusCode,
        data: data,
        message: message,
        error: true,
    }
}

module.exports = {
    async createUserController (req, res){
        try{
            let response = await createUserServices(req.body);
            return res.status(response.status).send(response);
        }catch(error){
            console.log("Create User Controller Error", error);
            const newError = createErrorMessage();
            newError.data = error;
            newError.message = "Create User Controller Error";
            newError.status = statusCode.internalServerError;
            newError.error = true;
            return res.status(newError.status).json(newError);
        }
    },

    async loginUserController (req, res){
        try{
            let response = await loginUserServices(req.body);
            return res.status(response.status).send(response);
        }catch(error){
            console.log("Login User Controller Error", error);
            const newError = createErrorMessage();
            newError.data = error;
            newError.message = "Login User Controller Error";
            newError.status = statusCode.internalServerError;
            newError.error = true;
            return res.status(newError.status).json(newError);
        }
    }
}