const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=5acf23d3dd56698b83306f21e81776ca&query='+latitude+','+longitude+'&units=m'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, 
                {
                   forecast: body.current.weather_descriptions[0] + ' It is currently ' + body.current.temperature + ' degress out. It feels like ' + body.current.feelslike, 
                   local_time:body.location.localtime,
            })
        }
    })
}

module.exports = forecast