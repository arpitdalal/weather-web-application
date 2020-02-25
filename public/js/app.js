fetch('http://localhost:3000/weather?address=boston').then((response) => {
    response.json().then((data => {
        if (data.error) {
            return console.log(data.error)
        }
        console.log(data.location, data.forecast)
    }))
})