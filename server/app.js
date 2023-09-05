const express= require("express")
const mongoose= require("mongoose")
const dotenv= require("dotenv")

dotenv.config()

const app=express()
app.use(express.static('public'))

const dbURI = process.env.dbURI
mongoose.connect(dbURI)
.then(result=> console.log("connected to the db"))
.catch(err=>console.log(err))

app.listen(3000 , 'localhost',()=>{
    console.log("listening the local host")
})