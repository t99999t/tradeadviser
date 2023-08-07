import {useEffect, useState} from "react";
import {axiosPrivate} from "../api/axios";
import {useNavigate} from "react-router-dom";
import { Label } from "reactstrap";

function ResetPassword() {
    const [password,setPassword]=useState('')
    const [confirmPassword,setConfirmPassword]=useState('')
    const [error,setError]=useState('')
    let navigate=useNavigate()

    useEffect(() => {
        setPassword(password)
    },[password])

    useEffect(() => {
        setConfirmPassword(confirmPassword)
    },[confirmPassword])

    useEffect(() => {

        setError(error)


    },[error])

    async function handleResetPassword(e) {
        e.preventDefault();
       
       let res=    await axiosPrivate.post(
                'reset/password/auth', JSON.stringify({email:localStorage.getItem('email'), password: password})
            )
            console.log(res)
            if(res.status===200){
                localStorage.clear();
                navigate('/login', {replace: true})
            }
            else{
                setError(res.data.message)
            }
     }

    function handleGoback(e) {
        e.preventDefault();
        try {
            localStorage.clear();
            navigate('/login', {replace: true})
        }catch (e) {
            console.log(e);

        }

    }

    return (
        <section>
            <div className="row">
                <div className="col-md-12">
                    <h2>Reset Password</h2>
                    <p>{error}</p>
                  
                    <div className="form-group">

                        <Label>Email</Label>
                        <input type="email" className="form-control"
                        value={localStorage.getItem('email')} onChange={e => localStorage.setItem('email', e.target.value)}
                        />
                        <input type="password" className="form-control"
                               value={password} onChange={e => setPassword(e.target.value)}
                               name="password"
                               placeholder="New Password"
                               required />
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Confirm Password</label>
                                <input type="password" className="form-control"
                                       placeholder="Confirm Password"
                                       name={'confirmPassword'}
                                       value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}
                                       required />

                                       {
                                        password?!confirmPassword: 
                                        
                                        <div className="alert alert-danger">
                                            Password not match!
                                        </div>
                                       }


                            </div>
                        </div>
                    </div>

                    <div className="buttons">
                        <button type="button" className="btn btn-primary"
                                onClick={(e) => {
                                    handleResetPassword(e)
                                }}
                                disabled={
                            !password ||!confirmPassword
                                }>
                        Submit</button>
                    </div>
                    <div className="col-md-12">
                        <button type="button" className="btn btn-primaryKey" onClick={e=>handleGoback(e)}

                        >Login</button>
                    </div>
                  
                </div>
            </div>

            </section>
        
    )
                            
                            }
export default ResetPassword

