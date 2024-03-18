const generator = require("generate-password");

const passwordGenerate = async (req, res) => {
  try {
    const data = req.body.password;

    const password = generator.generate({
      length: data.length || 12,
      numbers: data.number ? true : false,
      uppercase: data.uppercase ? true : false,
      lowercase: data.lowercase ? true : false,
      symbols: data.symbol ? true : false,
    });
    res
      .status(200)
      .json({ success: true, data: password, message: "Password is generate" });
  } catch (error) {
    res.status(500).json({ message: "serverError" });
  }
};
module.exports = {
  passwordGenerate,
};
