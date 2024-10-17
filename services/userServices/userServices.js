const userModels = require("../../models/userModels/UserModel");
const statusCodes = require("../statusCodes/statusCodes.js");

module.exports = {
  async createUserServices(data) {
    try {
      const { firstName, lastName, email, mobileNumber, password } = data;
      console.log(firstName, lastName, email, mobileNumber, password);
    } catch (error) {
      console.log("Create User Service Error", error);
      return {
        status: statusCodes.badRequest,
        error: true,
        message: "Create User Service Failed",
        data: null,
      };
    }
  },

  async loginUserServices(data) {
    try {
        const {email, password} = data;
        console.log(email, password);
    } catch (error) {
      console.log("Login User Service Error", error);
      return {
        status: statusCodes.badRequest,
        error: true,
        message: "Login User Service Failed",
        data: null,
      };
    }
  },
};
