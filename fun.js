
// //options object
// normal JavaScript object that contains a set of named parameters that are passed into a function.
// example:
// function({
//     url: "http://date.jsontest.com/",
//     success: function (data) {console.log(data);},
//     cache: true,
//     timeout: 500
// });

// JSON.parse() takes a JSON string and transforms it into a JavaScript object.
// JSON.stringify() takes a JavaScript object and transforms it into a JSON string.


// request({ url: url},(error,response)=>{
// const data=JSON.parse(response.body)//converting to object format
// ///here the data is available in the body section so log it in here
// console.log(data.current)
// }) 

// head back over to the npm request module page and scroll down to the table of contents
// at the bottom, we have all available options.
// If we click this, this is going to list out all of the options we can use with request function.
// now we rerwrite the above code using url and json options.
// json - sets body to JSON representation.Additionally, parses the response body as JSON.

import request from 'request'
import chalk from 'chalk'
//const url="https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiaGFyaXByaXlhc3ZheiIsImEiOiJjbDhiaWo1MmMwOHV2M3hxOXhibGRvOHdrIn0.aiEM1MZfzDRG6v-eLaus5A&limit=1"
// wrong 
const url="https://api.mapbox.com/geocoding/v5/mapbox.places/.json?access_token=pk.eyJ1IjoiaGFyaXByaXlhc3ZheiIsImEiOiJjbDhiaWo1MmMwOHV2M3hxOXhibGRvOHdrIn0.aiEM1MZfzDRG6v-eLaus5A&limit=1"


request({url: url, json: true},(error,response)=>{
if(error){
console.log(chalk.inverse.red('ERROR:') +' Lost Internet Connectivity!')
}
else if(response.body.features.length===0){
    console.log(chalk.inverse.red('ERROR:') +' Unable to find the location. Check your URL!')
}
else{
console.log('The gecoding for Los Angeles is ' +response.body.features[0].center[1]+ ' for latitude and ' + response.body.features[0].center[0]+ ' for longitude.' )
}
})

//     example1:
//         temperatue and feels like what challenge

    
        // import request from 'request'
        // import chalk from 'chalk'
       
        // //const url='http://api.weatherstack.com/current?access_key=a6114b5fb9d39daf39b18d0d0a2c68ef&query=28.7041,%2077.1025'
        // //wrong url: 
        // const url='http://api.weatherstack.com/current?access_key=a6114b5fb9d39daf39b18d0d0a2c68ef&query='

        // request({url:url, json:true},(error,response)=>{
        //    if(error){
        //     console.log(chalk.inverse.red('ERROR:') +' Lost Internet Connectivity!')
        //    }else if (response.body.success===false){
        //     console.log(chalk.inverse.red('ERROR:') + ' Wrong URL. Recheck URL')
        //    }
        //    else {
        //     console.log(response.body.current.weather_descriptions[0]+'. The temperature is '+response.body.current.temperature+' and it feels like '+response.body.current.feelslike+' in '+response.body.location.region  )
        //    }
        // })
        //Note: to obtain the values in other units check out the documentation of weather stack and add another parameter for units in the url

