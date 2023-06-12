import Button from "react-bootstrap/Button";

import Container from "react-bootstrap/Container";

import Card from "react-bootstrap/Card";

export default Contact
function Contact(options) {
    return (
        <Container>

            <div class="row">
                <div class="col-md-12">
                    <Card>
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">TradeAdviser Contact</h3>
                            <h4 class="card-subtitle">Contact Infos</h4>
                            <div class="card-contents">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label>Name</label>
                                            <p>
                                                {options.name} email

                                            </p>
                                            <p>
                                                {options.email}
                                            </p>
                                            <p>
                                                {
                                                    options.phone
                                                }
                                            </p>
                                   








                                        </div>
                                    </div>
                            
                                </div>

                                </div>   
                        </div>

                        </div></Card>
                </div>
            </div>


       </Container> )














}