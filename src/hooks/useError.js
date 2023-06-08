
function useError(props){
    return(<instructions>
<div className="container">
    <div className="row">
        <div className="col-md-12">
            <div className="row">
                <div className="col-md-12">
                    <div className="alert alert-danger" role="alert">
                        {props.message?setTimeout(props.message, 3000): props.message

                        }
                        <span className="alert-message">{props.message}</span>

                        <span className="alert-icon">Alert</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

    </instructions>)








}
export default useError