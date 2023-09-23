const songsRoutes = require("./songs/index");

const middlewares = (app) => {
  app.use("/", songsRoutes);
};

module.exports = middlewares;
