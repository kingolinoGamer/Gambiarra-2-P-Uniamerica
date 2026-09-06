let disciplinas = carregar();

function carregar() {
  const dados = localStorage.getItem('disciplinas');

  if (dados === null) {
    return [];
  }

  return JSON.parse(dados);
}

function salvar() {
  localStorage.setItem('disciplinas', JSON.stringify(disciplinas));
}

function adicionarDisciplina(nome, horas) {
  const novaDisciplina = {
    nome: nome,
    horasEstudadas: horas,
    concluida: false
  };

  disciplinas.push(novaDisciplina);
  salvar();
  renderizar();
}

function renderizar() {
  const lista = document.getElementById('lista-disciplinas');
  lista.innerHTML = '';

  for (let i = 0; i < disciplinas.length; i++) {
    const disciplina = disciplinas[i];

    const li = document.createElement('li');
    li.textContent = disciplina.nome + ' - ' + disciplina.horasEstudadas + 'h - ';
    li.textContent += disciplina.concluida ? 'Concluída' : 'Em andamento';

    const botaoStatus = document.createElement('button');
    botaoStatus.textContent = 'Alterar status';
    botaoStatus.onclick = function () {
      alterarStatus(i);
    };

    const botaoRemover = document.createElement('button');
    botaoRemover.textContent = 'Remover';
    botaoRemover.onclick = function () {
      removerDisciplina(i);
    };

    li.appendChild(botaoStatus);
    li.appendChild(botaoRemover);
    lista.appendChild(li);
  }
}

function alterarStatus(indice) {
  disciplinas[indice].concluida = !disciplinas[indice].concluida;
  salvar();
  renderizar();
}

function removerDisciplina(indice) {
  disciplinas.splice(indice, 1);
  salvar();
  renderizar();
}

document.getElementById('form-disciplina').addEventListener('submit', function (evento) {
  evento.preventDefault();

  const nome = document.getElementById('nome').value;
  const horas = Number(document.getElementById('horas').value);

  adicionarDisciplina(nome, horas);

  document.getElementById('nome').value = '';
  document.getElementById('horas').value = '';
});

renderizar();