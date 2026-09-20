const pokemons = [
  {
    id: 1,
    nome: "bulbassauro",
    altura: 7,
    peso: 69,
    tipo: [
      { slot: 1, type: { name: "grama" } },
      { slot: 2, type: { name: "veneno" } }
    ],
    abilidades: [
      { ability: { name: "overgrow" }, is_hidden: false },
      { ability: { name: "chlorophyll" }, is_hidden: true }
    ],
    status: [
      { base_stat: 45, stat: { name: "vida" } },
      { base_stat: 49, stat: { name: "ataque" } },
      { base_stat: 49, stat: { name: "defesa" } },
      { base_stat: 65, stat: { name: "ataque especial" } },
      { base_stat: 65, stat: { name: "defesa especial" } },
      { base_stat: 45, stat: { name: "velocidade" } }
    ],
    sprites: {
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
    }
  },
  {
    id: 2,
    nome: "ivysaur",
    altura: 10,
    peso: 130,
    tipo: [
      { slot: 1, type: { name: "grama" } },
      { slot: 2, type: { name: "veneno" } }
    ],
    abilidades: [
      { ability: { name: "overgrow" }, is_hidden: false },
      { ability: { name: "chlorophyll" }, is_hidden: true }
    ],
    status: [
      { base_stat: 60, stat: { name: "vida" } },
      { base_stat: 62, stat: { name: "ataque" } },
      { base_stat: 63, stat: { name: "defesa" } },
      { base_stat: 80, stat: { name: "ataque especial" } },
      { base_stat: 80, stat: { name: "defesa especial" } },
      { base_stat: 60, stat: { name: "velocidade" } }
    ],
    sprites: {
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
    }
  },
  {
    id: 3,
    nome: "venusaur",
    altura: 20,
    peso: 1000,
    tipo: [
      { slot: 1, type: { name: "grama" } },
      { slot: 2, type: { name: "veneno" } }
    ],
    abilidades: [
      { ability: { name: "overgrow" }, is_hidden: false },
      { ability: { name: "chlorophyll" }, is_hidden: true }
    ],
    status: [
      { base_stat: 80, stat: { name: "vida" } },
      { base_stat: 82, stat: { name: "ataque" } },
      { base_stat: 83, stat: { name: "defesa" } },
      { base_stat: 100, stat: { name: "ataque especial" } },
      { base_stat: 100, stat: { name: "defesa especial" } },
      { base_stat: 80, stat: { name: "velocidade" } }
    ],
    sprites: {
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
    }
  },
  {
    id: 4,
    nome: "charmander",
    altura: 6,
    peso: 85,
    tipo: [
      { slot: 1, type: { name: "fogo" } }
    ],
    abilidades: [
      { ability: { name: "blaze" }, is_hidden: false },
      { ability: { name: "solar-power" }, is_hidden: true }
    ],
    status: [
      { base_stat: 39, stat: { name: "vida" } },
      { base_stat: 52, stat: { name: "ataque" } },
      { base_stat: 43, stat: { name: "defesa" } },
      { base_stat: 60, stat: { name: "ataque especial" } },
      { base_stat: 50, stat: { name: "defesa especial" } },
      { base_stat: 65, stat: { name: "velocidade" } }
    ],
    sprites: {
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
    }
  },
  {
    id: 5,
    nome: "charmeleon",
    altura: 11,
    peso: 190,
    tipo: [
      { slot: 1, type: { name: "fogo" } }
    ],
    abilidades: [
      { ability: { name: "blaze" }, is_hidden: false },
      { ability: { name: "solar-power" }, is_hidden: true }
    ],
    status: [
      { base_stat: 58, stat: { name: "vida" } },
      { base_stat: 64, stat: { name: "ataque" } },
      { base_stat: 58, stat: { name: "defesa" } },
      { base_stat: 80, stat: { name: "ataque especial" } },
      { base_stat: 65, stat: { name: "defesa especial" } },
      { base_stat: 80, stat: { name: "velocidade" } }
    ],
    sprites: {
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"
    }
  },
  {
    id: 6,
    nome: "charizard",
    altura: 17,
    peso: 905,
    tipo: [
      { slot: 1, type: { name: "fogo" } },
      { slot: 2, type: { name: "voador" } }
    ],
    abilidades: [
      { ability: { name: "blaze" }, is_hidden: false },
      { ability: { name: "solar-power" }, is_hidden: true }
    ],
    status: [
      { base_stat: 78, stat: { name: "vida" } },
      { base_stat: 84, stat: { name: "ataque" } },
      { base_stat: 78, stat: { name: "defesa" } },
      { base_stat: 109, stat: { name: "ataque especial" } },
      { base_stat: 85, stat: { name: "defesa especial" } },
      { base_stat: 100, stat: { name: "velocidade" } }
    ],
    sprites: {
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
    }
  },
  {
    id: 7,
    nome: "squirtle",
    altura: 5,
    peso: 90,
    tipo: [
      { slot: 1, type: { name: "água" } }
    ],
    abilidades: [
      { ability: { name: "torrent" }, is_hidden: false },
      { ability: { name: "rain-dish" }, is_hidden: true }
    ],
    status: [
      { base_stat: 44, stat: { name: "vida" } },
      { base_stat: 48, stat: { name: "ataque" } },
      { base_stat: 65, stat: { name: "defesa" } },
      { base_stat: 50, stat: { name: "ataque especial" } },
      { base_stat: 64, stat: { name: "defesa especial" } },
      { base_stat: 43, stat: { name: "velocidade" } }
    ],
    sprites: {
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
    }
  },
  {
    id: 8,
    nome: "wartortle",
    altura: 10,
    peso: 225,
    tipo: [
      { slot: 1, type: { name: "água" } }
    ],
    abilidades: [
      { ability: { name: "torrent" }, is_hidden: false },
      { ability: { name: "rain-dish" }, is_hidden: true }
    ],
    status: [
      { base_stat: 59, stat: { name: "vida" } },
      { base_stat: 63, stat: { name: "ataque" } },
      { base_stat: 80, stat: { name: "defesa" } },
      { base_stat: 65, stat: { name: "ataque especial" } },
      { base_stat: 80, stat: { name: "defesa especial" } },
      { base_stat: 58, stat: { name: "velocidade" } }
    ],
    sprites: {
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"
    }
  },
  {
    id: 9,
    nome: "blastoise",
    altura: 16,
    peso: 855,
    tipo: [
      { slot: 1, type: { name: "água" } }
    ],
    abilidades: [
      { ability: { name: "torrent" }, is_hidden: false },
      { ability: { name: "rain-dish" }, is_hidden: true }
    ],
    status: [
      { base_stat: 79, stat: { name: "vida" } },
      { base_stat: 83, stat: { name: "ataque" } },
      { base_stat: 100, stat: { name: "defesa" } },
      { base_stat: 85, stat: { name: "ataque especial" } },
      { base_stat: 105, stat: { name: "defesa especial" } },
      { base_stat: 78, stat: { name: "velocidade" } }
    ],
    sprites: {
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"
    }
  }
];

const meioGrid = document.querySelector(".meioGrid");
const listaPokemons = document.querySelector(".listaPokemons");
const selecao = document.querySelector(".selecao");
const poderes = document.querySelector(".habilidades");
const estatiscas = document.querySelector(".estatiscas");
const linhaSuperior = document.querySelector(".linhaSuperior");
const linhaInferior = document.querySelector(".linhaInferior");
const pesquisar = document.querySelector("#pesquisar");
const meioSelecao = document.querySelector(".meioSelecao");
const proximo = document.querySelector(".proximo");
const anterior = document.querySelector(".anterior");
const botoesFiltro = document.querySelectorAll(".botaoFiltro");
const botaoFavoritar = document.querySelector("#botaoFavoritar");
const listaFavoritos = document.querySelector(".listaFavoritos");

let favoritos = carregarFavoritos();
let indiceAtual = 0;
let tipoSelecionado = "todos";

function carregarFavoritos() {
  const salvos = localStorage.getItem("pokemonFavoritos");
  return salvos ? JSON.parse(salvos) : [];
}

function salvarFavoritos() {
  localStorage.setItem("pokemonFavoritos", JSON.stringify(favoritos));
}

function renderizarFavoritos() {
  listaFavoritos.innerHTML = "";

  favoritos.forEach(id => {
    const pokemon = pokemons.find(p => p.id === id);
    if (!pokemon) return;

    const card = document.createElement("div");
    card.className = "cardFavorito";
    const img = document.createElement("img");
    img.src = pokemon.sprites.front_default;
    card.appendChild(img);

    card.addEventListener("click", () => {
      indiceAtual = pokemons.indexOf(pokemon);
      mostrarDetalhes(pokemon);
    });

    listaFavoritos.appendChild(card);
  });
}

function atualizarBotaoFavoritar(pokemon) {
  const favoritado = favoritos.includes(pokemon.id);
  botaoFavoritar.textContent = favoritado ? "★ Favoritado" : "☆ Favoritar";
  botaoFavoritar.classList.toggle("ativo", favoritado);
}

botaoFavoritar.addEventListener("click", () => {
  const pokemonAtual = pokemons[indiceAtual];
  const jaFavoritado = favoritos.includes(pokemonAtual.id);

  if (jaFavoritado) {
    favoritos = favoritos.filter(id => id !== pokemonAtual.id);
  } else {
    favoritos.push(pokemonAtual.id);
  }

  salvarFavoritos();
  atualizarBotaoFavoritar(pokemonAtual);
  renderizarFavoritos();
});

function renderizarCards(lista) {
  listaPokemons.innerHTML = "";

  lista.forEach(pokemon => {
    const card = document.createElement("div");
    card.className = "cardPokemon";
    const img = document.createElement("img");

    img.src = pokemon.sprites.front_default;
    card.appendChild(img);

    card.addEventListener("click", () => {
      indiceAtual = pokemons.indexOf(pokemon);
      mostrarDetalhes(pokemon);
    });

    listaPokemons.appendChild(card);
  });
}

function aplicarFiltros() {
  const termo = pesquisar.value.toLowerCase();

  const filtrados = pokemons.filter(pokemon => {
    const combinaNome = pokemon.nome.toLowerCase().includes(termo);
    const combinaTipo = tipoSelecionado === "todos" ||
      pokemon.tipo.some(t => t.type.name === tipoSelecionado);

    return combinaNome && combinaTipo;
  });

  renderizarCards(filtrados);
}

botoesFiltro.forEach(botao => {
  botao.addEventListener("click", () => {
    tipoSelecionado = botao.dataset.tipo;

    botoesFiltro.forEach(b => b.classList.remove("ativo"));
    botao.classList.add("ativo");

    aplicarFiltros();
  });
});

pesquisar.addEventListener("input", aplicarFiltros);

proximo.addEventListener("click", () => {
  indiceAtual = (indiceAtual + 1) % pokemons.length;
  mostrarDetalhes(pokemons[indiceAtual]);
});

anterior.addEventListener("click", () => {
  indiceAtual = (indiceAtual - 1 + pokemons.length) % pokemons.length;
  mostrarDetalhes(pokemons[indiceAtual]);
});

renderizarCards(pokemons);

function mostrarDetalhes(pokemon) {
  poderes.innerHTML = "";
  estatiscas.innerHTML = "";
  linhaSuperior.innerHTML = "";
  linhaInferior.innerHTML = "";
  meioSelecao.innerHTML = "";

  const tipos = document.createElement("p");
  tipos.textContent = "Tipo: " + pokemon.tipo.map(t => t.type.name).join(", ");

  const imgGrande = document.createElement("img");
  imgGrande.src = pokemon.sprites.front_default;
  imgGrande.alt = pokemon.nome;

  const imgEstatisticas = document.createElement("img");
  imgEstatisticas.src = pokemon.sprites.front_default;
  imgEstatisticas.alt = pokemon.nome;

  const nome = document.createElement("p");
  nome.className = "nomeTexto";
  nome.textContent = pokemon.nome;

  const altura = document.createElement("p");
  altura.textContent = `Altura: ${pokemon.altura / 10} m`;

  const peso = document.createElement("p");
  peso.textContent = `Peso: ${pokemon.peso / 10} kg`;

  const textoStatus = document.createElement("div");
  textoStatus.className = "textoStatus";

  const tituloStatus = document.createElement("p");
  tituloStatus.textContent = "Status:";
  tituloStatus.style.fontWeight = "bold";
  textoStatus.appendChild(tituloStatus);

  const status = pokemon.status.map(s => `${s.stat.name}: ${s.base_stat}`);

  status.forEach(linha => {
    const p = document.createElement("p");
    p.textContent = linha;
    textoStatus.appendChild(p);
  });

  const habilidades = document.createElement("p");
  habilidades.textContent = "Habilidades: " + pokemon.abilidades.map(a => a.ability.name).join(", ");

  linhaSuperior.appendChild(tipos);
  meioSelecao.appendChild(imgGrande);
  meioSelecao.appendChild(nome);
  linhaInferior.appendChild(altura);
  linhaInferior.appendChild(peso);
  poderes.appendChild(habilidades);
  estatiscas.appendChild(imgEstatisticas);
  estatiscas.appendChild(textoStatus);
  atualizarBotaoFavoritar(pokemon);

  renderizarFavoritos();
}