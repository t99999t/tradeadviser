# TradeAdviser Helm Chart  
          
       https://tradeadviser.org

## Licensed under the Apache License 
## Version 2.0 

## You may not use this file except in compliance with the License.

 ###  Installation
       - Requires helm
       - command line arguments
              helm --upgrade --install tradeadviser
  ### Dependencies
   - Values from the chart sourcesContent filed in the chart directoryPath values.yml
   - Services provided by the chart sourcesContent
   - Ingress  chart
#### Ports
     - Port numbers are specified in the chart directoryPath values.yml
      internal port number is 3000
