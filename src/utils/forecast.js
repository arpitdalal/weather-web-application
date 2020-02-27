const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/f59a17e3d1bec0ac5a10b57dec3bfbed/' + latitude + ',' + longitude + '?units=si'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Oops :O. Something went wrong!')
        } else if (body.error) {
            callback(body.error)
        } else {
            callback(undefined, '<span class="green">' + body.daily.data[0].summary
                + '<br>There is ' + body.currently.precipProbability + '% chance of rain.</span>'
                + '<br>Current temperature: <span class="green">' + body.currently.temperature + '° C</span>'
                + '<br>Temprature high: <span class="green">' + body.daily.data[0].temperatureHigh + '° C</span>'
                + '<br>Temperature low: <span class="green">' + body.daily.data[0].temperatureLow + '° C</span>'
                + '<br>Wind speed: <span class="green">' + body.daily.data[0].windSpeed + ' meters/sec</span>')
        }
    })
}

module.exports = forecast