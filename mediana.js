function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

function calcularMediana(lista){
    const mitadLista = parseInt(lista.length / 2);
    let mediana;

    if (lista.length % 2 === 0){
        const elemento1 = lista[mitadLista - 1];
        const elemento2 = lista[mitadLista];
        const promElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);
        mediana = promElemento1y2;
    } else {
        mediana = lista[mitadLista];
    }
    return mediana;
}

//Ordenar Lista con un ciclo for
function ordenar(listaD) {
    let listaO = listaD;
    let paso = 0;
    for (let i = 0; i <= listaO.length; i++) {

        for (let j = 0; j < listaO.length; j++) {
            if (listaO[j] > listaO[j + 1]) {
                paso = listaO[j];
                listaO[j] = listaO[j + 1];
                listaO[j + 1] = paso;
            }
        }
    }
    return listaO;
}
  