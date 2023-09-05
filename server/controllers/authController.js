const signupGet=(req, res)=>{
    res.render("signup")
}
const signupPost=(req, res)=>{

}

const loginGet =(req, res)=>{
    res.render("login")
}
const loginPost =(req, res)=>{
     res.send("login")
}
module.exports={signupGet, signupPost,loginGet,loginPost}