console.log("Client side js is  loaded") 

// fetch('http://localhost:3000/weather?address=Kollam').then((response)=>{
//     response.json().then((data)=>{
//         if(data.error)
//             console.log(error)
//         else{
//             console.log(data.Location)
//             console.log(data.Forecast)
//         }    

    
//     } )
// })

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
//  console.log(weatherForm)
// const mone = document.querySelector('#m1')
// const mtwo = document.querySelector('#m2')
// const mthree = document.querySelector('#m3')
// const mfour = document.querySelector('#m4')
// const mfive = document.querySelector('#m5')

const msgone = document.querySelector('#msg-1')
const msgtwo = document.querySelector('#msg-2')
const msgthree = document.querySelector('#msg-3')
const msgfour = document.querySelector('#msg-4')
const msgfive = document.querySelector('#msg-5')
const msgsix = document.querySelector('#msg-6')


weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const loc = search.value

    msgone.textContent='Loading...'
    msgtwo.textContent=''
    msgthree.textContent=''
    msgfour.textContent=''
    msgfive.textContent=''
    msgsix.textContent=''
    //  console.log(loc)
    fetch('/weather?address='+loc).then((response)=>{
    response.json().then((data)=>{
        if(data.error)
            // console.log(data.error)
            msgone.textContent=data.error
        else{
            msgone.textContent="Location: "+data.Location
            msgtwo.textContent="Description: "+data.Forecast
            msgthree.textContent="Current Temperature: "+data.Temperature+" °C"
            msgfour.textContent="Humidity: "+data.Humidity+" %"
            msgfive.textContent="Precipitation: "+data.Presipitation+" mm"
            msgsix.textContent="Wind Speed: "+data.Wind_Speed+" kmph"
            
        }    

    
    } )
})

})