const express = require('express')
const mongoose = require('mongoose')
const note = require('./model/noteSchema')
const router = require('./routes/index')
const {Con2,Con} = require('./model/noteSchema')

const app = express()   


app.use(express.json())

// app.use()

app.use("/",router)



Con.on("open",()=>{
    console.log("db is connected ");
})
Con2.on("open",()=>{
    console.log("student db is connected ");
})

app.listen(3001,()=>{
    console.log("app is started at 3001");
})

