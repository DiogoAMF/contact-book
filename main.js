const formContato = document.getElementById("formContato");
const tabelaContatos = document.getElementById("tabelaContatos");

formContato.addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = document.getElementById("nome-add").value;
  const numero = document.getElementById("numero-add").value;

  adicionarContato(nome, numero);
  formContato.reset();
});

function adicionarContato(nome, numero) {
  const novaLinha = document.createElement("tr");
  const nomeAdd = document.createElement("td");
  const numeroAdd = document.createElement("td");

  nomeAdd.textContent = nome;
  numeroAdd.textContent = numero;

  novaLinha.appendChild(nomeAdd);
  novaLinha.appendChild(numeroAdd);

  tabelaContatos.appendChild(novaLinha);
}
