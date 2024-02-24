const hamburguer = document.querySelector('.hamburguer')

hamburguer.addEventListener('click', () => {
    let navigation = document.querySelector('.header-nav')
    if (navigation.classList.contains('activeMenu')) {
        navigation.classList.remove('activeMenu')
        hamburguer.classList.remove('active')
    } else {
        navigation.classList.add('activeMenu')
        hamburguer.classList.add('active')
    }
})

const toggleButton = document.querySelector('#check')
let planValues = document.querySelectorAll('.plan-box-value')
let billedWeight = document.querySelectorAll('.bill-period')

toggleButton.addEventListener('click', () => {
    if (toggleButton.classList.contains('checkYear')) {
        multiplyNumbers()
        toggleButton.classList.remove('checkYear')
        billedWeight[0].style.fontWeight = 'normal'
        billedWeight[1].style.fontWeight = '600'
    } else {
        toggleButton.classList.add('checkYear')
        billedWeight[1].style.fontWeight = 'normal'
        billedWeight[0].style.fontWeight = '600'
        planValues[0].innerHTML = '4'
        planValues[1].innerHTML = '12'
        planValues[2].innerHTML = '7'
    }
})

function multiplyNumbers() {
    planValues.forEach(plan => {
        let planText = plan.textContent
        let planNum = parseInt(planText)
        let multiplyNum = planNum * 12
        let stringNumber = multiplyNum.toString()
        if (stringNumber <= 144) {
            plan.innerHTML = `${stringNumber}`
        }
    })
}


let email = document.querySelector('#email')

let submitEmail = document.querySelector('.submit').addEventListener('click', () => {
    event.preventDefault()

    let emailUser = email.value

    let userEmail = []

    if (localStorage.hasOwnProperty('userEmail')) {
        emailValue = JSON.parse(localStorage.getItem('userEmail'))
    }

    userEmail.push({
        user: emailUser
    })

    localStorage.setItem('userEmail', JSON.stringify(userEmail))
})