import React, { useState, useEffect } from'react';

import axios from 'axios';


function Payments() {

    const [payments, setPayments] = useState([

    ]);
    
    useEffect(() => {
        axios.get('http://localhost:3000/payments')
        .then(response => {
            setPayments(response.data);
        }).catch(error => {
            console.log(error);
            console.log(error.response)},[payments])});

  
    return(<>
    <div className="container">
        <div className="row">
            <div className="col-md-12">

                <h2>Payment</h2>
                <div className="row">
                    
                    <p>
                        Payments will be sent to your bank account.
                    </p>
                    {
                        this.state.payments.map((payment, index) => {
                            return (
                                <div className="col-md-4" key={index}>
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">{payment.name}</h5>
                                            
                                            <p className="card-text"></p>
                                            
                                            <div className="row">
                                                
                                                <div className="col-md-6">
                                                        </div>
                                                        </div></div>
                                                        </div></div>)})
                    }
                </div>

            </div>
        </div>
    </div>
    </>)
}
export default Payments;