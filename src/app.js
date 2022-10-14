const path=require('path')

const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const chalk=require('chalk')
const hbs=require('hbs')

const geocode=require('./utility/geocode')
const forecast=require('./utility/forecast')



//console.log(__dirname)root to directory
//console.log(__filename)//root to file
//non-parameterised API
//sending request to server and fetching the response

//listen to port 3000
//1.localhost:3000/

app.listen(port, ()=>{
    console.log(chalk.blue('You are listening to port =>'), port)
})

//setting the handlebar engine for viewing template for dynamic html files
app.set('view engine','hbs')


//setting the root to templates folder(location of views)
const viewspath=path.join(__dirname,'../templates/views')
console.log(viewspath)
//configuring the views folder (here the views is replaced as templates folder)
app.set('views',viewspath)


//registeringpartials in hbs
const partialspath=path.join(__dirname,'../templates/partials')
hbs.registerPartials(partialspath)



//routing the handler
//in the browser search: http://localhost:5000
app.get('/',(req,res)=>{
res.render('index',{
    title: 'Weather App',
    name:  'S.Haripriya'
})
})

//in the browser search: http://localhost:5000/about
app.get('/about',(req,res)=>{
    res.render('about', {
        name: 'S.Haripriya',
        title: 'About Me'
    })
})


//in the browser search: http://localhost:5000/help
app.get('/help',(req,res)=>{
    res.render('help', {
        helptext: "This page is for queries",
        title: 'Weather App',
        name:  'S.Haripriya'
    })
})



//To load static html file type 'localhost:5000/###.html' in browser
const index_file_path=path.join(__dirname,'../public')
console.log(index_file_path)
app.use(express.static(index_file_path))


// To load API file type 'localhost:5000/weather' in browser
// app.get('/weather', (req,res) =>{
//     console.log('Fetching request...')   
//     res.send({
//         Location: "Delhi",
//         Forecast:"It is currently 34 degrees.Haze.There will be mostly sunny skies. The high will reach 94° on this humid day."
//     })
//     })

//query string
app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send({
        error: 'You must provide an address search term'
        })
    }

    geocode(req.query.address,(error,{latitude,longitude,place}={})=>{//latitude,longitude and place is obtained from data which is the response
        if (error){
            res.send({error})//with return statement the function will not run the remaining code stops here
        }
        
           forecast(latitude,longitude,(error, forecastdata) => {
            if(error){
            return res.send({error})
            }
            res.send({
                Location: place,
                Forecast:forecastdata,
                address: req.query.address
            })
          })
    })

    
})

//message for other APIs
app.get('*',(req,res)=>{
    res.render('e404',{
        title: 'Error 404:',
        error: 'The requested webpage is not found'
    })
})

app.get('/help/*',(req,res)=>{
    res.render('e404',{
        title: 'Error 404:',
        error: 'The requested webpage is not found'
    })
})

