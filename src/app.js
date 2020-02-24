const path = require('path')
const express = require('express')

const app = express()
const publicDirPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates')

app.set('view engine', 'hbs')
app.set('views', viewsPath)

app.use(express.static(publicDirPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather APP',
        name: 'JSN'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About author',
        name: 'JSN'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help page',
        message: 'call me for help!'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is sunny :)',
        location: 'Charlottetown'
    })
})

app.listen(3000, () => {
    console.log('Server initialized on port 3000 :)')
})