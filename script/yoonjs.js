console.log(' Script Start ')

console.log('Declare testable functions')
function subtract(x, y) {
    return y - x
}

console.log('Define constants')

console.log('Declare event listeners')

document.getElementById('clicker').addEventListener('click', function () {
    const n = document.getElementById('name').value
    const i = parseInt(document.getElementById('birthyear').value)
    const j = 2019
    const ans = n + ', you are ' + subtract(i, j) + ' years old.'
    document.getElementById('result').innerHTML = ans

    console.log('add to local storage')
    localStorage.setItem("age", ans)
})

console.log('retrieve previous result')
document.getElementById('retrieve').addEventListener('click', function () {
    document.getElementById('retrieving').innerHTML = localStorage.getItem("age")
})

console.log('clear local storage')
document.getElementById('clearall').addEventListener('click', function () {
    localStorage.clear()
    document.getElementById('retrieving').innerHTML = ""
})

console.log('get random quotes: AJAX')
const url = "https://thesimpsonsquoteapi.glitch.me/quotes"

function getJoke() {
    return new Promise(function (resolve, reject) {  // a promise is an object with logic if resolved or if rejected
        const req = new XMLHttpRequest();  // make a request - built into JavaScript language
        req.timeout = 2000; // millisecs to respond
        req.onreadystatechange = function () {
            if (req.readyState === 4) {
                if (req.status === 200) {
                    const obj = JSON.parse(req.response);
                    const joke = obj.value.joke;
                    resolve(joke)
                } else {
                    reject(req.status)
                }
            }
        }
        req.ontimeout = function () {
            reject('Error - timed out: ' + req.time)
        }
        req.open("GET", url, true);  // yes, async
        req.send();
    })
}

    console.log('Script End')