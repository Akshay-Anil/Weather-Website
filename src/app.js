const path =require('path')
const express = require('express')
const hbs = require('hbs')
const geocode= require('./Utilities/geocode')
const weather = require('./Utilities/weather')

const app =express()
const port = process.env.PORT || 3000

//define path for express config
const dir = path.join(__dirname,'../public')
const viewPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

// set up handlebar engine and views
app.set('view engine','hbs') 
app.set('views',viewPath)
hbs.registerPartials(partialsPath)

// setup static directory to serve
app.use(express.static(dir))

app.get('',(req,res)=>{
    res.render('index',{
        title : 'Weather App', 
        
        foot : 'Created by Akshay'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title : 'ABOUT',
        about : 'Web Application developed using Node JS and Express JS',
        foot : 'Created by Akshay'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title : ' Help',
        help : 'Sorry no help',
        foot : 'Created by Akshay'
    })
})

app.get('/help/*',(req,res)=>{
    res.render('error',{
        title: 'Error',
        about : 'Help article not found',
        foot : 'Created by Akshay'
    })
})

app.get('/weather',(req,res)=>{ 
    
    // console.log(req.query.search)
    if(!req.query.address){
        return res.send({
            error: "Provide an address"
        })
    }
    else{
        geocode(req.query.address,(error,{latitude,longitude,location}={})=>{
            if(error)
                return res.send({error})
            weather({latitude  , longitude },(error,wdata)=>{
                if(error)
                    return res.send({error})
                
                res.send({
                    Location: location,
                    Forecast : wdata.Desc,
                    Temperature : wdata.Current_Temp,
                    Humidity : wdata.Humidity,
                    Presipitation : wdata.Presip,
                    Wind_Speed : wdata.Wind_Speed,
                    Address: req.query.address
                })    
                    // console.log("Location: ",location)
                    // console.log(wdata)
        })    
            
    })
}
    
})

app.get('*',(req,res)=>{
    res.render('error',{
        title : 'Error ',
        about  : 'Page not Found',
        foot : 'Search correctly Fkr'
    })
})

app.listen(port,()=>{
    console.log('Server is up at port '+port)
})