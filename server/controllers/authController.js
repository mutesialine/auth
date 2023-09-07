const User = require("../models/user");

const handleErrors = (err)=>{
  console.log(err.message , err.code)
  let errors ={email:"", password:""}
  if(err.message.includes("user validation failed")){
    Object.values(err.errors).forEach(({properties}) => {
      errors[properties.path]=properties.message
    });
  }
  return errors
}

const signupGet = (req, res) => {
  res.render("signup");
};
const signupPost = async (req, res) => {
  try{
    const{email,password}=req.body
    const user = new User({email, password});
     await user.save()
    res.status(201).json(user)
  }
  catch(err){
    const error = handleErrors(err)
    res.status(500).json({error})
  }

}

const loginGet = (req, res) => {
  res.render("login");
};
const loginPost = (req, res) => {
    console.log( req.body)
  res.send("login");
};
module.exports = { signupGet, signupPost, loginGet, loginPost };
