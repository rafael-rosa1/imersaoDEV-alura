var todasCartas = [{
    nome: "Monkey D. Luffy", 
    atributos: {
      ataque: 9, 
      defesa: 9, 
      magia: 6
    },
    imagem: "http://pm1.narvii.com/6511/713ea8475e05b05aead72aea3c96784e4d90d7ea_00.jpg"
  },
  {
    nome: "Edward Elric", 
    atributos: {
      ataque: 7, 
      defesa: 5, 
      magia: 7
    },
    imagem: "https://gartic.com.br/imgs/mural/ru/rubi_sama/edward-elric-p-froid.png"
  },
  {
    nome: "Shiryu de dragão", 
    atributos: {
      ataque: 6, 
      defesa: 7, 
      magia: 8
    },
    imagem: "https://img.elo7.com.br/product/zoom/2B30956/poster-quadro-shiryu-de-dragao-30x42cm-nerd.jpg"
  },
  {
    nome: "Ikki de Fênix", 
    atributos: {
      ataque: 10, 
      defesa: 6, 
      magia: 8},
    imagem: "https://http2.mlstatic.com/D_NQ_NP_858750-MLB31003347583_062019-O.jpg"
  },
  {
    nome: "Seya de Pégasus", 
    atributos: {
      ataque: 8, 
      defesa: 10, 
      magia: 7
    },
    imagem: "https://i.pinimg.com/236x/12/a9/4c/12a94cb3fa0cd1666d576eaff3505177.jpg"
  },
  {
    nome: "Tanjiro Kamado", 
    atributos: {
      ataque: 10, 
      defesa: 7, 
      magia: 5
    },
    imagem: "https://cosmonerd.com.br//uploads/2020/02/Tanjiro-Demon-Slayer.jpg"
  },
  {
    nome: "Ichigo Kurosaki", 
    atributos: {
      ataque: 9, 
      defesa: 7, 
      magia: 8},
    imagem: "https://www.comboinfinito.com.br/principal/wp-content/uploads/2016/11/bleach-novels.jpg"
  },
  {
    nome: "Kenpachi Zaraki", 
    atributos: {
      ataque: 10, 
      defesa: 5, 
      magia: 2
    },
    imagem: "https://www.comboinfinito.com.br/principal/wp-content/uploads/2016/11/bleach-novels.jpg"
  },
  {
    nome: "Naruto Uzumaki", 
    atributos: {
      ataque: 10, 
      defesa: 7, 
      magia: 10
    },
    imagem: "https://sm.ign.com/ign_br/screenshot/default/naruto-1498593686428-v2-1920x1080_pxb6.png"
  },
  {
    nome: "Rock Lee", 
    atributos: {
      ataque: 8, 
      defesa: 7, 
      magia: 0
    },
    imagem: "https://ovicio.com.br/wp-content/uploads/2021/07/20210716-rock-lee.jpg"
  },
  {
    nome: "Goku", 
    atributos: {
      ataque: 10, 
      defesa: 8, 
      magia: 10
    },
    imagem: "https://nerdhits.com.br/wp-content/uploads/2020/05/instinto-superior-goku-1200x675.jpg"
  },
  {
    nome: "Vegeta", 
    atributos: {
      ataque: 9, 
      defesa: 8, 
      magia: 9
    },
    imagem: "https://ovicio.com.br/wp-content/uploads/2020/09/20200904-20200217-dragon-ball-super-vegeta-1200x675-1.jpg"
  },
  {
    nome: "Jibaku", 
    atributos: {
      ataque: 0, 
      defesa: 2, 
      magia: 6
    },
    imagem: "http://nippotv.com/wp-content/uploads/2013/08/bucky_the_incredible_kid-7213.jpg"
  },
  {
    nome: "Saitama", 
    atributos: {
      ataque: 10, 
      defesa: 10, 
      magia: 0
    },
    imagem: "https://criticalhits.com.br/wp-content/uploads/2020/09/Saitama.jpg"
  },
  {
    nome: "Zidane", 
    atributos: {
      ataque: 8, 
      defesa: 7, 
      magia: 5
    },
    imagem: "https://i.pinimg.com/originals/6a/3a/d0/6a3ad05b6780dc5267a8035850c72085.jpg"
  },
  {
    nome: "Vivi", 
    atributos: {
      ataque: 0, 
      defesa: 4, 
      magia: 9
    },
    imagem: "https://i.pinimg.com/originals/48/60/45/48604552dcbd6e9e25fb4c7267d045b5.png"
  },
  {
    nome: "Guts", 
    atributos: {
      ataque: 9, 
      defesa: 9, 
      magia: 0
    },
    imagem: "https://i.pinimg.com/originals/c0/30/0a/c0300ade8d95d78ac8e2b383e35131a9.jpg"
  },
  {
    nome: "Nie Li", 
    atributos: {
      ataque: 6, 
      defesa: 6, 
      magia: 10
    },
    imagem: "http://pm1.narvii.com/6232/f6d21ff1716a238814b75d0774cce6c0ae7a50d8_00.jpg"
  },
  {
    nome: "Xiao Ning'er", 
    atributos: {
      ataque: 6, 
      defesa: 5, 
      magia: 9
    },
    imagem: "https://i.redd.it/cs2h2rh96sh11.png"
  },
  {
    nome: "Roronoa Zoro", 
    atributos: {
      ataque: 10, 
      defesa: 8, 
      magia: 5
    },
    imagem: "https://i1.sndcdn.com/artworks-BkCSBE4usKm7ocno-wTagAw-t500x500.jpg"
  }]
//embaralha cartas antes de dividir
todasCartas.sort( () => Math.random() - 0.5)

var imagemMisteriosa = "https://health.wyo.gov/wp-content/uploads/2017/05/question-mark-on-chalkboard.jpg"
var cartasJogador = []
var cartasMaquina = []

divideCartas()

function divideCartas() {
  for (let carta = 0; carta < 10; carta++) {
    cartasJogador.push(todasCartas[carta])
  }
  for (let carta = 0; carta < 10; carta++) {
    todasCartas.shift()
  }
  for (let carta = 0; carta < 10; carta++) {
    cartasMaquina.push(todasCartas[carta])
  }
  for (let carta = 0; carta < 10; carta++) {
    todasCartas.shift()
  }
}


var cartaMaquina
var cartaJogador

const divCartajogador = document.querySelector('[data-cartaJogador]')
divCartajogador.style.backgroundImage = `url(${imagemMisteriosa})`
const divCartaMaquina = document.querySelector('[data-cartaMaquina]')
divCartaMaquina.style.backgroundImage = `url(${imagemMisteriosa})`

function sortearCarta() {  
  var divResultado = document.querySelector('[data-resultado]')
  if (cartasJogador.length != 0 && cartasMaquina.length != 0) {
    var numeroCartaMaquina = parseInt(Math.random() * cartasMaquina.length)
    cartaMaquina = cartasMaquina[numeroCartaMaquina]
    
    var numeroCartaJogador = parseInt(Math.random() * cartasJogador.length)
    cartaJogador = cartasJogador[numeroCartaJogador]
    const divCartaMaquina = document.querySelector('[data-cartaMaquina]')
    divCartaMaquina.style.backgroundImage = `url(${imagemMisteriosa})`
    document.querySelector('[data-sortear]').disabled = true
    document.querySelector('[data-jogar]').disabled = false
    exibirCartaJogador()
    esconderCartaMaquina()
  } else if (cartasJogador.length == 0) {
      divResultado.innerHTML = `<p class="resultado-final"> Fim de Jogo. Vitória da Maquina!</p><br><input type="button" class="botao__reset" onclick="resetar()" value="JOGAR NOVAMENTE">`
      document.querySelector('[data-sortear]').disabled = true
  } else if (cartasMaquina.length == 0) {
      divResultado.innerHTML = `<p class="resultado-final"> Fim de Jogo. Você venceu!</p><br><input type="button" class="botao__reset" onclick="resetar()" value="JOGAR NOVAMENTE">`
      document.querySelector('[data-sortear]').disabled = true
  }
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
    cartasJogador.push(cartaMaquina)
    cartasMaquina.splice(cartasMaquina.indexOf(cartaMaquina), 1)
  } else if (valorAtributoMaquina > valorAtributoJogador) {
    htmlResultado = `<p class="resultado-final">Derrota</p>`
    cartasMaquina.push(cartaJogador)
    cartasJogador.splice(cartasJogador.indexOf(cartaJogador), 1)
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

function esconderCartaMaquina() {
  const divCartaMaquina = document.querySelector('[data-cartaMaquina]')
  divCartaMaquina.style.backgroundImage = `url(${imagemMisteriosa})`
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">'
  var tagHTML = "<div id='opcoes' class='carta-status'>"

  var opcoesTexto = ""
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto += `<p>${atributo}: ?</p>`
  }
  var nome = `<p class="carta-subtitle">????????</p>`
  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"
}

function resetar() {
  document.location.reload(true)
}