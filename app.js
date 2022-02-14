//express
const express=require('express')
const router=require('./routes/route1')
const app=express()

//router is used to keep all routes in file file
//use route

app.use('/',router)







app.listen(3000,()=>{
    console.log("Listening")
})