const convertButton = document.querySelector(".btn-convert");
const currencySelect = document.querySelector(".select-currency");
const inputCurrency = document.querySelector(".input-currency");
const currencySelectContainer = document.querySelector(".select-currency-container");

function convertCurrency() {
  const inputCurrencyValue = parseFloat(inputCurrency.value) || 0;
  const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
  const currencyValueToConverted = document.querySelector(".currency-value");

  const dolarValue = 5.4;
  const euroValue = 6.0;
  const bitcoinValue = 300.0;
  const libraValue = 7.0;

  let convertedValue;
  let formattedConverted;

  if (currencySelect.value == "dolar") {
    convertedValue = inputCurrencyValue / dolarValue;
    formattedConverted = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(convertedValue);
  } else if (currencySelect.value == "euro") {
    convertedValue = inputCurrencyValue / euroValue;
    formattedConverted = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(convertedValue);
  } else if (currencySelect.value == "bitcoin") {
    convertedValue = inputCurrencyValue / bitcoinValue;
    formattedConverted = convertedValue.toFixed(6) + " BTC";  // ou outro formato que preferir
  } else if (currencySelect.value == "libra") {
    convertedValue = inputCurrencyValue / libraValue;
    formattedConverted = new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(convertedValue);
  } else {
    formattedConverted = inputCurrencyValue.toFixed(2);
  }

  currencyValueToConverted.innerHTML = formattedConverted;

  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValue);
}

function changeCurrency() {
  const currencyName = document.getElementById("currency-name");  // ou querySelector(".currency-name")
  const currencyImage = document.querySelector(".currency-image");

  if (currencySelect.value == "dolar") {
    currencyName.innerHTML = "Dólar";
    currencyImage.src = "./Assets/img/usa.png";
  } else if (currencySelect.value == "euro") {
    currencyName.innerHTML = "Euro";
    currencyImage.src = "./Assets/img/euro.png";
  } else if (currencySelect.value == "bitcoin") {
    currencyName.innerHTML = "Bitcoin";
    currencyImage.src = "./Assets/img/bitcoin.png";
  } else if (currencySelect.value == "libra") {
    currencyName.innerHTML = "Libra";
    currencyImage.src = "./Assets/img/libra.png";
  } else {
    currencyName.innerHTML = "Real";
    currencyImage.src = "./Assets/img/real.png";
  }

  convertCurrency();
}

currencySelect.addEventListener("change", changeCurrency);
inputCurrency.addEventListener("input", convertCurrency);
convertButton.addEventListener("click", convertCurrency);
