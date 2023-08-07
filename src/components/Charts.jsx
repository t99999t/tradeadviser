
import {useState} from 'react'
import ExchangeSelector from '../components/ExchangeSelector'
import ChartWidget from '../components/ChartWidget'
function Charts() {
  const [selectedExchange, setSelectedExchange] = useState('');

  const handleSelectExchange = (exchange) => {
    setSelectedExchange(exchange);
  };

  return (
    <div>
      <p>Exchange </p>
      <ExchangeSelector onSelectExchange={handleSelectExchange} />
      {selectedExchange && <ChartWidget exchange={selectedExchange} />}
    </div>)
}

export default Charts



