const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {useNewUrlParser: true, useCreateIndex: true});



// creating model using Schema 
// const taskSchema = new mongoose.Schema({
//     description: {type: String},
//     completed: {type: Boolean}
// })

// const task = mongoose.model('task', taskSchema)

// const task1 = new task({
//     description: 'Complete Nodejs',
//     completed: false
// })

// task1.save().then((result)=>{
//     console.log(result)
// }).catch((err)=>{
//     console.log('Error occured' + err)
// })

