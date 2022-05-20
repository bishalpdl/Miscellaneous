const request = require('request')
const forecast = require('./utils/forecast')
const geocode = require('./utils/geocode.js')



geocode("Pokhara",(error,data)=>{
    if(error != undefined){
        console.log('Error Occured', error)
    }else{        
        forecast(data.latitude, data.longitude,(error,data)=>{
            console.log('error',error)
            console.log('data',data)
        })
    }
})






// forecast( (error,data)=>{
//     console.log("error",error)
//     console.log('data',data)

// })

// geocode('Boston', (error, data) => {
//     console.log("Error: ", error)
//     console.log("data: ", data)    
// })











// const url = 'https://api.darksky.net/forecast/539c3d48641ba07dcb8e2849036435a7/37.826?units=si'
// request({url: url, json:true}, (error, response, body)=>{
//     if(error){
//         console.log('Unable to connect to the internet!!!')
//     }else if(response.body.error){
//         console.log("Error occured in server")
        
//     }else{    
//     console.log("There is "+ response.body.currently.temperature +" degree out. There is "+ response.body.currently.precipProbability+" of rain.")
//     console.log(response.body.daily.data[1].summary)
//     }
// })



// const loc= 'https://api.mapbox.com/geocoding/v5/mapbox.places/pokhara.json?access_token=pk.eyJ1IjoiYmlzaGFsMSIsImEiOiJjanZxNDRndGEwMzRxM3ptc2NsMmJsaTZqIn0.DMDTLnStAllK7-7Vt4Rorg'
// request({url:loc, json:true}, (error,response,body)=>{
//     if(error){
//         console.log('low-level error occured.')
//     }else if(response.body.message){
//         console.log('Internal server error')
//     }else{    
//         var lon = response.body.features[0].center[0]
//         var lat = response.body.features[0].center[1]
//         console.log(lon,lat)
//     }
// })



// const geolocation = (address,callback) =>{
//     const geoUrl= 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoiYmlzaGFsMSIsImEiOiJjanZxNDRndGEwMzRxM3ptc2NsMmJsaTZqIn0.DMDTLnStAllK7-7Vt4Rorg'
//     request({url:geoUrl,json:true},(error,response,body)=>{
//         if(error){
//             callback('Network Error occured',undefined)
//         }else if(response.body.message){
//             callback('Unable to find a location', undefined)
//         }else{
//             var locationdata = {
//                 latitude : response.body.features[0].center[1], 
//                 longitude : response.body.features[0].center[0],
//                 location: response.body.features[0].place_name
//             }
//             callback(undefined,locationdata)
//         }
//     })
// }

// geolocation('Boston', (error, data) => {
//     console.log("Error: ", error)
//     console.log("data: ", data)    
// })