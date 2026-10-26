const API = "https://pokeapi.co/api/v2";
const TOTAL = 151;

const coresTipo = {
  normal: "#a8a878", fire: "#f08030", water: "#6890f0", grass: "#78c850",
  electric: "#e0c020", ice: "#80c8c8", fighting: "#c03028", poison: "#a040a0",
  ground: "#d8b860", flying: "#a890f0", psychic: "#f85888", bug: "#a8b820",
  rock: "#b8a038", ghost: "#705898", dragon: "#7038f8", dark: "#705848",
  steel: "#b8b8d0", fairy: "#ee99ac"
};

const listaPokemons = document.querySelector(".listaPokemons");
const poderes = document.querySelector(".habilidades");
const estatisticas = document.querySelector(".estatisticas");
const linhaSuperior = document.querySelector(".linhaSuperior");
const linhaInferior = document.querySelector(".linhaInferior");
const pesquisar = document.querySelector("#pesquisar");
const meioSelecao = document.querySelector(".meioSelecao");
const proximo = document.querySelector(".proximo");
const anterior = document.querySelector(".anterior");
const filtrosTipo = document.querySelector(".filtrosTipo");
const botaoFavoritar = document.querySelector("#botaoFavoritar");
const listaFavoritos = document.querySelector(".listaFavoritos");

const pokemons = [];
let favoritos = carregarFavoritos();
let indiceAtual = 0;
let tipoSelecionado = "all";

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

function carregarFavoritos() {
  const salvos = localStorage.getItem("pokemonFavoritos");
  return salvos ? JSON.parse(salvos) : [];
}

function salvarFavoritos() {
  localStorage.setItem("pokemonFavoritos", JSON.stringify(favoritos));
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

function mostrarMensagem(texto) {
  listaPokemons.innerHTML = "";

  const item = document.createElement("li");
  item.className = "mensagemLista";
  item.textContent = texto;

  listaPokemons.appendChild(item);
}

function renderizarCards(lista) {
  listaPokemons.innerHTML = "";

  if (lista.length === 0) {
    mostrarMensagem("Nenhum Pokémon encontrado.");
    return;
  }

  lista.forEach(pokemon => {
    const item = document.createElement("li");

    const card = document.createElement("button");
    card.type = "button";
    card.className = "cardPokemon";
    card.title = pokemon.nome;

    const img = document.createElement("img");
    img.src = pokemon.sprites.front_default;
    img.alt = pokemon.nome;
    card.appendChild(img);

    card.addEventListener("click", () => {
      indiceAtual = pokemons.indexOf(pokemon);
      mostrarDetalhes(pokemon);
    });

    item.appendChild(card);
    listaPokemons.appendChild(item);
  });
}

function aplicarFiltros() {
  const termo = pesquisar.value.toLowerCase().trim();

  const filtrados = pokemons.filter(pokemon => {
    const combinaNome =
      pokemon.nome.toLowerCase().includes(termo) || String(pokemon.id) === termo;
    const combinaTipo =
      tipoSelecionado === "all" ||
      pokemon.tipo.some(t => t.type.name === tipoSelecionado);

    return combinaNome && combinaTipo;
  });

  renderizarCards(filtrados);
}

function criarFiltros() {
  filtrosTipo.innerHTML = "";

  const tipos = ["all"];
  pokemons.forEach(p => {
    p.tipo.forEach(t => {
      if (!tipos.includes(t.type.name)) tipos.push(t.type.name);
    });
  });

  tipos.forEach(tipo => {
    const botao = document.createElement("button");
    botao.type = "button";
    botao.className = "botaoFiltro";
    botao.dataset.tipo = tipo;
    botao.textContent = tipo;
    botao.style.backgroundColor = coresTipo[tipo] || "#a8a878";
    botao.setAttribute("aria-pressed", String(tipo === "all"));
    if (tipo === "all") botao.classList.add("ativo");

    botao.addEventListener("click", () => {
      tipoSelecionado = tipo;

      filtrosTipo.querySelectorAll(".botaoFiltro").forEach(b => {
        b.classList.remove("ativo");
        b.setAttribute("aria-pressed", "false");
      });

      botao.classList.add("ativo");
      botao.setAttribute("aria-pressed", "true");
      aplicarFiltros();
    });

    filtrosTipo.appendChild(botao);
  });
}

function mostrarDetalhes(pokemon) {
  poderes.innerHTML = "";
  estatisticas.innerHTML = "";
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
  nome.textContent = `Nº${String(pokemon.id).padStart(3, "0")} ${pokemon.nome}`;

  const altura = document.createElement("p");
  altura.textContent = `Altura: ${pokemon.altura / 10} m`;

  const peso = document.createElement("p");
  peso.textContent = `Peso: ${pokemon.peso / 10} kg`;

  const abreviacao = {
    "hp": "VIDA",
    "attack": "ATQ",
    "defense": "DEF",
    "special-attack": "ATQ.E",
    "special-defense": "DEF.E",
    "speed": "VEL"
  };
  const STAT_MAXIMO = 160;

  const barrasStatus = document.createElement("div");
  barrasStatus.className = "barrasStatus";

  pokemon.status.forEach((s, i) => {
    const linha = document.createElement("div");
    linha.className = "linhaStatus";

    const rotulo = document.createElement("span");
    rotulo.className = "rotuloStatus";
    rotulo.textContent = abreviacao[s.stat.name] || s.stat.name;

    const trilho = document.createElement("div");
    trilho.className = "trilhoStatus";

    const barra = document.createElement("div");
    barra.className = "barraStatus " + (i < 3 ? "barraVermelha" : "barraLaranja");
    barra.style.width = Math.min(100, (s.base_stat / STAT_MAXIMO) * 100) + "%";
    trilho.appendChild(barra);

    const valor = document.createElement("span");
    valor.className = "valorStatus";
    valor.textContent = s.base_stat;

    linha.appendChild(rotulo);
    linha.appendChild(trilho);
    linha.appendChild(valor);
    barrasStatus.appendChild(linha);
  });

  const habilidades = document.createElement("p");
  habilidades.textContent =
    "Habilidades: " + pokemon.habilidades.map(a => a.ability.name).join(", ");

  linhaSuperior.appendChild(tipos);
  meioSelecao.appendChild(imgGrande);
  meioSelecao.appendChild(nome);
  linhaInferior.appendChild(altura);
  linhaInferior.appendChild(peso);
  poderes.appendChild(habilidades);
  estatisticas.appendChild(imgEstatisticas);
  estatisticas.appendChild(barrasStatus);

  atualizarBotaoFavoritar(pokemon);
  renderizarFavoritos();
}

function renderizarFavoritos() {
  listaFavoritos.innerHTML = "";

  favoritos.forEach(id => {
    const pokemon = pokemons.find(p => p.id === id);
    if (!pokemon) return;

    const item = document.createElement("li");

    const card = document.createElement("button");
    card.type = "button";
    card.className = "cardFavorito";
    card.title = pokemon.nome;

    const img = document.createElement("img");
    img.src = pokemon.sprites.front_default;
    img.alt = pokemon.nome;
    card.appendChild(img);

    card.addEventListener("click", () => {
      indiceAtual = pokemons.indexOf(pokemon);
      mostrarDetalhes(pokemon);
    });

    item.appendChild(card);
    listaFavoritos.appendChild(item);
  });
}

function atualizarBotaoFavoritar(pokemon) {
  const favoritado = favoritos.includes(pokemon.id);
  botaoFavoritar.textContent = favoritado ? "★ Favoritado" : "☆ Favoritar";
  botaoFavoritar.classList.toggle("ativo", favoritado);
  botaoFavoritar.setAttribute("aria-pressed", String(favoritado));
}

pesquisar.addEventListener("input", aplicarFiltros);

proximo.addEventListener("click", () => {
  if (pokemons.length === 0) return;
  indiceAtual = (indiceAtual + 1) % pokemons.length;
  mostrarDetalhes(pokemons[indiceAtual]);
});

anterior.addEventListener("click", () => {
  if (pokemons.length === 0) return;
  indiceAtual = (indiceAtual - 1 + pokemons.length) % pokemons.length;
  mostrarDetalhes(pokemons[indiceAtual]);
});

botaoFavoritar.addEventListener("click", () => {
  const pokemonAtual = pokemons[indiceAtual];
  if (!pokemonAtual) return;

  if (favoritos.includes(pokemonAtual.id)) {
    favoritos = favoritos.filter(id => id !== pokemonAtual.id);
  } else {
    favoritos.push(pokemonAtual.id);
  }

  salvarFavoritos();
  atualizarBotaoFavoritar(pokemonAtual);
  renderizarFavoritos();
});

carregarPokemons();