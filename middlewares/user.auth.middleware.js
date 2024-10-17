const jwt = require("jsonwebtoken");
const statusCodes = require("../services/statusCodes/statusCodes.js");

async function verifyJwt(req, res, next) {
  try {

  } catch (error) {
    console.log("Json Web Token MiddleWare Error", error);
    return {
      status: statusCodes.unAuthorized,
      error: true,
      data: null,
      message: "Authorization Failed for JWT",
    };
  }
}

module.exports = { verifyJwt };
