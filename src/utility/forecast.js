const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=a6114b5fb9d39daf39b18d0d0a2c68ef&query=${latitude},${longitude}`
    //body is a property from response
    request({ url: url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service. Lost connectivity', undefined)
        } else if (body.error) {
            callback('Unable to find location. Recheck URL', undefined)
        } else {

            const temperature = body.current.temperature
            const feelslike = body.current.feelslike
            const description = body.current.weather_descriptions[0]

            callback(undefined, {
                message: `${description}. It is currently ${temperature} degrees out. Its feels like ${feelslike} degrees out.`
            })
        }
    })
}

module.exports=forecast