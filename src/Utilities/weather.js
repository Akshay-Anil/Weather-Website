const request = require('request')

const weather =({latitude,longitude},callback)=>{
    const url='http://api.weatherstack.com/current?access_key=80a9fe0c2668659a918899b60deab348&query='+ latitude+','+longitude +'&units=f'

    request({url , json : true},(error,{body})=>{
        if(error){
            callback('Unable to connect to servers!')
        }else if(body.error)
            callback('Unable to find location, Try another search!')
         else
            callback(undefined,"It is currently "+body.current.temperature +" F while it feels like " + body.current.feelslike+" F")   
    })
}
 
module.exports = weather 