const url = "https://pokeapi.co/api/v2";

async function obtenerPokemonByNombre(name){
    try {
        let respuesta = await fetch( `${url}/pokemon/${name}`);
        let personaje = await respuesta.json();
        console.log('pokemon: ',personaje);
        let respuesta2 = await fetch(`${url}/ability/stench`);
        let abilities = await respuesta2.json();
        console.log('habilidades: ',abilities);
        

    } catch(e) {
        console.error("Error", e)
    }
}

obtenerPokemonByNombre("pikachu");