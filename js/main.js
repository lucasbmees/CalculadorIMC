const form = document.querySelector("#form");

form.addEventListener('submit', function(e){
    e.preventDefault();

    const inputPeso = document.querySelector("#inputPeso");
    const inputAltura = document.querySelector("#inputAltura");

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value)

    const imc = calculaIMC(peso, altura);
    const nivel = nivelImc(imc);

    if(!peso){
        alert("Peso Inválido!");
    }
    else if(!altura){
        alert("Altura inválida")
    }else{
        alert(`IMC: ${imc.toFixed(2)}, Nível ${nivel}`);
    }

    
})

function calculaIMC(peso, altura){
    return peso / (altura ** 2);
}

function nivelImc(imc){
    const niveis = ['abaixo do peso',  'normal', 'sobrepeso', 
    'obesidade','obesidade grave']

    if(imc > 40){
        return niveis[4]
    }
    if(imc > 29.9){
        return niveis[3]
    }
    if(imc > 24.9){
        return niveis[2]
    }
    if(imc > 18.5){
        return niveis[1]
    }
    if(imc < 18.5){
        return niveis[0]
    }
}