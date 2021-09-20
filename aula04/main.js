var listaFilmes = [
  "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_FMjpg_UX1000_.jpg",
  "https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
  "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
  "https://m.media-amazon.com/images/M/MV5BYjc1N2M1YjMtYzBiNi00NGFiLThkN2QtY2EwZGU5MDRkODAzXkEyXkFqcGdeQXVyMTkzODUwNzk@._V1_FMjpg_UX1000_.jpg",
  "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
  "https://m.media-amazon.com/images/M/MV5BZDhkMjUyYjItYWVkYi00YTM5LWE4MGEtY2FlMjA3OThlYmZhXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1000_.jpg",
  "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
  "https://m.media-amazon.com/images/M/MV5BNzc0ODI0MjMwOV5BMl5BanBnXkFtZTcwNTk0MDkyNA@@._V1_FMjpg_UX1000_.jpg",
  "https://m.media-amazon.com/images/M/MV5BMTc0NjIyMjA2OF5BMl5BanBnXkFtZTcwMzIxNDE1MQ@@._V1_FMjpg_UX1000_.jpg",
  "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
  "https://m.media-amazon.com/images/M/MV5BODE0MzZhZTgtYzkwYi00YmI5LThlZWYtOWRmNWE5ODk0NzMxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
  "https://m.media-amazon.com/images/M/MV5BNzNlZTZjMDctZjYwNi00NzljLWIwN2QtZWZmYmJiYzQ0MTk2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
  "https://m.media-amazon.com/images/M/MV5BNTQ5YjkyZWYtNzUyNC00MjM3LWFhNWUtNDcxNzNiZGFlNzI2XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg",
  "https://m.media-amazon.com/images/M/MV5BMmNlNDlmNzAtYWVjYS00NGJjLTlhNzgtODBjZmY3ZTY4OTY0XkEyXkFqcGdeQXVyODE0MDY3NzY@._V1_FMjpg_UX1000_.jpg"
]

var listaTrailers = [
  "https://www.imdb.com/title/tt0120737/",
  "https://www.imdb.com/title/tt0167261/",
  "https://www.imdb.com/title/tt0167260/",
  "https://www.imdb.com/title/tt2762506/",
  "https://www.imdb.com/title/tt6751668/",
  "https://www.imdb.com/title/tt5727208/",
  "https://www.imdb.com/title/tt0110912/",
  "https://www.imdb.com/title/tt0110912/",
  "https://www.imdb.com/title/tt0110912/",
  "https://www.imdb.com/title/tt0133093/",
  "https://www.imdb.com/title/tt0234215/",
  "https://www.imdb.com/title/tt0242653/",
  "https://www.imdb.com/title/tt10838180/",
  "https://www.imdb.com/title/tt1699518/",
]
var listaAtualizada = document.querySelector('[data-filmes]')
for (let i = 0; i < listaFilmes.length; i++) {
  listaAtualizada.innerHTML += `<a href="${listaTrailers[i]}" target="_blank"><img src="${listaFilmes[i]}"></a>`
}

const botaoAdiciona = document.querySelector('[data-adiciona]')



const adicionaNovo = () => {
  const inputCapa = document.querySelector('[data-capa]').value
  const inputTrailer = document.querySelector('[data-trailer]').value
  
  for (let i = 0; i < listaFilmes.length; i++) {
    if(!listaFilmes.includes(inputCapa) && !listaTrailers.includes(inputTrailer)){
      listaFilmes.push(inputCapa)
      listaTrailers.push(inputTrailer)
      listaAtualizada.innerHTML += `<a href="${listaTrailers[listaTrailers.length - 1]}" target="_blank"><img src="${listaFilmes[listaFilmes.length - 1]}"></a>`
      break;
    }
  }
}

botaoAdiciona.addEventListener('click', adicionaNovo)

/*
Desafios
  - colocar filmes dinamicamente usando js e enviando links
*/