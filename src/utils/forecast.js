const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/f59a17e3d1bec0ac5a10b57dec3bfbed/' + latitude + ',' + longitude + '?units=si'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Oops :O. Something went wrong!')
        } else if (body.error) {
            callback(body.error)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature
                + ' degrees out. There is ' + body.currently.precipProbability
                + '% chance of rain.')
        }
    })
}

module.exports = forecast