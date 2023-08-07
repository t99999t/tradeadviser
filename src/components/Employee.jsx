
import Container from'react-bootstrap/Container';
function Employee(){


    return(<Container>
    
        <div className="row">
            <div className="col-md-12">
        <h1>Employee</h1>
                <p>
                    <b>Employee Name:</b>
                    <input type="text" className="form-control" placeholder="Enter Employee Name" />
                    <br />
                    <b>Employee ID:</b>
                    <input type="text" className="form-control" placeholder="Enter Employee ID" />
                    <br />
                    <b>Employee Email:</b>
                    <input type="text" className="form-control" placeholder="Enter Employee Email" />
                    <br />
                    <b>Employee Phone:</b>
                    <input type="text" className="form-control" placeholder="Enter Employee Phone" />
                    <br />
                    <b>Employee Address:</b>
                    <input type="text" className="form-control" placeholder="Enter Employee Address" />
                    <br />
                    <b>Employee Salary:</b>
                    <input type="text" className="form-control" placeholder="Enter Employee Salary" />
                    <br />
                    <b>Employee Department:</b>
                    <input type="text" className="form-control" placeholder="Enter Employee Department" />
                    <br />
                    <b>Employee Role:</b>
                    <input type="text" className="form-control" placeholder="Enter Employee Role" />
                    <br />

                </p>

 
        </div>
    </div>

    </Container>)
}export default Employee