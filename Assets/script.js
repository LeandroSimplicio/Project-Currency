const currencyFromSelect = document.querySelector(".select-currency-container");
const currencySelect = document.querySelector(".select-currency");
const convertButton = document.querySelector(".btn-convert");
const inputCurrency = document.querySelector(".input-currency");

const currencyName = document.getElementById("currency-name");
const currencyImage = document.querySelector(".currency-image");

const currencyImageFrom = document.querySelector(".currency-image-from");
const currencyNameFrom = document.getElementById("currency-name-from");

const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
const currencyValue = document.querySelector(".currency-value");

const currencyRates = {
  real: {
    name: "Real Brasileiro",
    img: "./Assets/img/real.png",
    rate: 1,
    symbol: "R$",
  },
  dolar: {
    name: "Dólar Americano",
    img: "./Assets/img/usa.png",
    rate: 5.00,
    symbol: "US$",
  },
  euro: {
    name: "Euro",
    img: "./Assets/img/euro.png",
    rate: 5.50,
    symbol: "€",
  },
  libra: {
    name: "Libra",
    img: "./Assets/img/libra.png",
    rate: 6.40,
    symbol: "£",
  },
  bitcoin: {
    name: "Bitcoin",
    img: "./Assets/img/bitcoin.png",
    rate: 300000.00,
    symbol: "₿",
  },
};

function convertCurrency() {
  const fromCurrency = currencyFromSelect.value;
  const toCurrency = currencySelect.value;
  const amount = parseFloat(inputCurrency.value);

  if (isNaN(amount)) {
    alert("Digite um valor válido para conversão.");
    return;
  }

  const fromRate = currencyRates[fromCurrency].rate;
  const toRate = currencyRates[toCurrency].rate;

  const convertedValue = (amount * fromRate) / toRate;

  currencyValueToConvert.innerHTML = `${currencyRates[fromCurrency].symbol} ${amount.toFixed(2)}`;
  currencyValue.innerHTML = `${currencyRates[toCurrency].symbol} ${convertedValue.toFixed(2)}`;
}

function updateAllCurrencyInfo() {
  const toCurrency = currencySelect.value;
  const fromCurrency = currencyFromSelect.value;

  // Atualiza destino
  currencyName.innerHTML = currencyRates[toCurrency].name;
  currencyImage.src = currencyRates[toCurrency].img;

  // Atualiza origem
  currencyNameFrom.innerHTML = currencyRates[fromCurrency].name;
  currencyImageFrom.src = currencyRates[fromCurrency].img;
}

currencyFromSelect.addEventListener("change", updateAllCurrencyInfo);
currencySelect.addEventListener("change", updateAllCurrencyInfo);
currencyFromSelect.addEventListener("change", updateAllCurrencyInfo);
convertButton.addEventListener("click", convertCurrency);

// Iniciar com info correta
updateAllCurrencyInfo();
