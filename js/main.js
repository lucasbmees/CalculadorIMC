const form = document.querySelector("#form");

form.addEventListener('submit', function(e){
    e.preventDefault();

    const inputPeso = document.querySelector("#inputPeso");
    const inputAltura = document.querySelector("#inputAltura");

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value)

    const imc = calculaIMC(peso, altura);
    alert(imc);
})

function calculaIMC(peso, altura){
    return peso / (altura ** 2);
}

function nivelImc(imc){
    const niveis = []
}