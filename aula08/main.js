var carta1 = {
  nome: "Bulbasauro",
  atributos: {
    ataque: 7,
    defesa: 8,
    magia: 6
  },
  imagem: "https://m.media-amazon.com/images/I/51DFkMf+PKL._AC_SX425_.jpg"
}

var carta2 = {
  nome: "Darth Vader",
  atributos: {
    ataque: 9,
    defesa: 8,
    magia: 2
  },
  imagem: "https://sm.ign.com/ign_br/screenshot/default/darth-vader_5yvm.jpg"
}

var carta3 = {
  nome: "Shiryu de dragão",
  atributos: {
    ataque: 5,
    defesa: 9,
    magia: 10
  },
  imagem: "https://img.elo7.com.br/product/zoom/2B30956/poster-quadro-shiryu-de-dragao-30x42cm-nerd.jpg"
}

var cartas = [carta1, carta2, carta3]

var cartaMaquina
var cartaJogador

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 3)
  cartaMaquina = cartas[numeroCartaMaquina]
  
  var numeroCartaJogador = parseInt(Math.random() * 3)
  while (numeroCartaMaquina == numeroCartaJogador) {
    var numeroCartaJogador = parseInt(Math.random() * 3)
  }
  cartaJogador = cartas[numeroCartaJogador]
  
  document.querySelector('[data-sortear]').disabled = true
  document.querySelector('[data-jogar]').disabled = false
  exibirCartaJogador()
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName('atributo')
  for (var i = 0; i < radioAtributos.length; i++) {
    if(radioAtributos[i].checked) {
      return radioAtributos[i].value
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado()
  var divResultado = document.querySelector('[data-resultado]')

  var valorAtributoJogador = cartaJogador.atributos[atributoSelecionado]
  var valorAtributoMaquina = cartaMaquina.atributos[atributoSelecionado]
  
  if(valorAtributoJogador > valorAtributoMaquina) {
    htmlResultado = `<p class="resultado-final">Vitória</p>`
  } else if (valorAtributoMaquina > valorAtributoJogador) {
    htmlResultado = `<p class="resultado-final">Derrota</p>`
  } else {
    htmlResultado = `<p class="resultado-final">Empate</p>`
  }
  divResultado.innerHTML = htmlResultado
  document.querySelector('[data-sortear]').disabled = false
  document.querySelector('[data-jogar]').disabled = true
  exibirCartaMaquina()
}

function exibirCartaJogador() {
  const divCartajogador = document.querySelector('[data-cartaJogador]')
  divCartajogador.style.backgroundImage = `url(${cartaJogador.imagem})`

  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">'
  var tagHTML = "<div id='opcoes' class='carta-status'>"

  var opcoesTexto = ""
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto += `<input type="radio" name="atributo" checked value="${atributo}"> ${atributo}: ${cartaJogador.atributos[atributo]}<br>`
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
  divCartajogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"
}

function exibirCartaMaquina() {
  const divCartaMaquina = document.querySelector('[data-cartaMaquina]')
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">'
  var tagHTML = "<div id='opcoes' class='carta-status'>"

  var opcoesTexto = ""
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto += `<p>${atributo}: ${cartaMaquina.atributos[atributo]}</p>`
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"
 
}

//adicionar varias outras cartas

//quando ganhar retirar a carta da lista da maquina e adicionar na lista do jogador

//uma rodada jogador escolhe o atributo, na outra a maquina escolhe o maior atributo de sua carta

//animação carta "batendo"