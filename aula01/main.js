const botaoMedia = document.querySelector('[data-botao]')

const geraMedia = () => {
  
  const nome = document.querySelector('[data-nome]').value
  const nota1 = document.querySelector('[data-nota1]').value
  const nota2 = document.querySelector('[data-nota2]').value
  const nota3 = document.querySelector('[data-nota3]').value
  const nota4 = document.querySelector('[data-nota4]').value
  const resultado = document.querySelector('[data-resultado]') 
  
  if((nome.length == 0) || (nota1.length == 0) || (nota2.length == 0) || (nota3.length == 0) || (nota4.length == 0)) {
    alert("PREENCHA TODOS OS CAMPOS!")
  } else {
    const media = ((Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)) / 4).toFixed(2)
        
    if (media <= 4 ) {
      resultado.innerHTML = `${nome}, você foi reprovado. Nota: ${media}`
    } else if(media < 7) {
      resultado.innerHTML = `${nome}, você vai pro exame final. Nota: ${media}`
    } else {
     resultado.innerHTML = `Parabéns, ${nome} você foi APROVADO! Nota: ${media}`
    }
  }
}
botaoMedia.addEventListener('click', geraMedia)