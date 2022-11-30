/*let ciudad="junin";
let numRand=45;
ciudad=numRand
console.log("ciudad: " + ciudad);
console.log("numero Random: " + numRand)     //esto hay que comentarlo para que solo se imprima lo de abajo


const nombre = "Enzo";
const apellido = "Fulcheri";
nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto)*/

//--------------------------------------

/*const celular ={
    marca: "motorola",
    color: "azul",
    precio: 19000,
    anio_creacion: 2020
}

console.log(celular.precio);
celular.stock=true;
celular.anio_creacion=2017;
delete celular.marca;

for (const [key, value] of Object.entries(celular)) {
    console.log(`${key}: ${value}`);
}*/

/*let array = [1,2,3,4];
let array2 = [...array,5]
console.log(array)
console.log(array2)*/

const person = {
    name: 'Pepe',
    age: 26,
    hobbies: ['chess', 'running', 'basket']
}

let {name: nombre, age: edad, hobbies} = person;
console.log(nombre)
console.log(edad)
console.log(hobbies)

