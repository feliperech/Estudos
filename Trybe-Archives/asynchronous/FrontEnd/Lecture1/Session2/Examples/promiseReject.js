const generatorNumber = () => Math.floor(Math.random() * 10);


const rejectPromise = () =>
    new Promise((resolve,reject) => {
        setTimeout(() => {
            const randNumber = generatorNumber();
            reject(new Error (`O número ${randNumber} foi rejeitado!`));
        }, 1000);
    });