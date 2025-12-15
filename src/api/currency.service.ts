// Network requests disabled - returning mock response
export const getETHToUSDCurrency = async () => {
  // Return a mock Response-like object
  return {
    ok: true,
    status: 200,
    json: async () => ({
      ok: true,
      Data: {
        Data: [
          { close: 0 },
          { close: 2500 }, // Mock ETH price
        ],
      },
    }),
  } as Response;
};
