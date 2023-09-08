const User = require("../models/user");
const jwt = require("jsonwebtoken")

const handleErrors = (err)=>{
  console.log(err.message , err.code)
  let errors ={email:"", password:""}

  if(err.code===11000){
    errors.email="That email is already registered"
    return errors
  }

  if(err.message.includes("user validation failed")){
    Object.values(err.errors).forEach(({properties}) => {
      errors[properties.path]=properties.message
    });
  }
  return errors
}
 const maxAge= 2*24*60*60
const createToken = (id)=>{
 return jwt.sign({id}, "aline secret" , {expriesIn:maxAge})
}

const signupGet = (req, res) => {
  res.render("signup");
};

const signupPost = async (req, res) => {
  try{
    const{email,password}=req.body
    const user = new User({email, password});
    await user.save()
    const token = createToken(user._id)
    res.cookie("jwt",token,{httpOnly:true, maxAge:maxAge*1000})
    res.status(201).json(user._id) 
  }
  catch(err){
    const error = handleErrors(err)
    res.status(400).json({error})

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
