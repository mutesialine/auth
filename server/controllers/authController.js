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
  const { email, password } = req.body;
  try {
    const user = new User(email, password);
    const token = createToken(user.email);
    await user.save();
    res.status(200).json({ user: token , email ,password });
  } catch (err) {
    const error = handleErrors(err);
    res.status(400).json({ error });
  }
};

const loginPost = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);

    if (user) {
      const token = createToken(user.email);
      return res.status(200).json({ user: token , email });
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
