/*Usando la función anterior beneficiate de poder conocer el indice del array 
para crear una función llamada removeItem que pasandole un array y un texto 
como parametros (los mismos parametros que en el anterior ejercicio) llame a 
la función anteriormente creada findArrayIndex y obten el indice para 
posteriormente usar la función de javascript .splice() para eliminar el 
elemento del array.

Finalmente retorna el array.

De nuevo haz varios ejemplos para practicar y comprueba que funcionan 
correctamente.*/
const fruits = ["Manzana", "Plátano", "Fresa", "Uva", "Piña"];

const mainCharacters = [
    "Luke",
    "Leia",
    "Han Solo",
    "Chewbacca",
    "Rey",
    "Anakin",
    "Obi-Wan",
];

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


const removeItem = (array, text) => {
    const index = findArrayIndex(array, text);
    if (index >= 0) {
        array.splice(index, 1);
        console.log(`Elemento '${text}' eliminado. Nuevo array: ${array}`);
        return array
    } else {
        console.log("No se eliminó ningún elemento.");
        return array
    }
}

removeItem(fruits, "Uva");
removeItem(mainCharacters, "Rey");