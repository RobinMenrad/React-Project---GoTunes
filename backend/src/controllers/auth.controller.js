const { authService } = require("../services");

class AuthController {
  static async login(req, res) {
    let resData = { success: false };

    try {
      const { email, password } = req.body;
      const token = await authService.login(email, password);

      resData = { token, success: true };
    } catch (err) {
      switch (err.name) {
        case "AuthentificationError":
          res.status(403);
          resData = {
            success: false,
            errors: {
              email: "email and password do not match",
              password: "email and password do not match",
            },
          };
          break;

        case "ValidationError":
          res.status(400);
          resData = {
            success: false,
            errors: { email: "Enter a valid email address" },
          };
          break;

        default:
          console.error(err);
          res.status(500);
          resData = {
            success: false,
            errors: { server: "Internal server error" },
          };
      }
    }

    return res.json(resData);
  }

  static async register(req, res) {
    let resData = {};

    try {
      const user = await authService.register(req.body);
      resData = { success: true, user };
    } catch (err) {
      switch (err.name) {
        case "DuplicationError":
          res.status(409);
          resData = {
            success: false,
            errors: { email: "Email already used" },
          };
          break;

        case "ValidationError":
          res.status(400);
          resData = {
            success: false,
            errors: { email: "Enter a valid email address" },
          };
          break;

        default:
          console.error(err);

          res.status(500);
          resData = {
            success: false,
            errors: { server: "Internal server error" },
          };
      }
    }

    return res.json(resData);
  }
}

module.exports = AuthController;
