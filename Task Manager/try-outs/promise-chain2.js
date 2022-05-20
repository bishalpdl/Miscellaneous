require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.countDocuments({completed: false}).then((result)=>{
    console.log(result)
    return Task.findByIdAndDelete({_id:'5eaa49030cfdb618ac80d99e'})
}).then((result)=>{
    console.log(result)
    return Task.countDocuments({completed: false})
}).then((result)=>{
    console.log(result)
}).catch((e)=>{
    console.log(e)
})

