function Exchange(){
    var self = this;
    self.exchange = {};
    self.exchange.name = "Bittrex";
    self.exchange.ticker = "BTC";
    self.exchange.rate = "USD";
    self.exchange.currency = "USD";
}

export default 
  {
    Exchange: Exchange
  }
