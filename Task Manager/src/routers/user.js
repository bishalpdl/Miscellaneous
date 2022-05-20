const express = require('express')
const router = new express.Router()
const User = require('../models/user')
const auth = require('../middleware/auth')


router.post('/users', async (req, res)=>{
    const user = new User(req.body)

    try{
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({user, token})

    }catch(e){
        res.status(400).send(e)
    }


    // user.save().then(()=>{
    //     res.status(201).send(user)
    // }).catch((e)=>{
    //     res.status(400).send(e)
    // })
})

router.get('/users/me', auth ,async(req, res)=>{
    res.send(req.user)
    
    
    // User.find({}).then((users)=>{
    //     res.status(200).send(users)
    // }).catch(()=>{
    //     res.status(500)
    // })
})

router.get('/users/:id',async (req, res)=>{
    const _id = req.params.id

    try{
        user = await User.findById(_id)
        if(!user){
            return res.status(404).send()
        }
        res.send(user)
    }catch(e){
        res.status(404).send(e)

    }
})

router.patch('/users/:id', async(req, res)=>{
    const update = Object.keys(req.body)
    const allowedupdates = ['name', 'email', 'password', 'age']
    const isValidOperation = update.every((update)=> allowedupdates.includes(update))
    if(!isValidOperation){
        res.status(400).send({error:'invalid operation'})
    }


    try{
        // const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})

        const user = await User.findById(req.params.id)
        update.forEach((update)=>{
            user[update] =  req.body[update]
        })

        await user.save()


        if(!user){
            return res.status(404).send()
        }
        res.send(user)
    }catch(e){
        res.send(e)
    }
})

router.delete('/users/:id', async (req, res)=>{
    try{
        const user = await User.findByIdAndDelete(req.params.id)
        if(!user){
            return res.status(404).send()
        }
        res.send(user)
    }catch(e){
        res.send(e)
    }
})

router.post('/users/login', async(req, res)=>{

    try{
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.send({user, token})
    }catch(e){
        res.status(400).send(e)
    }
})


module.exports = router