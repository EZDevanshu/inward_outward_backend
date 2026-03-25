const { loginUser } = require("../services/auth.service");

async function login(req, res) {
  try {
    const email = req.body.email || req.body.Email;
    const password = req.body.password || req.body.Password;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "email/password required",
      });
    }

    const result = await loginUser(email, password);

    if (!result.success) {
      return res.status(401).json(result);
    }

    return res.status(200).json({
      success: true,
      message: result.message,
      token: result.token,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}

module.exports = { login };
