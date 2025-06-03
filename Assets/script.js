const convertButton = document.querySelector('.btn-convert');

function convertCurrency() {
    const inputCurrency = document.querySelector('.input-currency').value;

    const dolartoDay = 5.25; // Example exchange rate for USD to BRL

    const convertedValue =  inputCurrency / dolartoDay;
}

convertButton.addEventListener("click", convertCurrency);
