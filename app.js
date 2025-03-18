function adicionarAmigo() {
  const inputAmigo = document.getElementById('amigo');
  const listaAmigos = document.getElementById('listaAmigos');
  const nomeAmigo = inputAmigo.value.trim();

  if (nomeAmigo === '') {
    alert('Por favor, digite o nome do amigo.');
    return;
  }

  const novoItemLista = document.createElement('li');
  novoItemLista.textContent = nomeAmigo;
  listaAmigos.appendChild(novoItemLista);

  inputAmigo.value = '';
}

function sortearAmigo() {
  const listaAmigosElement = document.getElementById('listaAmigos');
  const resultadoDiv = document.getElementById('resultado');
  const nomes = Array.from(listaAmigosElement.children).map(
    (li) => li.textContent,
  );

  if (nomes.length < 2) {
    alert('Adicione pelo menos dois amigos para realizar o sorteio.');
    return;
  }

  for (let i = nomes.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [nomes[i], nomes[j]] = [nomes[j], nomes[i]];
  }

  resultadoDiv.innerHTML = '';

  const paragrafoResultado = document.createElement('p');
  paragrafoResultado.textContent = `O amigo sorteado foi: ${nomes[0]}`;
  resultadoDiv.appendChild(paragrafoResultado);
}
