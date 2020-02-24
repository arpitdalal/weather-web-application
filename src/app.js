const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define paths for Express config
const publicDirPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Seup static directory to serve
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
        name: 'JSN',
        message: 'call me for help!'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is sunny :)',
        location: 'Charlottetown'
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404 :(',
        name: 'JSN',
        errMessage: 'Sorry couldn\'t find the help document you are looking for :('
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404 :(',
        name: 'JSN',
        errMessage: 'Sorry couldn\'t find the page you requested :('
    })
})

app.listen(3000, () => {
    console.log('Server initialized on port 3000 :)')
})