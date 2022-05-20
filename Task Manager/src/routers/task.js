const express = require('express')
const router = new express.Router()
const Task = require('../models/task')

router.post('/tasks', async (req,res )=>{
    const task = new Task(req.body)

    try{
        await task.save()
        res.status(201).send(task)
    }catch(e){
        res.status(400).send(e)
    }

    // task.save().then(()=>{
    //     res.status(201).send(task)
    // }).catch((e)=>{
    //     res.status(400).send(e)
    // })
})

router.get('/tasks', async (req,res)=>{
    
    try{
        const tasks = await Task.find({})
        res.send(tasks)
    }catch(e){
        res.status(500).send(e)
    }
    // Task.find({}).then((task)=>{
    //     res.send(task)
    // }).catch((error)=>{
    //     res.status(500).send()
    // })
})

router.get('/tasks/:id', async (req,res)=>{
    const _id = req.params.id
    

    try{
        const task = await Task.findById(_id)
        if(!task){
            return res.status(404).send()
        }
        res.send(task)
    }catch(e){
        res.status(500).send(e)
    }
    
    // Task.findById(_id).then((task)=>{
    //     if(!task){
    //         return res.status(404).send()
    //     }
    //     res.send(task)

    // }).catch(()=>{
    //     res.status(500).send('Error occured.')
    // })
})

router.patch('/tasks/:id', async(req, res)=>{
    const update = Object.keys(req.body)
    const allowedupdates = ['description', 'completed']
    const isValidOperation = update.every((update)=> allowedupdates.includes(update))
    if(!isValidOperation){
        res.status(400).send({error:'invalid operation'})
    }

    try{
        // const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
        const task = await Task.findById(req.params.id)
        update.forEach((update)=>{
            task[update] = req.body[update]
        })


        if(!task){
            return res.status(404).send()
        }
        res.send(task)

    }catch(e){
        res.status(400)
    }
})

router.delete('/tasks/:id', async (req, res)=>{
    try{
        const task = await Task.findByIdAndDelete(req.params.id)
        if(!task){
            return res.status(404).send()
        }
        res.send(task)
    }catch(e){
        res.send(e)
    }
})


module.exports = router

