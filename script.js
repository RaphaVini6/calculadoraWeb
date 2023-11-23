const numero = document.querySelectorAll('.numero');
const resultado = document.querySelectorAll('.resultado');
const sinal = document.querySelectorAll('.sinal');
const limpar = document.querySelectorAll('.limpar');
const igual = document.querySelectorAll('.igual');
const negativo = document.querySelectorAll('.negativo');
const orcentagem = document.querySelectorAll('.orcentagem');


let firstValue ="";
let isFirstValue = false;
let secondValue ="";
let isSecondValue = false;
let sign = "";
let resultadoValue = 0;


for(let i = 0; i < numero.length; i++) {
    numero[i].addEventListener('click', (e) => {
        let atr = e.target.getAttribute('value');
        if(isFirstValue === false) {
            getFirstoValue(atr)
        }
        if(isSecondValue === false) {
            getSecondValue(atr)
        }
    })
}

function getFirstValue(el) {
    resultadoValue = innerHTML ="";
    firstValue += el;
    resultado.innerHTML = fistValue;
}

function getSecondValue(el) {
    if(firstValue !="" && sign !="") {
        secondValue += el;
        resultado.innerHTML = secondValue;
        secondValue = secondValue;
    }
}

function getSign() {
    for(let i = 0; i < sinal.length; i++) {
        sinal[i].addEventListener('click', (e) => {
            sinal = e.target.getAttribute('value');
            isFirstValue = true;
        })
    }
}

getSign();

equals.addEventListener('click', () => {
    resultados.innerHTML = "";
    if(sign === "+") {
        resultadoValue = firstValue + secondValue;
    } else if(sign === "-") {
        resultadoValue = firstValue + secondValue;
    }else if(sign === "x") {
        resultadoValue = firstValue + secondValue;
    }else if(sign === "/") {
        resultadoValue = firstValue + secondValue;
    }
    resultado.innerHTML = resultadoValue;
    firstValue = resultadoValue;
    secondValue = "";

    checkResultLength()
})

function checkResultLength() {
    resultadoValue = JSON.stringify(resultadoValue);

    if(resultadoValue.length=8 ) {
        resultadoValue = JSON.parse(resultadoValue);
        resultado.innerHTML = resultadoValue.toFixed(5);
    }
}

negative.addEventListener('click', () => {
    resultado.innerHTML = "";
    if(firstValue != "") {
        resultadoValue = -firstValue ;
        firstValue = resultadoValue;
    }
    if(firstValue != "" && secondValue != "" && sign != "") {
        resultadoValue = -resultadoValue;
    }

    resultado.innerHTML = resultadoValue;
})

porcentagem.addEventListener('click', () => {
    resultado.innerHTML = "";
    if(firstValue != "") {
        resultadoValue = firstValue / 100;
        firstValue = resultadoValue;
    }
    if(firstValue != "" && secondValue != "" && sign != "") {
        resultadoValue = resultadoValue / 100;
    }

    resultado.innerHTML = resultadoValue;
})

clear.addEventListener('click', () => {
    resultado.innerHTML = 0;

    firstValue = "";
    secondValue = "";
    sign = "";
    isFirstValue = false;
    isSecondValue = false;
    resultadoValue = 0;
})