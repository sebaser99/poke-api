const url = "https://pokeapi.co/api/v2";

async function obtenerPokemonByNombre(name){
    try {
        //Obetner información de un pokemón específico
        let respuesta = await fetch( `${url}/pokemon/${name}`);
        let personaje = await respuesta.json();
        console.log('pokemon: ', personaje.name, personaje);
        //Obtener las habilidades del pokemon
      obtenerHabilidadesDePokemon(personaje.abilities, personaje.name);
      
        

    } catch(e) {
        console.error("Error", e)
    }
}

//Obtener pokemonos por tipo
async function obtenerInfoTypePokemon(type){
    try {
        //Obetner información de un pokemón específico
        let respuesta = await fetch( `${url}/type/${type}`);
        let personaje = await respuesta.json();
        console.log('typo: ', type, personaje);

       
    } catch(e) {
        console.error("Error", e)
    }
}

 //Obtener las habilidades del pokemon
 async function obtenerHabilidadesDePokemon(habilitiesArray, namePokemon){
    for(let i= 0; i < habilitiesArray.length; i++) {
        let respuesta = await fetch( habilitiesArray[i].ability.url);
        let ability = await respuesta.json();
        console.log('habilidad # ', i+1, ' de ', namePokemon, ability)
    }
 }


//Obtener los primeros 50 pokemones
async function obtenerPrimeros50Pokemones(){
    try {
        //Obetner información de un pokemón específico
        let respuesta = await fetch( `${url}/pokemon?limit=50&offset=0`);
        let pokemones = await respuesta.json();
        console.log("Primeros 50 pokemones : ",pokemones);

       
    } catch(e) {
        console.error("Error", e)
    }
}

async function obtenerNombreYTipoPokemon(id){
    try {
        //Obetner información de un pokemón específico
        let respuesta = await fetch( `${url}/pokemon/${id}`);
        let personaje = await respuesta.json();
        console.log('pokemon: ',  personaje.name,personaje);
        //Obtener las habilidades del pokemon
        let respuesta2 = await fetch(personaje.types[0].type.url);
        let tipo = await respuesta2.json();
        console.log('Pokemon: ', personaje.name, ' tipo: ', tipo.name,  tipo)
        obtenerNombreYTipoEvolucionPokemon(personaje.species.url, personaje.name);
    } catch(e) {
        console.error("Error", e)
    }
}

async function obtenerNombreYTipoEvolucionPokemon(url, name){
    try {
        //Obetner información de un pokemón específico
        let respuesta = await fetch(url);
        let especies = await respuesta.json();
        console.log(name, ' especies: ',  especies);
        let respuesta2 = await fetch(especies.evolution_chain.url)
        let evolution = await respuesta2.json();
        console.log(especies.name, ' su evolución actual la máxima de nivel ', especies.shape.name);
        console.log(especies.name, ' su evolución anterior fue  ', evolution.chain.evolves_to[0].species.name);
        console.log(evolution.chain.evolves_to[0].species.name, ' su evolución anterior fue  ', evolution.chain.species.name);

        return especies
    } catch(e) {
        console.error("Error", e)
    }
}


obtenerPokemonByNombre("pikachu");
obtenerInfoTypePokemon('rock');
obtenerPrimeros50Pokemones();
obtenerNombreYTipoPokemon(6);