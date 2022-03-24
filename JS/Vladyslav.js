let plusJs = document.getElementById('plus')
let minusJs = document.getElementById('minus')
let delJs = document.getElementById('del')
let umnogJs = document.getElementById('umnog')

function calcul() {
}

function onPlus() {
    let inputOneJs = document.getElementById('inputOne')
    let inputTwoJs = document.getElementById('inputTwo')
    let numberOneJs = Number(inputOneJs.value)
    let numberTwoJs = Number(inputTwoJs.value)
    let resultP = numberOneJs + numberTwoJs
    window.alert(resultP)
}
function onMinus() {
    let inputOneJs = document.getElementById('inputOne')
    let inputTwoJs = document.getElementById('inputTwo')
    let numberOneJs = Number(inputOneJs.value)
    let numberTwoJs = Number(inputTwoJs.value)
    let resultM = numberOneJs - numberTwoJs
    window.alert(resultM)
}
function onDel() {
    let inputOneJs = document.getElementById('inputOne')
    let inputTwoJs = document.getElementById('inputTwo')
    let numberOneJs = Number(inputOneJs.value)
    let numberTwoJs = Number(inputTwoJs.value)
    let resultD = numberOneJs / numberTwoJs
    window.alert(resultD)
}
function onUmnog() {
    let inputOneJs = document.getElementById('inputOne')
    let inputTwoJs = document.getElementById('inputTwo')
    let numberOneJs = Number(inputOneJs.value)
    let numberTwoJs = Number(inputTwoJs.value)
    let resultU = numberOneJs * numberTwoJs
    window.alert(resultU)
}

plusJs.addEventListener('click', onPlus)
minusJs.addEventListener('click', onMinus)
delJs.addEventListener('click', onDel)
umnogJs.addEventListener('click', onUmnog)

