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
const msgone = document.querySelector('#msg-1')
const msgtwo = document.querySelector('#msg-2')

weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const loc = search.value

    msgone.textContent='Loading...'
    msgtwo.textContent=''
    //  console.log(loc)
    fetch('/weather?address='+loc).then((response)=>{
    response.json().then((data)=>{
        if(data.error)
            // console.log(data.error)
            msgone.textContent=data.error
        else{
            // console.log(data.Location)
            // console.log(data.Forecast)
            msgone.textContent=data.Location
            msgtwo.textContent=data.Forecast
        }    

    
    } )
})

})