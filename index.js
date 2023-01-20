import heroes from './heroes.js';

//punto 1
/*const getHeroeById = (id) => heroes.find( (heroe) => heroe.id === id );

const getHeroeByIdAsync = (id) => {
    const heroe = getHeroeById(id)
    return new Promise((resolve, reject)=>{
        if (heroe === undefined){
            reject("reject")
        }
        resolve(heroe.name)
    });
}

getHeroeByIdAsync().then(getHeroeById())  
.catch(function(mensaje){console.log(mensaje)});

console.log(getHeroeByIdAsync(8))*/

/*consultas punto 1: 
    +por que si le paso un id valido me imprime el nombre (como si funcionara bien) y debajo "reject" (como si estuviese mal)
    +por que si le paso un id invalido me imprime tira un error*/

//punto 2
/*fetch('https://api.github.com/users/manishmshiva')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error))*/

/* consultas punto 2:
    +en este caso transforme la respuesta en formato json, pero como se si viene en ese formato o en oro?*/

//punto 3
async function getName(){
    let manishmshiva = await fetch ('https://api.github.com/users/manishmshiva')
    console.log(manishmshiva)
}

getName()

/* consultas punto 3:
    +no se como hacer para que me imprima el atributo name como pide el ejercicio, creo que no esta bien hecho este punto*/