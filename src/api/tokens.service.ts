import { AxiosError, AxiosResponse } from 'axios';
import api from './xhr';

const TOKEN_DATA_URL = '/app/chart';

// Generate mock candlestick data for the chart
const generateMockCandlestickData = (range: string) => {
  const now = Date.now();
  let interval: number;
  let dataPoints: number;

  // Determine interval and data points based on range
  switch (range) {
    case '1m':
      interval = 60 * 1000; // 1 minute
      dataPoints = 60; // 1 hour of data
      break;
    case '5m':
      interval = 5 * 60 * 1000; // 5 minutes
      dataPoints = 72; // 6 hours of data
      break;
    case '30m':
      interval = 30 * 60 * 1000; // 30 minutes
      dataPoints = 48; // 24 hours of data
      break;
    case '1h':
      interval = 60 * 60 * 1000; // 1 hour
      dataPoints = 168; // 1 week of data
      break;
    case '4h':
      interval = 4 * 60 * 60 * 1000; // 4 hours
      dataPoints = 168; // 4 weeks of data
      break;
    case '1d':
      interval = 24 * 60 * 60 * 1000; // 1 day
      dataPoints = 90; // 3 months of data
      break;
    default:
      interval = 5 * 60 * 1000;
      dataPoints = 72;
  }

  const data: { x: Date; y: [number, number, number, number] }[] = [];
  let basePrice = 0.015; // Starting price

  for (let i = dataPoints - 1; i >= 0; i--) {
    const timestamp = now - i * interval;

    // Generate realistic price movement with some volatility
    const change = (Math.random() - 0.5) * 0.002; // ±0.1% change
    basePrice = Math.max(0.01, basePrice + change); // Ensure price doesn't go below 0.01

    // Generate OHLC (Open, High, Low, Close) values
    const open = basePrice;
    const volatility = basePrice * 0.02; // 2% volatility
    const high = open + Math.random() * volatility;
    const low = open - Math.random() * volatility;
    const close = low + Math.random() * (high - low);

    data.push({
      x: new Date(timestamp),
      y: [
        Number(open.toFixed(6)),
        Number(high.toFixed(6)),
        Number(low.toFixed(6)),
        Number(close.toFixed(6)),
      ],
    });

    basePrice = close; // Next candle opens at previous close
  }

  return data;
};

// Network requests disabled - returns mock response with realistic candlestick data
export const tokenDataRequest = (range: string) =>
  Promise.resolve({
    status: 200,
    response: generateMockCandlestickData(range),
  } as any);
