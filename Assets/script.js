const convertButton = document.querySelector(".btn-convert");
const currencySelectTo = document.querySelector(".select-currency");
const currencySelectFrom = document.querySelector(".select-currency-container");
const inputCurrency = document.querySelector(".input-currency");

const currencyNameTo = document.querySelector("#currency-name");
const currencyValue = document.querySelector(".currency-value");
const currencyValueToConvert = document.querySelector(
  ".currency-value-to-convert"
);

const imageTo = document.querySelector(".currency-image");
const imageFrom = document.querySelector(".result img");

const nameFrom = document.querySelector(".result .currency"); // Nome da moeda origem

// Mapeamento para nomes e imagens
const currencyData = {
  real: { name: "Real Brasileiro", image: "Assets/img/real.png", code: "BRL" },
  dolar: { name: "Dólar Americano", image: "Assets/img/usa.png", code: "USD" },
  euro: { name: "Euro", image: "Assets/img/euro.png", code: "EUR" },
  libra: {
    name: "Libra Esterlina",
    image: "Assets/img/libra.png",
    code: "GBP",
  },
  bitcoin: { name: "Bitcoin", image: "Assets/img/bitcoin.png", code: "BTC" },
};

// Função principal de conversão
async function convertValues() {
  const fromCurrency = currencySelectFrom.value;
  const toCurrency = currencySelectTo.value;
  const amount = parseFloat(inputCurrency.value);

  if (!amount || isNaN(amount)) {
    alert("Digite um valor válido!");
    return;
  }

  // Monta o par corretamente (ex: BRL-USD)
  const pair = `${currencyData[fromCurrency].code}-${currencyData[toCurrency].code}`;

  try {
    const response = await fetch(
      `https://economia.awesomeapi.com.br/last/${pair}`
    );
    const data = await response.json();
    const rateKey = `${currencyData[fromCurrency].code}${currencyData[toCurrency].code}`;
    const rate = parseFloat(data[rateKey].bid);

    // Faz a conversão corretamente
    const converted = amount * rate;

    // Atualiza valores na tela
    currencyValueToConvert.textContent = formatCurrency(amount, fromCurrency);
    currencyValue.textContent = formatCurrency(converted, toCurrency);
  } catch (error) {
    console.error("Erro ao buscar taxa de câmbio:", error);
    alert("Erro ao buscar taxa de câmbio. Tente novamente.");
  }
}

// Formatação com base na moeda
function formatCurrency(value, currency) {
  const locales = {
    real: "pt-BR",
    dolar: "en-US",
    euro: "de-DE",
    libra: "en-GB",
    bitcoin: "en-US",
  };

  const symbols = {
    real: "BRL",
    dolar: "USD",
    euro: "EUR",
    libra: "GBP",
    bitcoin: "BTC",
  };

  if (currency === "bitcoin") {
    return `₿ ${value.toFixed(6)}`;
  }

  return value.toLocaleString(locales[currency], {
    style: "currency",
    currency: symbols[currency],
  });
}

// Atualiza nomes e imagens das moedas
function updateCurrencyVisuals() {
  const fromCurrency = currencySelectFrom.value;
  const toCurrency = currencySelectTo.value;

  nameFrom.textContent = currencyData[fromCurrency].name;
  imageFrom.src = currencyData[fromCurrency].image;

  currencyNameTo.textContent = currencyData[toCurrency].name;
  imageTo.src = currencyData[toCurrency].image;
}

// Eventos
currencySelectFrom.addEventListener("change", () => {
  updateCurrencyVisuals();
  convertValues();
});

currencySelectTo.addEventListener("change", () => {
  updateCurrencyVisuals();
  convertValues();
});
convertButton.addEventListener("click", () => {
  updateCurrencyVisuals();
  convertValues();
});
