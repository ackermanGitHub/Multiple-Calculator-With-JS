function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

function calcularModa(lista){
    const listaCount = {};
    lista.map(
        function(elemento){
            if(listaCount[elemento]){
                listaCount[elemento] += 1;
            } else {
                listaCount[elemento] = 1;
            }
        }
    );
    const listaArray = Object.entries(listaCount).sort(
        function (elementoA, elementoB) {
            return elementoA[1] - elementoB[1];
        }
    );
    const moda = listaArray[listaArray.length - 1][0];
    return moda;
}

function OnClickButton () {
    let lista = [];
    const input1 = document.getElementById("InputLista1");
    const value1 = input1.value;
    if(value1 != ''){lista.push(parseInt(value1))};
    const input2 = document.getElementById("InputLista2");
    const value2 = input2.value;
    if(value2 != ''){lista.push(parseInt(value2))};
    const input3 = document.getElementById("InputLista3");
    const value3 = input3.value;
    if(value3 != ''){lista.push(parseInt(value3))};
    const input4 = document.getElementById("InputLista4");
    const value4 = input4.value;
    if(value4 != ''){lista.push(parseInt(value4))};
    const input5 = document.getElementById("InputLista5");
    const value5 = input5.value;
    if(value5 != ''){lista.push(parseInt(value5))};
    if (lista.length != 0){
        const media = calcularMediaAritmetica(lista);
        const resultP = document.getElementById("ResultP");
        resultP.innerText = "La media aritmética es: " + media; 
    } else {
        const resultP = document.getElementById("ResultP");
        resultP.innerText = "Introduzca los elementos"; 
    }
}

function OnClickButton1 () {
    let lista = [];
    const input1 = document.getElementById("InputLista1");
    const value1 = input1.value;
    if(value1 != ''){lista.push(parseInt(value1))};
    const input2 = document.getElementById("InputLista2");
    const value2 = input2.value;
    if(value2 != ''){lista.push(parseInt(value2))};
    const input3 = document.getElementById("InputLista3");
    const value3 = input3.value;
    if(value3 != ''){lista.push(parseInt(value3))};
    const input4 = document.getElementById("InputLista4");
    const value4 = input4.value;
    if(value4 != ''){lista.push(parseInt(value4))};
    const input5 = document.getElementById("InputLista5");
    const value5 = input5.value;
    if(value5 != ''){lista.push(parseInt(value5))};
    if (lista.length != 0){
        const moda = calcularModa(lista);
        const resultP = document.getElementById("ResultP");
        resultP.innerText = "La Moda es: " + moda; 
    } else {
        const resultP = document.getElementById("ResultP");
        resultP.innerText = "Introduzca los elementos"; 
    }
}
