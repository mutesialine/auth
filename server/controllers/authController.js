const User = require("../models/user");
const jwt = require("jsonwebtoken");

const handleErrors = (err) => {
  console.log(err.message, err.code);
  let errors = { email: "", password: "" };

  if (err.code === 11000) {
    errors.email = "That email is already registered";
    return errors;
  }

  if (err.message.includes("user validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};
const maxAge = 3 * 24 * 60 * 60;

const createToken = (email) => {
  const token = jwt.sign({ email }, "aline secret", { expiresIn: maxAge });
  return token;
};

const signupPost = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = new User({ email, password });
    await user.save();
    const token = createToken(user.email);
    res.status(200).json({ user: token });
  } catch (err) {
    const error = handleErrors(err);
    res.status(400).json({ error });
  }
};

const loginPost = async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
    });

    if (user) {
      const token = createToken(user.email);
      return res.status(200).json({ user: token });
    } else {
      return res.status(401).json({ user: false });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err.message });
  }
};

const signupGet = (req, res) => {
  res.render("signup");
};

const loginGet = (req, res) => {
  res.render("login");
};

module.exports = { signupGet, signupPost, loginGet, loginPost };
