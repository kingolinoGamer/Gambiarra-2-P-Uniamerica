// Mudança no carregamento dos dados
// Antes o array de Pokémon era hardcoded com apenas 9 entradas

// Agora buscamos os 151 Pokémon da PokeAPI
// Usamos Promise.all com map para buscar os detalhes em paralelo
// e forEach para estruturar e popular o array

const API = "https://pokeapi.co/api/v2";
const TOTAL = 151;
const pokemons = [];

function estruturarPokemon(d) {
  return {
    id: d.id,
    nome: d.name,
    altura: d.height,
    peso: d.weight,
    tipo: d.types,
    habilidades: d.abilities,
    status: d.stats,
    sprites: { front_default: d.sprites.front_default }
  };
}

async function buscarPokemons() {
  const resposta = await fetch(`${API}/pokemon?limit=${TOTAL}`);
  const dados = await resposta.json();

  return Promise.all(
    dados.results.map(item => fetch(item.url).then(r => r.json()))
  );
}

async function carregarPokemons() {
  mostrarMensagem("Carregando Pokémon...");

  try {
    const detalhes = await buscarPokemons();

    detalhes.forEach(d => {
      pokemons.push(estruturarPokemon(d));
    });

    criarFiltros();
    renderizarCards(pokemons);
    mostrarDetalhes(pokemons[0]);
  } catch (erro) {
    console.error(erro);
    mostrarMensagem("Erro ao carregar os Pokémon. Verifique sua internet.");
  }
}

carregarPokemons();