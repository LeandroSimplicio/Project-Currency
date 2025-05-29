const convertButton = document.querySelector(".btn-convert");

 

function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-currency").value;

  const currencyValueToConvert = document.querySelector(".currency-value-to-convert"); //Pega o valor a ser convertido
  const currencyValueToConverted = document.querySelector(".currency-value"); // pega o valor convertido

  
  
  const dolarToDay = 5.2
  cosnt euroToDay = 6.2 // Valores fictícios para a cotação do dólar e euro, você pode substituir por uma API real
  // ;

  const convertedValue = inputCurrencyValue / dolarToDay;

  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(inputCurrencyValue);
  // Formata o valor a ser convertido para o formato de moeda brasileiro

  currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(convertedValue);
  // Formata o valor convertido para o formato de moeda americana

  

}

convertButton.addEventListener("click", convertValues);

