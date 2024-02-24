const toggle = document.querySelector('.toogle-button').addEventListener('click', multiply)
let four = document.querySelector('.four-multiply')
let twelve = document.querySelector('.twelve-multiply')
let seven = document.querySelector('.seven-multiply')
let yearly = document.querySelector('.toggle-yearly')

function multiply() {
    if (toggle.checked) {
        four.innerHTML = "$48"
        twelve.innerHTML = "$144"
        seven.innerHTML = "$84"
    }else{
        four.style.color = "red"
    }
}