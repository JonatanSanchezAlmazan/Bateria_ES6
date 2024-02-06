/*Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro.

Haz varios ejemplos y compruebalos.

Sugerencia de función:
function findArrayIndex(array, text) {}

Ej array:*/
const mainCharacters = [
    "Luke",
    "Leia",
    "Han Solo",
    "Chewbacca",
    "Rey",
    "Anakin",
    "Obi-Wan",
];

const fruits = ["Manzana", "Plátano", "Fresa", "Uva", "Piña"];

const findArrayIndex = (array, text) => {
    const indexArray = array.indexOf(text);
    if (indexArray >= 0) {
        console.log(`El texto '${text}' está en la posición ${indexArray}`);
        return indexArray;
    } else {
        console.log(`El texto '${text}' no existe en el array`);
        return -1;
    }
}

findArrayIndex(mainCharacters, "Chewbacca");
findArrayIndex(fruits, "Fresa");