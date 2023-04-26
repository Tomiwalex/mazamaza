export async function convertCurrency(baseCurrency, price) {
  // Get the user's location
  const response = await fetch("https://ipapi.co/json/");
  const { currency } = await response.json();

  // Get the exchange rate for the base currency and the user's local currency
  const response2 = await fetch(
    `https://api.exchangeratesapi.io/latest?base=${baseCurrency}&symbols=${currency}`
  );
  const { rates } = await response2.json();

  console.log(response2, currency);

  if (baseCurrency == currency) {
    return `${currency} ${price}`;
  } else {
    // Convert the price to the user's local currency
    const localPrice = price * rates[currency];

    // Format the price with currency symbol
    const formatter = new Intl.NumberFormat(undefined, {
      style: "currency",
      currency: currency,
    });
    const formattedPrice = `${currency} ${formatter.format(localPrice)}`;

    return formattedPrice;
  }
}
