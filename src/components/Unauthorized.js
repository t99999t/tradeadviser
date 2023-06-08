import {useNavigate} from "react-router-dom"
import {Container} from "react-bootstrap"

import Card from "react-bootstrap/Card"
const Unauthorized = () => {
    const navigate = useNavigate();
    function goBack  (e) {e.preventDefault();navigate(-1, {replace: true})}
    return (<Container >
        <Card>
            <Card.Body>
            <div className="flexGrow">
                <div className="row">
                    <div className="col-12">
                        <h2>Unauthorized</h2>
                        <p>  You are not authorized to navigate to this content!</p>
                           <div className="col-md-4">
                            <div className="box">
                                <button type="button" className="btn btn-primary" onClick={e => goBack(e)}>Back</button>
                            </div>
                           </div>
                    </div>
                </div>
            </div>
            </Card.Body>
        </Card>
        </Container>
              )
}

export default Unauthorized
