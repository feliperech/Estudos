const inputCEP = document.querySelector('input');
const stateButton = document.querySelector('button');

stateButton.addEventListener('click', async () => {
   const textInput = inputCEP.value;
   try{
        const urlAPI = `https://viacep.com.br/ws/${textInput}/json/`;
        const response = await fetch(urlAPI);
        const data = await response.json();
        document.querySelector('h2').innerHTML = JSON.stringify(data);
        return data;
    } catch (error) {
        return error.message;        
    }
});
