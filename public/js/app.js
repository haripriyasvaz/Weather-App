


console.log("client site javascript file is loaded")
//fetching data from the http request...fetching..then...response..json..then..data
// fetch('http://').then(   (response)=>{
// response.json().then(   (data)=>{
// console.log(data)
// })
// })

const weatherForm=document.querySelector('form')//to start process when clicking submit button
const search=document.querySelector('input')//to get location
const message1=document.querySelector('#message_1')//to display paragraph 1
const message2=document.querySelector('#message_2')//to display paragraph 2



weatherForm.addEventListener('submit', (e)=>{
e.preventDefault()
const location=search.value
message1.textContent='Loading...'//display before calling the url
message2.textContent=''
fetch('http://localhost:5000/weather?address='+location).then((response) => {
    response.json().then((data)=>{
        if(data.error){
        return  message1.textContent=data.error
        }
        else{
        message1.textContent=data.Location
        const msg=JSON.stringify(data.Forecast).split(":", 2)[1].split("}",1)
        message2.textContent=msg}
        
    })

})
})

    