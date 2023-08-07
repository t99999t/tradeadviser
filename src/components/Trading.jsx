import { Container, TabContainer,TabPane,Tabs ,
    TabPaneProps,TabProps} from "react-bootstrap";

import Card from "react-bootstrap/Card";




function Trading(){
    return(<Container>
   <div className="row">
    <div className="col-md-12">

    <Card>
        <Card.Body>
            <Card.Title>Trading</Card.Title>
            <TabContainer>
             
            <Card.Text>
                <p>Trading is the process of getting your money back to your bank account.</p>
            </Card.Text>
            <Charts/>

        </Card.Body>
    </Card>
    </div>
    </div>

    </Container>)
}

export default Trading;