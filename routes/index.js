const express = require('express')
const { Student ,Note} = require('../model/noteSchema')


const router = express.Router()

router.get("/notes",async(req,res)=>{
    try {
        let oldNotes = await Note.find()
        console.log(oldNotes);
        res.json(oldNotes)
    } catch (error) {
        res.json({status:400,message:error})
    }
})

router.get("/notes/:id",async(req,res)=>{
    try {
        let curr = await Note.findById(req.params.id)
        res.json({status:200,data:curr})
    } catch (error) {
        res.json({status:400,message:error})
    }
})

router.post("/notes",async(req,res)=>{
    try {
        let newNote = await Note({
            note:req.body.note
        })
        let myNote = await newNote.save()
        res.json({status:200,message:myNote})
    } catch (error) {
        res.json({status:400,message:error})
    }
})

router.patch("/notes/:id",async(req,res)=>{
    try {
        let data = await Note.findByIdAndUpdate(req.params.id,{note:req.body.note})
        res.json({status:200, message:data})
    } catch (error) {
        res.json({status:400,message:error})
    }
})

router.delete("/notes/:id",async(req,res)=>{
    try {
        let data = await Note.findByIdAndDelete(req.params.id)
        res.json({status:200, message:data})
    } catch (error) {
        res.json({status:400,message:error})
    }
})

router.post('/student',async(req,res)=>{
    try {
        let newData = await Student({
            name:req.body.name,
            email:req.body.email
        })
        let ans = await newData.save()
        res.json({status:200,message:ans})
    } catch (error) {

        res.json({status:400,message:error})
    }
})

router.get('/student',async(req,res)=>{
    try {
        let data = await Student.find()
        res.json({status:200,message:data})
    } catch (error) {

        res.json({status:400,message:error})
    }
})



module.exports = router;