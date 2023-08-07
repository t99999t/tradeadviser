
import Container from "react-bootstrap/Container"
import Card from "react-bootstrap/Card"
import Table from "react-bootstrap/Table"
function Account(){
    return(
        <Container><div className="account">
            <div className="account-header">
                <h1>Account</h1>
            </div>
            <div className="account-body">
                <div className="account-info">
                    <div className="account-info-left">
<Card className="account-info-card">
    <Card.Body>
                        <Table>
                            <thead>
                                <tr>Account ID :</tr>
                                <tr>Account Username :</tr>
                        
                                <tr>Account Balance :</tr>
                                <tr>Account Type :</tr>
                                <tr>Account Status :</tr>
                                <tr>Action</tr>
                                

                                

                            </thead>
                        </Table>
                        </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
            <div className="account-footer">

            </div>
     </div>

        </Container>
    )
}

export default Account;