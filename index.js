import heroes from './heroes.js';


function getHeroeByIdAsync (id){
    return new Promise((buscar, error)=>{
        if ((id <= heroes.length) && (id >= 0)){
            buscar(id)
        }
        else{
            //error("error")
        }
    });
}

getHeroeByIdAsync().then(function(id){
    (id) => heroes.find((heroe) => heroe.id == id)})
    
.catch(function(mensaje){
    console.log(mensaje)});

console.log(getHeroeByIdAsync(2))


