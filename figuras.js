//Código del cuadrado
function perimetroCuadrado(lado){
    return lado * 4;
}
function areaCuadrado(lado){
    return lado * lado;
}

//Código del triángulo
function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}
function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

//Código del circulo
function diametroCirculo(radio){
    return radio * 2;
}
const PI = Math.PI;
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
function areaCirculo(radio){
    return  (radio * radio) * PI;
}

//Aqui interactuamos con el HTML
//Código del cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const perimetro = perimetroCuadrado(value);
    const resultP = document.getElementById("resultCuadrado");
    resultP.innerText = "El Perímetro del cuadrado es:   " + perimetro +"cm";
}
function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const area = areaCuadrado(value);
    const resultP = document.getElementById("resultCuadrado");
    resultP.innerText = "El Área del cuadrado es:   " + area +"cm^2";
}
//Código del triángulo
function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputTrianguloLado1");
    const input2 = document.getElementById("InputTrianguloLado2");
    const input3 = document.getElementById("InputTrianguloBase");
    const value1 = parseInt(input1.value);
    const value2 = parseInt(input2.value);
    const value3 = parseInt(input3.value);
    
    const perimetro = perimetroTriangulo(value1, value2, value3);
    const resultP = document.getElementById("resultTriangulo");
    resultP.innerText = "El Perímetro del Triángulo es:   " + perimetro +"cm";
}
function calcularAreaTriangulo(){
    const input1 = document.getElementById("InputTrianguloBase");
    const input2 = document.getElementById("InputTrianguloAltura");
    const value1 = parseInt(input1.value);
    const value2 = parseFloat(input2.value);
    
    const area = areaTriangulo(value1, value2);
    const resultP = document.getElementById("resultTriangulo");
    resultP.innerText = "El Perímetro del Triángulo es:  " + area +"cm^2";
}
//Código del circulo
function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    
    const perimetro = perimetroCirculo(value);
    const resultP = document.getElementById("resultCirculo");
    resultP.innerText = "El Perímetro del Círculo es:   " + perimetro +"cm";
}
function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    
    const area = areaCirculo(value);
    const resultP = document.getElementById("resultCirculo");
    resultP.innerText = "El Área del Círculo es:   " + area +"cm^2";
}
