const express= require("express")
const mongoose= require("mongoose")
const dotenv= require("dotenv")
const userRoutes=require('./routes/authRoutes')
const cookieParser = require("cookie-parser")
const cors = require('cors');

dotenv.config()
const app=express()
app.use(cors());
app.use(cookieParser())
app.use(express.static('public'))
app.use(express.json())


const dbURI = process.env.dbURI
mongoose.connect(dbURI)
.then(result=> console.log("connected to the dbb"))
.catch(err=>console.log(err))

app.use('/',userRoutes)

app.listen(3000 , 'localhost',()=>{
    console.log("listening the local host")
})