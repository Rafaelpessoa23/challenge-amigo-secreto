# Programa de Amigo Secreto

Este é um programa simples para gerenciar a adição de participantes e realizar o sorteio de um amigo secreto.

## Funcionalidades

* **Adicionar Participantes:** Permite adicionar nomes de pessoas à lista através de um campo de texto e um botão.
* **Validação de Nomes:** Impede a adição de nomes vazios à lista, exibindo um alerta ao usuário.
* **Listagem de Participantes:** Exibe os nomes dos participantes adicionados em uma lista visível na tela.
* **Sorteio Aleatório:** Realiza um sorteio aleatório entre os nomes adicionados.
* **Exibição do Sorteado:** Mostra na tela o nome do participante que foi sorteado.
* **Validação de Sorteio:** Garante que o sorteio só seja realizado se houver pelo menos dois participantes na lista.

## Estrutura do Projeto

* `index.html`: Contém a estrutura HTML da página, incluindo os campos de entrada, botões e áreas para exibir a lista de participantes e o resultado do sorteio.
* `style.css`: Contém a estilização CSS para a página, definindo a aparência dos elementos.
* `app.js`: Contém o código JavaScript responsável pela lógica da aplicação, incluindo a adição de nomes à lista, a validação e a implementação do sorteio.
* `assets/`: Diretório que contém os arquivos de imagem utilizados na página (como `amigo-secreto.png` e `play_circle_outline.png`).

## Pré-requisitos

* Um navegador web moderno que suporte JavaScript (Chrome, Firefox, Safari, Edge, etc.).

## Notas

* Este programa realiza um sorteio simples e não implementa a lógica de atribuição de quem tirou quem no amigo secreto. Ele apenas sorteia um nome da lista.
* A persistência dos dados (ou seja, salvar a lista de participantes entre sessões) não está implementada nesta versão. Ao fechar o navegador, a lista será perdida.
