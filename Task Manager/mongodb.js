// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

// const connectionURL = 'mongodb://127.0.0.1:27017'
// const databaseName = 'task-manager'

// MongoClient.connect(connectionURL, {useNewUrlParser: true, useUnifiedTopology: true}, (error, client)=>{
//     if(error){
//         return console.log('Unable to connect to database')
//     }
//      const db = client.db(databaseName)
    
//      // const collection = db.collection("users").insertOne({
//     //     name: 'Andrew Yang',
//     //     age: 45
//     // }, (error,result)=>{
//     //     if(error){
//     //         return console.log("Error occured")
//     //     }
//     //     console.log(result.ops)
//     // })

//     // const collection = db.collection('users').insertMany([{
//     //     name: 'Jen',
//     //     age:18
//     // },{
//     //     name:'Mars',
//     //     age:23
//     // }],(error, result)=>{
//     //     if (error){
//     //         return console.log("Error occured")
//     //     }
//     //     console.log(result.ops)
//     // })
    
//     const collection = db.collection('tasks').insertMany([{
//         description: 'Do this',
//         completed: true
//     },{
//         description: 'Homework',
//         comepleted: false
//     },{
//         description: 'Learn Nodejs',
//         completed: false
//     }],(error,result)=>{
//         if(error){
//             return console.log('Error encountered')
//         }
//         console.log(result.ops)
//     })

// })
