const lista1 = [
    100,
    200,
    300,
    400,
    500,
];

const lista2 = [
    100,
    200,
    300,
    400,
    500,
    600,
];

const lista3 = [
    200,
    100,
    500,
    300,
    900,
    800,
];

const lista4 = [
    200,
    500,
    12,
    15,
    5,
    800,
    578,
    432,
    231,
    10000,
    1256
];

const lista5 = [
    "March",
    "Jan", 
    "Feb",
    "Dec",
];

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

//OrdenarLista con un ciclo for
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
  