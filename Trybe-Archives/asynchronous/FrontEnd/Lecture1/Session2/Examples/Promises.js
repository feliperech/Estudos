const generateNumber = () => Math.round(Math.random() * 10);


/* const resolvedPromise = () =>
    new Promise ((resolve,reject) => {
        setTimeout(() => {
            const randomNumber = generateNumber();
            resolve(randomNumber); //mesmo parametro da resolvedPromise.then
        }, 1000);
    });

const rejectPromise = () => 
    new Promise ((resolve, reject) => {
        setTimeout(() => {
            reject(new Error(`O valor não pôde ser gerado!`));
        }, 1000);
    });

resolvedPromise().then((response) => { //.then recebe um parâmetro igual ao passado no resolve.
    console.log(`O valor gerado aleatoriamente é: ${response}`);
}); 

rejectPromise()
    .then((response) => { //.then recebe um parâmetro igual ao passado no resolve.
        console.log(`O valor gerado aleatoriamente é: ${response}`);
    })
    .catch((error) => { //.catch também recebe exatamente o valor do reject.
        console.log(error.message); //Exibe o valor de error!
    });  */

conditionalPromise = () =>
    new Promise ((resolve, reject) => {
        setTimeout(() => {
            const numberAvailable = generateNumber();

            if (numberAvailable % 2 === 0) {
                resolve(numberAvailable);
            } else {
                reject(new Error (`O número gerado não é valido!`));
            }
        }, 1000);
    });


conditionalPromise()
    .then ((response) => {
        console.log(`o valor recebido é: ${response} `);
    })
    .catch ((error) => {
        console.log(error.message);
    });