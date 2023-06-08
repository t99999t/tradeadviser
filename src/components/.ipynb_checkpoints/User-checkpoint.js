function User(props) {

    return (
        <div className="container">
                <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">
                                    Welcome user :{
                                    props.username
                                }<i className="fas fa-user"></i>
                                </h3>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-6">
                                        <p>Here is your data</p>
                                        {props.email
                                        }
                                    </div>
                                </div>
                            </div>
                </div>
            </div>

    );
}


export default User;