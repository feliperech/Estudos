const URL = 'https://dummyjson.com/quotes/random'; //url da API

fetch(URL) 
.then((response) =>  response.json())
.then((data) => console.log(data.quote))
.catch((error) => console.log(error.message)); // URL DA API, OBJETO DE CONFIGURAÇÕES OPCIONAL
