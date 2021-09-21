var carta1 = {
  nome: "Bulbasauro",
  atributos: {
    ataque: 7,
    defesa: 8,
    magia: 6
  },
  imagem: "https://static.wikia.nocookie.net/pokedex-br/images/a/a2/Bulbasauro_Pose.png/revision/latest?cb=20151224122219&path-prefix=pt-br"
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
  imagem: "https://s.aficionados.com.br/imagens/shiryu.jpg"
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
  console.log(cartaJogador)
  
  document.querySelector('[data-sortear]').disabled = true
  document.querySelector('[data-jogar]').disabled = false
  exibirOpcoes()
}

function exibirOpcoes() {
  var opcoes = document.querySelector('[data-opcoes]')
  var opcoesTexto = ""
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto += `<input type="radio" name="atributo" checked value="${atributo}"> ${atributo}`
  }
  var imagemCarta = `<img src="${cartaJogador.imagem}" class="carta"><br>`
  opcoes.innerHTML = imagemCarta + opcoesTexto
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
  var elementoResultado = document.querySelector('[data-resultado]')
  var valorAtributoJogador = cartaJogador.atributos[atributoSelecionado]
  var valorAtributoMaquina = cartaMaquina.atributos[atributoSelecionado]
  
  if(valorAtributoJogador > valorAtributoMaquina) {
    elementoResultado.innerHTML = `Você VENCEU !`
  } else if (valorAtributoMaquina > valorAtributoJogador) {
    elementoResultado.innerHTML = `Você perdeu !`
  } else {
    elementoResultado.innerHTML = `Empate!`
  }
  console.log(cartaMaquina)
  document.querySelector('[data-sortear]').disabled = false
  document.querySelector('[data-jogar]').disabled = true
}
