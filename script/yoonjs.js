console.log(' Script Start ')

console.log('Declare testable functions')
function subtract(x, y) {
    return y - x
}
function negative(n, m) {
    let s = m - n;
    if (s > 0) {
        return true;
    }
    else {
        return false;
    }
}
window.onload = function () {
    QUnit.test("UnitTest", function (assert) {
        let subtraction = subtract(1, 2);
        assert.equal(subtraction, "1", "2 - 1 is 1, so passed!")
        assert.notEqual(subtraction, "2", "it's 1 so passed!")
        assert.notEqual(subtraction, "0", "it's 1 so passed!")
        assert.ok(negative(1, 2), "positive, so passed!")
        assert.ok(negative(1989, 2019), "positive, so passed!")
    
    })

}

console.log('Define constants')

console.log('Declare event listeners')
// simple age calculation
document.getElementById('clicker').addEventListener('click', function () {
    const n = document.getElementById('name').value
    const i = parseInt(document.getElementById('birthyear').value)
    const j = 2019
    if (i > 2019) {
        alert("You are not even born yet!")
    }
    const ans = n + ', you are ' + subtract(i, j) + ' years old.'
    document.getElementById('result').innerHTML = ans //DOM modification

    console.log('add to local storage') //local storage addition
    localStorage.setItem("age", ans)
})

console.log('retrieve previous result')
document.getElementById('retrieve').addEventListener('click', function () {
    document.getElementById('retrieving').innerHTML = localStorage.getItem("age") //retrieving local storage
})

console.log('clear local storage')
document.getElementById('clearall').addEventListener('click', function () {
    localStorage.clear() //clear local storage
    document.getElementById('retrieving').innerHTML = ""
})

console.log('get random quotes: AJAX fetch')

const url = "https://thesimpsonsquoteapi.glitch.me/quotes"
fetch(url) //fetch is the simplifed version of xmlhttprequest
    .then((res) => { return res.json() }) //receiving returning response as JSON application
    .then((data) => {            // selecting which data retrieved from returned response to be displayed on html
        data.forEach((item) => {
            const { quote, character } = item
            const result = `Quote : "${quote}"  By : ${character}`
            document.getElementById('simpsons').innerHTML = result;
        });
    })
    .catch(function (error) {
        console.log(JSON.stringify(error)); //logs in console whenever HTTP response error occurs (failed HTTP response handling)
    })

console.log('Script End')