import React, { useEffect,useState} from 'react';
import CandlestickChart from  '../components/CandlestickChart'


const ChartWidget = ({ exchange }) => {
  useEffect(() => {
    // Additional logic for fetching market data from the selected exchange (e.g., using Oanda API)
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data);
      }).catch(err => {
      console.log(err);})
  }, [exchange]);



    let url = "https://api-fxtrade.oanda.com/v2/instruments/EURUSD"


const [symbol, setSymbol] = useState('');

  useEffect(() => {
  setSymbol(exchange.symbol)
  }, [exchange.symbol]);


    const data = [
      // Add your candlestick data here, with properties like date, open, high, low, close, volume, etc.
      // Example:
      { date: new Date('2023-08-05'), open: 250, high: 270, low: 240, close: 260, volume: 1000 },
      // Add more data points as needed
    ];

    return (
      <div>
        <h1>Candlestick Chart</h1>
        <CandlestickChart />
      </div>
    );
  }
    export default ChartWidget;
