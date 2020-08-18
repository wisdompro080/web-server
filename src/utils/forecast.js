const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url="http://api.weatherstack.com/current?access_key=17a4892219672010337f5190adca3526&query="+latitude+","+longitude;


    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions)
        }
    })
}

module.exports = forecast