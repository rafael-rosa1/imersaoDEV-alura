var numeroSecreto = parseInt(Math.random() * 11)
const botao = document.querySelector('[data-botao]')
const resultado = document.querySelector('[data-resultado]')
var tentativas = 0

const chutar = () => {
  tentativas++
  while(tentativas <= 3) {
    const chute = parseInt(document.querySelector('[data-chute]').value)
    if(chute == numeroSecreto) {
      resultado.innerHTML = `ACERTO MIZERAVI !`;
      tentativas = 0
      numeroSecreto = parseInt(Math.random() * 11)
      break;
    } else if (chute > 10 || chute < 0) {
      alert("Digite um numero de 0 a 10");
      break;
    } else if(tentativas < 3 && chute > numeroSecreto){
      resultado.innerHTML = `Errou tentativa ${tentativas}/3. Tente um número menor.`;
      break;
    } else if(tentativas < 3 && chute < numeroSecreto) {
      resultado.innerHTML = `Errou tentativa ${tentativas}/3. Tente um número maior.`;
      break;
    } else {
      resultado.innerHTML = `Errou tentativa ${tentativas}/3. O número secreto era ${numeroSecreto}`;
      tentativas = 0
      numeroSecreto = parseInt(Math.random() * 11)
      break;
    }
  }
}

botao.addEventListener('click', chutar)