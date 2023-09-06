const User = require("../models/user");

const handleErrors = (err)=>{
  console.log(err.message , err.code)
}

const signupGet = (req, res) => {
  res.render("signup");
};
const signupPost = (req, res) => {
    const{email,password}=req.body
  const user = new User({
    email:email,
    password:password,
  });
  user.save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
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
