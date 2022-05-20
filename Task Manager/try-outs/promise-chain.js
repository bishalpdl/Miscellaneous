require('../src/db/mongoose')
const User = require('../src/models/user')
const Task = require('../src/models/task')

// _id = '5eaccc9d9b7fa51780a805cd'
// User.findByIdAndUpdate(_id,{name:'DelRay', age: 100}).then((user)=>{
//     console.log(user)
//     return User.findById(_id)
// }).then((user_up)=>{
//     console.log(user_up)
//     return User.countDocuments({age:0})
// }).then((counter)=>{
//     console.log(counter)
// }).catch((e)=>{
//     console.log(e)
// })

// const updateAgeAndCount = async (id, age) =>{
//     const user = await User.findByIdAndUpdate(_id = id, {age})
//     const count = await User.countDocuments({age})
//     return count
// }

// updateAgeAndCount('5eaccc9d9b7fa51780a805cd', 100).then((result)=>{
//     console.log(result)
// }).catch((error)=>{
//     console.log(error)
// })

const deleteAndCount = async(id) =>{
    const del = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed: false})
    return count
}

deleteAndCount('5eaa493d885ab42214cdcd15').then((result)=>{
    console.log(result)
}).catch((e)=>{
    console.log(e)
})