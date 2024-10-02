let ism = prompt("Ismingzini kiriting!")
let familiya = prompt("Familiyangizni kiriting!")
let yosh = +prompt("Yoshingizni kiriting:")

let question = +prompt('1 yoki 2')

if(question === 1) {
    ism.toUpperCase()
    familiya.toUpperCase()
} else if(question === 2) {
    ism.toLowerCase()
    familiya.toLowerCase()
} else {
    alert('1 yoki 2 kiriting!')
    question = +prompt('1 yoki 2')
}


document.querySelector('.firstText').textContent += ism
document.querySelector('.secondText').textContent += familiya
document.querySelector('.thirdText').textContent += yosh


