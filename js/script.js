// alert ("Hello, JS")
// prompt
// confirm

let Button1 = document.getElementById ("Button1")
let body = document.getElementById ("body")
let clock = document.getElementById ("clock")

// events

let i = 0

Button1.onclick = function () {
    if (i % 2 == 0)
        body.style.backgroundColor = "green"
    else    
        body.style.backgroundColor = "black"
        i++
}

Button1.onmouseover = function () {
    Button1.style.backgroundColor = "violet"
    Button1.style.color = "red"
    Button1.style.border = "5px dashed white"
}

Button1.onmouseout = function () {
    Button1.style.backgroundColor = "blue"
}

// clock

function time () {
    clock.innerText = new Date () .toLocaleTimeString ()
}

setInterval (time, 1000)
