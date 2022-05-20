const request = require('request')

const geocode = (address,callback) =>{
    const geoUrl= 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoiYmlzaGFsMSIsImEiOiJjanZxNDRndGEwMzRxM3ptc2NsMmJsaTZqIn0.DMDTLnStAllK7-7Vt4Rorg'
    request({url:geoUrl,json:true},(error,response,body)=>{
        if(error){
            callback('Network Error occured',undefined)
        }else if(response.body.message){
            callback('Unable to find a location', undefined)
        }else{
            var locationdata = {
                latitude : response.body.features[0].center[0], 
                longitude : response.body.features[0].center[1],
                location: response.body.features[0].place_name
            }
            callback(undefined,locationdata)
        }
    })
}


 module.exports = geocode