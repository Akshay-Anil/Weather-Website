const request = require('request')

const weather =({latitude,longitude},callback)=>{
    const url='http://api.weatherstack.com/current?access_key=80a9fe0c2668659a918899b60deab348&query='+ latitude+','+longitude +'&units=m'

    request({url , json : true},(error,{body})=>{
        if(error){
            callback('Unable to connect to servers!')
        }else if(body.error)
            callback('Unable to find location, Try another search!')
         else
            // callback(undefined,"It is currently "+body.current.temperature +" C while it feels like " + body.current.feelslike+" C")   
            callback(undefined,{
                Current_Temp: body.current.temperature,
                Desc : body.current.weather_descriptions[0],
                Humidity : body.current.humidity,
                Presip : body.current.precip,
                Wind_Speed : body.current.wind_speed
            })
    })
}
 
module.exports = weather 