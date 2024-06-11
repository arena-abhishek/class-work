let number1 = document.querySelector(`#num1`)
let number2 = document.querySelector(`#num2`)

let add= document.querySelector(`#result`)

function sum(){
    add.innerHTML = +number1.value + +number2.value;
}
function mul(){
    add.innerHTML = +number1.value * +number2.value;
}
function div(){
    add.innerHTML = +number1.value / +number2.value;
}
function min(){
    add.innerHTML = +number1.value - +number2.value;
}