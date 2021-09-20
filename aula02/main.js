const botaoReal = document.querySelector('[data-real]')
const botaoEuro = document.querySelector('[data-euro]')
const resultado = document.querySelector('[data-resultado]')
const resultadoBitcoin = document.querySelector('[data-bitcoin]')


const converterReal = () => {
  const valorEmDolar = parseFloat(document.querySelector('[data-number]').value)
  const valorEmReal = (valorEmDolar * 5.30).toFixed(2)
  resultado.innerHTML = `U$${valorEmDolar} equivale a R$${valorEmReal}`
  
  const valorEmBitcoin = parseFloat(valorEmDolar * 0.000021).toFixed(6)
  resultadoBitcoin.innerHTML = `U$${valorEmDolar} equivale a ₿${valorEmBitcoin}`
}

const converterEuro = () => {
  const valorEmDolar = parseFloat(document.querySelector('[data-number]').value)
  const valorEmEuro = (valorEmDolar * 1.17).toFixed(2)
  resultado.innerHTML = `U$${valorEmDolar} equivale a €$${valorEmEuro}`

  const valorEmBitcoin = parseFloat(valorEmDolar * 0.000021).toFixed(6)
  resultadoBitcoin.innerHTML = `U$${valorEmDolar} equivale a ₿${valorEmBitcoin}`
}

botaoReal.addEventListener('click', converterReal)
botaoEuro.addEventListener('click', converterEuro)