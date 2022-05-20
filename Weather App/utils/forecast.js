const request = require('request')


var forecast = function(latitude, longitude,callback){
    const url =  'https://api.darksky.net/forecast/539c3d48641ba07dcb8e2849036435a7/'+longitude+','+latitude+'?units=si'
    request({url:url,json:true},(error,response)=>{
        if(error){
            callback("Low-level Error",undefined)
        }else if(response.body.error){
            callback("Cordinate Error",undefined)
        }else{
            var status = {
                temperature: response.body.currently.temperature,
                summary: response.body.daily.data[1].summary,
                zone: response.body.timezone
            }
            callback(undefined,status)
        }
    })

}

// forecast(23.3234,45.123 (error,data)=>{
//     console.log("error",error)
//     console.log('data',data)

// })



module.exports = forecast