// CandlestickChart.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ApexCharts from 'react-apexcharts';

const CandlestickChart = () => {
  const [chartData, setChartData] = useState({
    series: [],
    options: {
      chart: {
        type: 'candlestick',
        height: 400,
      },
      xaxis: {
        type: 'datetime',
      },
      yaxis: {
        tooltip: {
          enabled: true,
        },
      },
    },
  });

  useEffect(() => {
    // Replace YOUR_API_KEY with your actual Binance.US API key
    const apiKey = process.env.BINANCE_US_API_KEY
    const symbol = 'BTCUSD'; // Replace with the desired trading pair (e.g., BTCUSD, ETHUSD, etc.)

    axios
      .get(`https://api.binance.us/api/v3/klines`, {
        params: {
          symbol,
          interval: '1d', // Daily candlestick data
        },
        headers: {
          'X-MBX-APIKEY': apiKey,
        },
      })
      .then((response) => {
        const seriesData = response.data.map((item) => ({
          x: new Date(item[0]),
          y: [Number(item[1]), Number(item[2]), Number(item[3]), Number(item[4])],
        }));

        setChartData((prevState) => ({
          ...prevState,
          series: [{ data: seriesData }],
        }));
      })
      .catch((error) => {
        console.error('Error fetching data from Binance.US API:', error);
      });
  }, []);

  return (
    <div>
      <ApexCharts options={chartData.options} series={chartData.series} type="candlestick" height={400} />
    </div>
  );
};

export default CandlestickChart;