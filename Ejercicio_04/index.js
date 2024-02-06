/*4.2 Dado el siguiente array, devuelve una lista que contenga los valores 
de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que 
empiece por 'A'.*/
const users = [
    { id: 1, name: 'Abel' },
    { id: 2, name: 'Julia' },
    { id: 3, name: 'Pedro' },
    { id: 4, name: 'Amanda' }
];

const modifiedUsers = users.map((user) => user.name.startsWith("A") ? user.name = "Anacleto" : user.name);
console.log(modifiedUsers);

/*4.3 Dado el siguiente array, devuelve una lista que contenga los valores 
de la propiedad .name y añade al valor de .name el string ' (Visitado)' 
cuando el valor de la propiedad isVisited = true.*/
const cities = [
    { isVisited: true, name: 'Tokyo' },
    { isVisited: false, name: 'Madagascar' },
    { isVisited: true, name: 'Amsterdam' },
    { isVisited: false, name: 'Seul' }
];

const modifiedName = cities.map((city) => {
    const isVisited = city.isVisited;
    const cityName = city.name;
    isVisited ? city.name = `${cityName} Visitado` : city.name
    return city.name;
});

console.log(modifiedName);