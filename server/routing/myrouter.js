const express = require('express')
const mydatapattern = require('../schimas/myschima')

const myapp = express.Router()

myapp.get('/',(req,res)=>{
    res.send('backend is on')
})

myapp.post('/registernote',async (req,res)=>{
    const {title,content,updatedAt} = req.body
    const postdata = new mydatapattern({title,content,updatedAt})
    await postdata.save()
    res.status(200).json({data:postdata,status:255,message:'data successfully registered'})
    })

myapp.get('/noteslist', async(req,res)=>{
    const notelist = await mydatapattern.find()
    res.status(200).json({notelist:notelist, status:220,message:'all note list'})
})

myapp.get('/singlenote/:id',async(req,res)=>{
    const {id} = req.params
    const singlenote = await mydatapattern.findById({_id:id})
    res.status(200).json({message:'single note data',status:255,mydata:singlenote})
})

myapp.patch('/noteupdate/:id', async(req,res)=>{
    const {id} = req.params
    const ednote = await mydatapattern.findByIdAndUpdate(id,req.body,{new:true})
    res.status(200).json({message:'update note',status:251,mydata:ednote})
})




module.exports = myapp