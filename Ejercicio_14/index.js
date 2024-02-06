/*Crea una función llamada rollDice() que reciba como parametro el numero de caras 
que queramos que tenga el dado que deberá simular el codigo dentro de la función. 
Como hemos dicho, que la función use el parametro para simular una tirada de dado 
y retornar el resultado. Si no se te ocurre como hacer un numero aleatorio no te 
preocupes! Busca información sobre la función de javascript Math.random()*/

const rollDice = (sides) => {
    if (sides <= 0) {
        console.log("El número de caras debe de ser mayor a 0");
        return
    }
    const result = Math.floor(Math.random() * sides) + 1;
    console.log(`Tirada con un dado de ${sides} caras: ${result}`);
    return result;

}

rollDice(6)