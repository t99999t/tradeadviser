import { faExchange } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Table from'react-bootstrap/Table';
 function ExChanges(){
    return(
    <div className="exchanges">
            <h1>Exchanges</h1>
            <div className="exchanges__container">
                <div className="exchanges__item">
                    Exchages List
                </div>
                <Table className="exchanges__table">
                    <thead>
                        <tr>
                            <th>Exchanges </th>
                        </tr>
                    </thead>
                    <tbody>
                        <th scope="row">
                            <FontAwesomeIcon icon={faExchange} />
                            <span className="exchanges__item-name">
                                Binance Us
                            </span>
                            </th>
                            <th scope="row">
                                <FontAwesomeIcon icon={faExchange} />
                                <span className="exchanges__item-name">
                                    Coinbase Pro
                                </span>
                            </th>

                    </tbody>
                

                    
                    </Table>
                </div>

    </div>)
}

export default ExChanges;