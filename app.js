const geocode= require('./utility/geocode.js') 
const forecast= require('./utility/forecast.js') 
const chalk=require('chalk')

const address=process.argv[2]
if(!address){ 
    console.log('Please provide the name of the place')
}
else{
    geocode(address,(error,{latitude,longitude,place}={})=>{//latitude,longitude and place is obtained from data which is the response
        if (error){
            return console.log(chalk.inverse.red('ERROR'),error)//with return statement the function will not run the remaining code stops here
        }
        
           forecast(latitude,longitude,(error, forecastdata) => {
            if(error){
            return console.log(chalk.inverse.red('ERROR'), error)
            }
            
            console.log(chalk.yellow('PLACE'),place)
            console.log(chalk.yellow('FORECAST'), forecastdata)
          })
    })
}






       