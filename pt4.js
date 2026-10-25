// Mudança nos filtros de tipo
// Antes os botões de filtro eram fixos no HTML (todos, grama, veneno, fogo, água)

// Agora os filtros são criados dinamicamente a partir dos tipos reais dos Pokémon
// Usamos forEach para coletar os tipos únicos e outro forEach para gerar os botões com as cores oficiais

const coresTipo = {
  normal: "#a8a878", fire: "#f08030", water: "#6890f0", grass: "#78c850",
  electric: "#e0c020", ice: "#80c8c8", fighting: "#c03028", poison: "#a040a0",
  ground: "#d8b860", flying: "#a890f0", psychic: "#f85888", bug: "#a8b820",
  rock: "#b8a038", ghost: "#705898", dragon: "#7038f8", dark: "#705848",
  steel: "#b8b8d0", fairy: "#ee99ac"
};

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