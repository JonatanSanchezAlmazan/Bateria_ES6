/*Crea una función llamada swap que reciba un array y dos parametros que sean 
indices del array. La función deberá intercambiar la posición de los valores de 
los indices que hayamos enviado como parametro. Retorna el array resultante.

Sugerencia de array:*/

const fantasticFour = [
    "La antorcha humana",
    "Mr. Fantástico",
    "La mujer invisible",
    "La cosa",
];

const swap = (array, index1, index2) => {

    if (index1 < 0 || index1 >= array.length || index2 < 0 || index2 >= array.length) {
        console.log("Índices fuera de rango.");
        return array;
    }
    const posIndex = array[index1];
    array[index1] = array[index2];
    array[index2] = posIndex;

    return array
}

console.log(swap(fantasticFour, 0, 1));