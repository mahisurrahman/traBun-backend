const { app } = require("./app");
const userRoutes = require("./routes/userRoutes/userRoutes.js");

const routerManager = () => {
  //User Routes//
  app.use("/users", userRoutes);
};

module.exports = routerManager;
