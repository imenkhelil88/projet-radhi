const express = require("express")
const connectDb = require("./config/connectDb")
const userRoutes = require("./routes/userRoutes")
const articleRoutes = require("./routes/ArticleRoutes")
const app = express()
const port=7000

const cors = require('cors');
app.use(cors({
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}));
app.use(express.json())

connectDb()
app.use("/api/user",userRoutes)
app.use("/",articleRoutes)
app.listen(port,console.log(`app is runninng on port ${port}`))