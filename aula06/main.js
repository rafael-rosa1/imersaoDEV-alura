var rafa = {
  nome: "Rafa",
  vitorias: 2,
  empates: 1,
  derrotas: 1,
  pontos: 0
}

var paulo = {
  nome: "Paulo",
  vitorias: 1,
  empates: 1,
  derrotas: 2,
  pontos: 0
}
var jogadores = [rafa, paulo]

rafa.pontos = calculaPontos(rafa)
paulo.pontos = calculaPontos(paulo)

function calculaPontos(jogador) {
  var pontos = (jogador.vitorias * 3) + (jogador.empates)
  return pontos
}

function exibeJogadoresNaTela(jogadores) {
  var elemento = ""
  for (var i = 0; i < jogadores.length; i++) {
    elemento +=`<tr><td>${jogadores[i].nome}</td>
    <td>${jogadores[i].vitorias}</td>
    <td>${jogadores[i].empates}</td>
    <td>${jogadores[i].derrotas}</td>
    <td>${jogadores[i].pontos}</td>
    <td><button onClick="adicionarVitoria(${i})">Vitória</button></td>
    <td><button onClick="adicionarEmpate(${i})">Empate</button></td>
    <td><button onClick="adicionarDerrota(${i})">Derrota</button></td>
    <td><button onClick="excluirJogador(${i})">Excluir</button></td></tr>`
  }
  var tabelaJogadores = document.querySelector('[data-table]')
  tabelaJogadores.innerHTML = elemento
  mostraStatus()
}

function adicionarVitoria(jogador) {
  var jogadorSelecionado = jogadores[jogador]
  jogadorSelecionado.vitorias++
  jogadorSelecionado.pontos = calculaPontos(jogadorSelecionado)
  exibeJogadoresNaTela(jogadores)
}

function adicionarEmpate(jogador) {
  var jogadorSelecionado = jogadores[jogador]
  jogadorSelecionado.empates++
  jogadorSelecionado.pontos = calculaPontos(jogadorSelecionado)
  exibeJogadoresNaTela(jogadores)
}

function adicionarDerrota(jogador) {
  var jogadorSelecionado = jogadores[jogador]
  jogadorSelecionado.derrotas++
  exibeJogadoresNaTela(jogadores)
}

function limparLista() {
  for(var jogador = 0; jogador < jogadores.length; jogador++) {
    for(var valores in jogadores[jogador]) {
      if(typeof jogadores[jogador][valores] != "string"){
        jogadores[jogador][valores] = 0
      }
    }
  }
  exibeJogadoresNaTela(jogadores)
}

exibeJogadoresNaTela(jogadores)


const adicionaJogador = document.querySelector('[data-adiciona]');

const adicionarJogador = () => {
  const inputJogador = document.querySelector('[data-jogador]').value;
  if (inputJogador.trim().length != 0) {
    var jogadorAdicionado = {
      nome: inputJogador,
      vitorias: 0,
      empates: 0,
      derrotas: 0,
      pontos: 0
    }
    jogadores.push(jogadorAdicionado)
    exibeJogadoresNaTela(jogadores)
    document.querySelector('[data-jogador]').value = ""
  } else {
    alert("Digite um nome")
  }
}

function excluirJogador(indiceJogador) {
  jogadores.splice(indiceJogador, 1)
  exibeJogadoresNaTela(jogadores)
} 


function mostraStatus() {
  var statusJogo = document.querySelector('[data-status]')
  var vitorias = 0
  var derrotas = 0
  var empates = 0
  for (var indexJogador = 0; indexJogador < jogadores.length; indexJogador++) {
    vitorias += jogadores[indexJogador].vitorias
    derrotas += jogadores[indexJogador].derrotas
    empates += jogadores[indexJogador].empates
  } 

  if(vitorias != derrotas) {
    if(empates%2 != 0) {
      statusJogo.innerHTML = `Número de derrotas e vitórias incorreto, empates não são compativeis`
    } else {
      statusJogo.innerHTML = `Número de derrotas e vitórias incorreto`
    }
  } else if (vitorias == derrotas) {
    if (empates%2 != 0) {
      statusJogo.innerHTML = `Empates não são compativeis`
    } else {
      statusJogo.innerHTML = `Tudo certo`
    }
  }

}
adicionaJogador.addEventListener('click', adicionarJogador)
