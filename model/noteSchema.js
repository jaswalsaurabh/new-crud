const mongoose = require('mongoose')

const uri = "mongodb://localhost:27017/noteDb"
const uri2 = "mongodb://localhost:27017/studentDb"

const Con = mongoose.createConnection(uri,{useNewUrlParser:true})
const Con2 = mongoose.createConnection(uri2,{useNewUrlParser:true})


const Note = Con.model('note',{
    note:{
        type:String,
        required:true
    }
})

const Student = Con2.model('student',{
    name:{
        type:String,
        required:true
    },
    email:{
        type:String
    }
})

module.exports = {Student,Note,Con,Con2}