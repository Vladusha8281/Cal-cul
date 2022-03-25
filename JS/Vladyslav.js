let plusJs = document.getElementById('plus')
let minusJs = document.getElementById('minus')
let delJs = document.getElementById('del')
let umnogJs = document.getElementById('umnog')
let inputOneJs = document.getElementById('inputOne')
let inputTwoJs = document.getElementById('inputTwo')

function getNumb1() {
    return Number(inputOneJs.value)
}

function getNumb2() {
    return Number(inputTwoJs.value)
}

function oper(code) {
    if (code === '+') {
        var resultP = getNumb1() + getNumb2()
    } else if (code === '-') {
        var resultP = getNumb1() - getNumb2()
    } else if (code === '*') {
        var resultP = getNumb1() * getNumb2()
    } else {
        var resultP = getNumb1() / getNumb2()
    }
    window.alert(resultP)
}
function onPlus() {
    oper('+')
}
function onMinus() {
    oper('-')
}
function onDel() {
    oper('/')
}
function onUmnog() {
    oper('*')
}

plusJs.addEventListener('click', onPlus)
minusJs.addEventListener('click', onMinus)
delJs.addEventListener('click', onDel)
umnogJs.addEventListener('click', onUmnog)

