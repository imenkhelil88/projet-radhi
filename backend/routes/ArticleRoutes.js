const express=require("express")
const { Addarticle, Getarticle, Deletearticle, Editarticle, Getone } = require("../controllers/ArticleControlls")
const articleRoutes=express.Router()



articleRoutes.post("/api/article/post",Addarticle)
articleRoutes.get("/api/article/get",Getarticle)
articleRoutes.delete("/delete/:id",Deletearticle)
articleRoutes.put("/update/:id",Editarticle)
articleRoutes.post("/filterpost",Getone)



module.exports=articleRoutes