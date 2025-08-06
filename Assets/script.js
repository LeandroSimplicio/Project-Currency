const convertButton = document.querySelector(".btn-convert");
const currencySelect = document.querySelector(".select-currency");
const currencyFromSelect = document.querySelector(".select-currency-container");

const currencyName = document.getElementById("currency-name");
const currencyImage = document.querySelector(".currency-image");
const currencyImageFrom = document.querySelector(".currency-image-from");
const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
const currencyValueConverted = document.querySelector(".currency-value");

const currencyRates = {
  dolar: { rate: 5.4, name: "Dólar Americano", img: "./Assets/img/usa.png", symbol: "US$" },
  euro: { rate: 6.2, name: "Euro", img: "./Assets/img/euro.png", symbol: "€" },
  libra: { rate: 7.1, name: "Libra", img: "./Assets/img/libra.png", symbol: "£" },
  bitcoin: { rate: 300000, name: "Bitcoin", img: "./Assets/img/bitcoin.png", symbol: "₿" },
  real: { rate: 1, name: "Real Brasileiro", img: "./Assets/img/real.png", symbol: "R$" }
};

function updateAllCurrencyInfo() {
  const toCurrency = currencySelect.value;
  const fromCurrency = currencyFromSelect.value;

  // Atualiza moeda de destino
  currencyName.innerHTML = currencyRates[toCurrency].name;
  currencyImage.src = currencyRates[toCurrency].img;

  // Atualiza moeda de origem
  currencyImageFrom.src = currencyRates[fromCurrency].img;
}

function convertCurrency() {
  const inputValue = parseFloat(document.querySelector(".input-currency").value);
  const fromCurrency = currencyFromSelect.value;
  const toCurrency = currencySelect.value;

  if (isNaN(inputValue)) {
    alert("Por favor, digite um valor válido.");
    return;
  }

  const fromRate = currencyRates[fromCurrency].rate;
  const toRate = currencyRates[toCurrency].rate;

  const convertedValue = (inputValue * fromRate) / toRate;

  currencyValueToConvert.innerHTML = `${currencyRates[fromCurrency].symbol} ${inputValue.toFixed(2)}`;
  currencyValueConverted.innerHTML = `${currencyRates[toCurrency].symbol} ${convertedValue.toFixed(2)}`;
}

currencySelect.addEventListener("change", updateAllCurrencyInfo);
currencyFromSelect.addEventListener("change", updateAllCurrencyInfo);
convertButton.addEventListener("click", convertCurrency);
