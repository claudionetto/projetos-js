
 const pokemonNumberDOM = document.querySelector('.pokemon__number');
 const pokemonNameDOM = document.querySelector('.pokemon__name');
 const pokemonDataDOM = document.querySelector('.pokemon__data');
 const pokemonImageDOM = document.querySelector('.pokemon__image');
 const formDOM = document.querySelector('.form');
 const inputDOM = document.querySelector('.input__search');
 const buttonPrevDOM = document.querySelector('.btn-prev');
 const buttonNextDOM = document.querySelector('.btn-next');
 
 let pokemonId = 1;

const fetchPokedex = async (pokemon) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

    if(response.status === 200){
        const data = await response.json();
        return data;
    }
}

const renderPokemon = async (pokemon) => {

    pokemonImageDOM.style.display = "none";
    pokemonNumberDOM.innerHTML = '0';
    pokemonNameDOM.innerHTML = 'Loading...'
    inputDOM.value = '';

    const data = await fetchPokedex(pokemon);
    
    if(data){
        pokemonImageDOM.style.display = 'block'
        pokemonNumberDOM.innerHTML = data.id;
        pokemonNameDOM.innerHTML = data.name;
        pokemonImageDOM.src = data.sprites.other['official-artwork'].front_shiny;

        pokemonId = data.id;
        setFontSize(pokemonNameDOM.textContent.length);

        return;
    }

    pokemonImageDOM.style.display = "none";
    pokemonNumberDOM.innerHTML = '0';
    pokemonNameDOM.innerHTML = 'Not Found :('
}

const setFontSize = (nameLength) => {
    if(nameLength > 14){
        pokemonDataDOM.style.fontSize = 'clamp(6px, 4vw, 18px)';
        pokemonDataDOM.style.top = '55.5%'
    } else {
        pokemonDataDOM.style.fontSize = 'clamp(8px, 5vw, 25px)';
        pokemonDataDOM.style.top = '55%'
    }
}

formDOM.addEventListener('submit', (event) => {
    event.preventDefault();
    renderPokemon(inputDOM.value.toLowerCase());
});

buttonNextDOM.addEventListener('click', () => {
    pokemonId++;
    renderPokemon(pokemonId);
})

buttonPrevDOM.addEventListener('click', () => {
    if(pokemonId > 1){
        pokemonId--;
        renderPokemon(pokemonId);
    }
})

renderPokemon(pokemonId);