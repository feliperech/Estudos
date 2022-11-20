// função que gera um número aleatório

const numberGenerated = () => Math.round(Math.random*10);

// promise resolvida retornando o número aleatório

const solvedPromises = () =>
    new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve(numberGenerated());
        }, 1000);
    });


console.log(solvedPromises());