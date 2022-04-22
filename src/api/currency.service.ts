const cryptoURL = 'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD';

export const getETHToUSDCurrency = async () => {
  const response = await fetch(cryptoURL, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
  });
  return response;
};
