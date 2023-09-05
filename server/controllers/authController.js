const User = require("../models/user");

const signupGet = (req, res) => {
  res.render("signup");
};
const signupPost = (req, res) => {
    const{fullName,username,password}=req.body
  const user = new User({
    fullName:fullName,
    username:username,
    password:password,
  });
  user.save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Internal Server Error" });
    });
};

const loginGet = (req, res) => {
  res.render("login");
};
const loginPost = (req, res) => {
    console.log( req.body)
  res.send("login");
};
module.exports = { signupGet, signupPost, loginGet, loginPost };
