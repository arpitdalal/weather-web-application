const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const msgDiv = document.querySelector('#msg')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    msgDiv.innerHTML = '<p>Searching...</p>'
    const location = search.value;
    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data => {
            if (data.error) {
                return msgDiv.innerHTML = '<p class="errorMsg">' + data.error + '</p>'
            }
            return msgDiv.innerHTML = '<p>In <span class="green">' + data.location + 
                ',</span><br>It is <span class="green">' + data.forecast + '</span></p>'
        }))
    })
})