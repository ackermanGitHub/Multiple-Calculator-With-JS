// Funciones Helpers/Utils
function esPAr(numero) {
    return (numero % 2 === 0);
}
function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

// Calculadora de Mediana
function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);
    if (esPAr(lista.length)){
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];
        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
        return mediana;
    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
} 

// Mediana General
const salariosCu = cuba.map(
    function (persona) {
        return persona.salary;
    }
);

const salariosCuSorted = salariosCu.sort(
    function (salarioA, salarioB) {
        return salarioA - salarioB;            
    }
);

const medianaGeneralCu = medianaSalarios(salariosCuSorted);

// Mediana del top 10%
//(120 * (100 - 10)) / 100;
const spliceStart = (salariosCuSorted.length * 90) / 100;
const spliceCount = salariosCuSorted.length - spliceStart;
// Ejemplo
//const arrayEjemplo = [1,2,3,4,5,6,7,8,9,10];
//const EJEMPLO = arrayEjemplo.splice(5, 2);
// Result
// arrayEjemplo = [1,2,3,4,5,8,9,10];
// EJEMPLO = [6,7];

const salariosCuTop10 = salariosCuSorted.splice(
    spliceStart,
    spliceCount,
);

const medianaTop10Cu = medianaSalarios(salariosCuTop10);

console.log({
    medianaGeneralCu,
    medianaTop10Cu,
});