document.addEventListener('DOMContentLoaded', () => {
  const inputNome = document.querySelector('#amigo');
  const botaoAdicionar = document.querySelector('.button-add');
  const botaoSortear = document.querySelector('.button-draw');
  const listaAmigos = document.querySelector('#listaAmigos');

  const amigos = [];

  botaoAdicionar.addEventListener('click', () => {
    const nome = inputNome.value.trim();

    if (nome === "") {
      alert('Por favor, digite um nome válido.');
      return;
    }

    amigos.push(nome);
    atualizarLista();
    inputNome.value = '';
  });

  function atualizarLista() {
    listaAmigos.innerHTML = '';
    amigos.forEach((amigo, index) => {
      const item = document.createElement('li');
      item.textContent = amigo;
      listaAmigos.appendChild(item);
    });
  }

  botaoSortear.addEventListener('click', () => {
    if (amigos.length === 0) {
      alert('Adicione pelo menos um nome antes de sortear.');
      return;
    }

    const sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    alert(`🎉 O amigo sorteado foi: ${sorteado}`);
  });
});