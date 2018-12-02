const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    proxy(
      [
        "/api/machine_units",
        "/auth/google",
        "/api/logout",
        "/api/login",
        "/api/current_user",
        "/api/users/current",
        "/api/users"
      ],
      {
        target: "http://localhost:5000/"
      }
    )
  );
};


// "proxy": [{"target":"http://localhost:5000/"},{"target":"http://localhost:5000/auth"}],