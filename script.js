var carta1 = {
  nome: "Bulbasauro",
  imagem: "/imagens/bulbasaur.png",
  atributos: {
    ataque: 7,
    defesa: 8,
    magia: 6
  }
};
var carta2 = {
  nome: "Pikachu",
  imagem:
    "/imagens/pikachu.png",
  atributos: {
    ataque: 20,
    defesa: 15,
    magia: 32
  }
};
var carta3 = {
  nome: "Charizard",
  imagem:
    "/imagens/charizard.png",
  atributos: {
    ataque: 25,
    defesa: 18,
    magia: 40
  }
};

var cartas = [carta1, carta2, carta3];
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 3);
  cartaMaquina = cartas[numeroCartaMaquina];
  console.log(cartaMaquina);

  var numeroCartaJogador = parseInt(Math.random() * 3);

  while (cartaMaquina == cartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * 3);
  }
  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  exibirCartaJogador();
}

/*function exibirOpcoes() {
  var opcoes = document.getElementById("opcoes");
  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo;
    opcoes.innerHTML = opcoesTexto;
    console.log(atributo);
  }
}*/

function selecaoAtributo() {
  var atributoSelecionado = document.getElementsByName("atributo");
  for (var i = 0; i < atributoSelecionado.length; i++) {
    if (atributoSelecionado[i].checked == true) {
      return atributoSelecionado[i].value;
    }
  }
}

function jogar() {
  var atributoEscolhido = selecaoAtributo();
  var valorResultado = document.getElementById("resultado");
  var valorCartaJogador = cartaJogador.atributos[atributoEscolhido];
  var valorCartaMaquina = cartaMaquina.atributos[atributoEscolhido];

  if (valorCartaMaquina < valorCartaJogador) {
    valorResultado.innerHTML = "Você Venceu!";
  } else if (valorCartaMaquina > valorCartaJogador) {
    valorResultado.innerHTML = "Você Perdeu!";
  } else {
    valorResultado.innerHTML = "Empate!";
  }
  console.log(cartaMaquina);
  document.getElementById("btnJogar").disabled = true;
  exibirCartaMaquina();
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  /* É o mesmo que:
  divCartaJogador.style.backgroundImage = "url("+cartaJogador.imagem+")";*/

  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHtml = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
  divCartaJogador.innerHTML = moldura + nome + tagHtml + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHtml = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
  divCartaMaquina.innerHTML = moldura + nome + tagHtml + opcoesTexto + "</div>";
}