// Mudança nos status do Pokémon
// Antes os status eram apenas textos simples criados com map e forEach

// Agora os status viraram barras de progresso visuais
// Usamos forEach nos stats da API, abreviações, cores diferentes e largura proporcional ao valor

function criarBarrasStatus(pokemon) {
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

  return barrasStatus;
}