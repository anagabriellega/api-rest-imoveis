const API_URL = 'http://localhost:3001/api/imoveis';
let imovelEditando = null;

document.addEventListener('DOMContentLoaded', () => {
  carregarImoveis();

  document.getElementById('formImovel').addEventListener('submit', async (e) => {
    e.preventDefault();

    const titulo = document.getElementById('titulo').value;
    const endereco = document.getElementById('endereco').value;
    const descricao = document.getElementById('descricao').value;
    const preco = parseFloat(document.getElementById('preco').value);

    if (!titulo || !endereco || isNaN(preco)) {
      mostrarAlerta("Preencha corretamente os campos obrigatórios!", false);
      return;
    }

    try {
      if (imovelEditando) {
        await fetch(`${API_URL}/${imovelEditando}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ titulo, endereco, descricao, preco })
        });
        mostrarAlerta("Imóvel atualizado com sucesso!", true);
        imovelEditando = null;
      } else {
        await fetch(API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ titulo, endereco, descricao, preco })
        });
        mostrarAlerta("Imóvel cadastrado com sucesso!", true);
      }

      e.target.reset();
      carregarImoveis();
    } catch (erro) {
      mostrarAlerta("Erro ao salvar imóvel!", false);
    }
  });
});

async function carregarImoveis() {
  const resposta = await fetch(API_URL);
  const imoveis = await resposta.json();

  const lista = document.getElementById('listaImoveis');
  lista.innerHTML = '';

  imoveis.forEach(imovel => {
    const div = document.createElement('div');
    div.classList.add('imovel');
    div.innerHTML = `
      <strong>${imovel.titulo}</strong><br>
      Endereço: ${imovel.endereco}<br>
      Descrição: ${imovel.descricao || '---'}<br>
      Preço: R$ ${imovel.preco.toFixed(2)}<br>
      <button onclick="editarImovel(${imovel.id})">Editar</button>
      <button onclick="deletarImovel(${imovel.id})">Excluir</button>
    `;
    lista.appendChild(div);
  });
}

async function editarImovel(id) {
  const resposta = await fetch(`${API_URL}/${id}`);
  const imovel = await resposta.json();

  document.getElementById('titulo').value = imovel.titulo;
  document.getElementById('endereco').value = imovel.endereco;
  document.getElementById('descricao').value = imovel.descricao;
  document.getElementById('preco').value = imovel.preco;

  imovelEditando = id;
}

async function deletarImovel(id) {
  try {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    mostrarAlerta("Imóvel excluído com sucesso!", true);
    carregarImoveis();
  } catch (erro) {
    mostrarAlerta("Erro ao excluir imóvel!", false);
  }
}

function mostrarAlerta(mensagem, sucesso = true) {
  const alerta = document.createElement('div');
  alerta.className = `alerta ${sucesso ? 'sucesso' : 'erro'}`;
  alerta.textContent = mensagem;

  document.body.prepend(alerta);

  setTimeout(() => alerta.remove(), 3000);
}
