function principal(tag,mensagem){
    campo = document.querySelector(tag);
    campo.innerHTML = mensagem;
}

function mensagemDeErro(){
    alert('Por favor, insira um número válido!');
}

principal('h1','Convesor de Temperatura');

function celsiusToLight(){
    let celsius = parseFloat(prompt('Quantos graus Celsius?'));
    if (isNaN(celsius)){
        mensagemDeErro()
    } else {
       let farinhaLight = celsius*1.8+32;
       alert(farinhaLight); 
    }
}

function lightToCelsius(){
    let farinhaLight = parseFloat(prompt('Quantos graus Fahrenheit?'));
    if (isNaN(farinhaLight)) {
        mensagemDeErro()
    } else {
        let celsius = 5/9*(farinhaLight-32);
        alert(celsius);
    }
}

function celsiusToKelvin(){
    let celsius = parseFloat(prompt('Quantos graus Celsius?'))
    if (isNaN(celsius)) {
        mensagemDeErro()
    } else {
        let kelvin = celsius + 273;
        alert(kelvin);
    }
}

function kelvinToCelsius(){
    let kelvin = parseFloat(prompt('Quantos graus Kelvin?'));
    if (isNaN(kelvin)){
        mensagemDeErro()
    } else {
        let celsius = kelvin - 273;
        alert(celsius);
    }
}

function lightToKelvin(){
    let farinhaLight = parseFloat(prompt('Quantos graus Fahrenheit?'));
    if (isNaN(farinhaLight)){
        mensagemDeErro()
    } else {
        let kelvin = (farinhaLight-32) * 5/9 + 273;
        alert(kelvin);
    }
}

function kelvinToLight(){
    let kelvin = parseFloat(prompt('Quantos graus Kelvin?'));
    if (isNaN(kelvin)){
        mensagemDeErro();
    } else {
        let farinhaLight = (kelvin - 273) * 1.8 + 32;
        alert(farinhaLight);
    }
}