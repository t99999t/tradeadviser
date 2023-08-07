
import {axiosPrivate} from "../api/axios";
import {useEffect, useRef, useState} from "react";

import {useNavigate} from "react-router-dom";
import Alert from "react-bootstrap/Alert";

function ForgotPassword() {

    const [email, setEmail] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const errRef = useRef();
    const navigate = useNavigate();
    useEffect(() => {

        setEmail(email);

    }, [email]);

    useEffect(() => {
        if (errRef) {
            errRef.current.focus()
        }
    }, [errRef])
    useEffect(() => {

        setErrMsg(errMsg)
    }, [errMsg])

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            if (!email) {
                setErrMsg('Please enter your email\nCurrent value received ' + email);
                return;
            }
            const r = await axiosPrivate.post('/forgot/password/auth',
                JSON.stringify({email:email}))

            if (r.status === 200) {

                localStorage.setItem('email', email);
                setErrMsg(

                        "We 've send you a new reset password link to your email address .\nPlease follow the link to reset your password!"
            )// successfully  reset password Forgotten
                    setTimeout(
                    () => {
                        errRef.current.focus();
                        navigate(-1)

                    }, 5000
                )
            } 
            
        }catch (error) {
            console.log(error);
            
            if (error.status === 400) {
                setErrMsg(
                    'Please enter a valid email address\nCurrent value received'+ email
                );
                setTimeout(
                    () => {
                        errRef.current.focus();
                    }, 1000
                )
            }else{
            setErrMsg(error.response.data.message);
            setTimeout(
                () => {
                    errRef.current.focus();
                }, 1000
            )}
        }

    }


    function handleGoback(e) {
        e.preventDefault();
        navigate(-1);

    }

    function handleChange(e) {
        e.preventDefault();
        return setEmail(e.target.value);

    }

    return (
        <section>
        <div className="row">
        <div className="col-md-12">
<h4>Forgot Password </h4>
                 <Alert variant="danger" onClose={() => setErrMsg('')}>
                    {errMsg}
                    </Alert>
                    <div className="form-group">
                        <label htmlFor={'email'} id={'email'}>Email :</label>
                        <input type="text" id="email"
                               name="email"
                               placeholder="Enter email address"
                               autoComplete={'on'}
                               value={email}
                               ref={errRef}
                               onChange={(e) => handleChange(e)}/>
                        <div className="flexGrow">
    
                            <div className="e-combobox">
                            <button type="button" className="btn btn-primary"
                                    disabled={!email}
                                    onClick={(e) => handleSubmit(e)}>Submit
                            </button>

                        </div>


                        <div className="button">
                            <button type="button" className="btn btn-primary"

                                    onClick={(e) => handleGoback(e)}>Go Back
                            </button>
                        </div>
                        </div>
                    </div>
                    </div>
                    </div>
                    
                
              
                  
        </section>

    )

}

export default ForgotPassword