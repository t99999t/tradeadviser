import React, { useState } from 'react';

const ExchangeSelector = ({ onSelectExchange }) => {
  const [selectedExchange, setSelectedExchange] = useState('');

  const handleExchangeChange = (e) => {
    setSelectedExchange(e.target.value);
  };

  const handleSelectExchange = () => {
    // Perform any additional logic related to exchange selection
    onSelectExchange(selectedExchange);
  };

  return (
    <div>
      <select value={selectedExchange} onChange={handleExchangeChange}>
        <option value="">Select an exchange</option>
        <option value="oanda">Oanda</option>
        <option value="binance">Binance</option>
        <option value="bitfinex">Bitfinex</option>
        <option value="bitstamp">Bitstamp</option>
        <option value="binanceus">Binance Us</option>
        <option value="coinbase">Coinbase</option>
        {/* Add other exchanges as needed */}
      </select>
      <button onClick={handleSelectExchange}>Select Exchange</button>
    </div>
  );
};

export default ExchangeSelector;