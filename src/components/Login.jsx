import { useEffect, useRef, useState } from 'react';
import useAuth from '../hooks/useAuth';
import { Link, redirect, useLocation, useNavigate } from 'react-router-dom';
import axios, { axiosPrivate } from '../api/axios';
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';
import Alert from'react-bootstrap/Alert';
import {Card}  from 'react-bootstrap';
import "./Login.css";

import {
    FacebookLoginButton,
    GithubLoginButton,
    GoogleLoginButton,
    LinkedInLoginButton
} from "react-social-login-buttons";

// This import required to gather the initial styles of the components
// You can do it while bootstrapping your app
const LOGIN_URL = '/login/auth';
function Login() {
    const { setAuth, persist, setPersist } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const userRef = useRef();
    const pwdRef = useRef();
    const errRef = useRef();
    const [username, setUsername] = useState('Username');
    const [password, setPwd] = useState('Password');

    const [errMsg, setErrMsg] = useState('');

    const togglePersist = () => {
        setPersist(prev => !prev);
    }


    useEffect(() => {
        userRef.current.focus();
    }, [userRef])

    async function newUrl(url, data) {
        // 👇️ redirect to external URL
        window.location.replace(url);
        return await axiosPrivate.get('url', JSON.stringify({ data }))

    }





    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!password || !username) {
                setErrMsg("Username and password are required");
                setTimeout(() => {
                    errRef.current.scrollIntoView({ behavior: 'smooth' })
                    window.location.reload();
                }, 500)
                return;
            }
            const response = await axios.post(LOGIN_URL, JSON.stringify({ username: username, password: password }),
                {
                    headers: {
                        'Content-Type':'application/json',//x-www-form-urlencoded ',
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
                        'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',

                    }, withCredentials: true
                })
            console.log(JSON.stringify(response?.data)); console.log(JSON.stringify(response.data));
            const accessToken = response?.data?.accessToken;

            setAuth({ accessToken: accessToken,
            role: response?.data?.role,id: response?.data?.id});
            navigate(from, { replace: true });
            console.log(JSON.stringify("data:" + response?.data));
            console.log(JSON.stringify(response));
            localStorage.setItem("id",
            response?.data?.id);
        

        } catch (err) {


            if (!err?.response) {
                setErrMsg('No server response received!');
                setTimeout(() => {

                    window.location.reload();
                }, 1000)
            } else if (err.response?.status === 400) {
                setErrMsg('Incorrect username or password!');

            } else if (err.response?.status === 401) {
                setErrMsg(
               err.response?.data?.message || 'Login Failed');
                setTimeout(() => {
                    errRef.current.scrollIntoView({ behavior:'smooth' })
                    window.location.reload();
                }, 500)

            } else if (err.response?.status === 403) {
                setErrMsg('Invalid Username or Password');
                setTimeout(() => {
                    errRef.current.scrollIntoView({ behavior:'smooth' })
                    window.location.reload();
                }, 500)

            }

            else {
                setErrMsg('Login Failed');

            }
        }
    }


    useEffect(() => {
        userRef.current.focus()
    }, [userRef]);

    useEffect(() => {

    }, [username]);
    useEffect(() => {

    }, [password]);

    useEffect(() => {

    }, [errMsg]);

    useEffect(() => {
        localStorage.setItem("persist", persist);
    }, [persist])

    return (<section className="login-section">



    <Form onSubmit={handleSubmit} className="login-form">
       <h2>Login            </h2>
<Alert variant="danger" ref={errRef} className={errMsg? "errMsg" : "offscreen"}
  aria-live="assertive">{errMsg}</Alert>
                        <div className="form-group">

                <input
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                    placeholder="Enter username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUsername(e.target.value)}
                />

                <input type="password"
                    id="password"
                    name="password"
                    placeholder="Enter  password"
                    ref={pwdRef}
                    onChange={(e) => setPwd(e.target.value)}
                    value={password}
                    autoComplete="off"
                />
            </div>
            <div className="e-input-container">

                <label htmlFor="persist">Remember Me?</label>
                <input type="checkbox"
                    id="persist"
                    onChange={
                        (e) => togglePersist

                    }
                    checked={persist} />
            </div>


                <Button className="btn btn-primary" type="button"
                    id="submit"
                    name="submit" onClick={(event) =>
                        handleSubmit(event)
                    }>                                     Login </Button>

            <div className="buttons">
                <div className="e-input-container">
                    <FacebookLoginButton
                        onClick={() => {
                            const resa = newUrl(
                                'https://www.facebook.com/sharer/sharer.php?u=' +
                                encodeURIComponent(username) +
                                '&p=' +
                                encodeURIComponent(password))
                            if (resa.status === 200) {
                                window.location.href = resa.url
                                setAuth(resa.data)
                                setErrMsg('authentication successful')
                                navigate('/', { replace: true })

                            } else {
                                console.log(resa.statusText)
                                setErrMsg(resa.statusText)
                                redirect(process.env.APP_CLIENT_REDIRECT_URL)
                            }
                        }}//https://github.com/login/oauth/authorize

                    ><span>Facebook</span>

                    </FacebookLoginButton >
                </div>

                <div className="e-input-container">
                    <LinkedInLoginButton
                        onClick={async () => {
                            //  https://www.linkedin.com/uas/oauth2/accessToken?grant_type=authorization_code&redirect_uri=*&client_id=*&client_secret=*&code=*
                            let accessToken = sessionStorage.getItem('token');
                            await newUrl(
                                'https://www.linkedin.com/uas/oauth2/' + accessToken + '?grant_type=authorization_code&redirect_uri=*&client_id=*&client_secret=*&code=*\n' +
                                '\n' +
                                ' '
                            ).then(
                                (res) => {
                                    window.location.href = res;
                                    axiosPrivate.post('https://www.linkedin.com/uas/login',
                                        { username: username, password: password },
                                        {
                                            'Accept': 'application/json',
                                            'Authorization': 'Bearer' + localStorage.getItem('accessToken')
                                        }
                                    ).then(res => {setAuth(res.data)})
                                    .catch(err => {
                                        console.error(err);
                                        if (err.code === '401') {
                                            alert('Access denied!')
                                            redirect(process.env.APP_CLIENT_REDIRECT_URL)
                                        } else { setErrMsg(err.statusText) }

                                    });

                                }
                            )
                        }}
                    ><span>LinkedIn</span>
                    </LinkedInLoginButton >

                    <div className="e-input-container">
                        <GoogleLoginButton
                            onClick={() => {
                                /*
   * Create form to request access token from Google's OAuth 2.0 server.
   */
                                function oauthSignIn() {
                                    // Google's OAuth 2.0 endpoint for requesting an access token
                                    let oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';

                                    // Create <form> element to submit parameters to OAuth 2.0 endpoint.
                                    let form = document.createElement('form');
                                    form.setAttribute('method', 'GET'); // Send as a GET request.
                                    form.setAttribute('action', oauth2Endpoint);
                                    // Parameters to pass to OAuth 2.0 endpoint.
                                    let params = {
                                        'client_id': '539426084783-04acj5fsjirf3a9gjk9p573pj94ssklm.apps.googleusercontent.com',
                                        'redirect_uri': 'https://localhost:3000',
                                     
                                      //'scope': 'https://www.googleapis.com/auth/userinfo.email',
                                      
                                        'response_type': 'token',
                                        'scope': 'https://www.googleapis.com/auth/drive.metadata.readonly',
                                        'include_granted_scopes': 'true',
                                        'state': 'pass-through value'
                                    };

                                    // Add form parameters as hidden input values.
                                    for (let p in params) {
                                        let input = document.createElement('input');
                                        input.setAttribute('type', 'hidden');
                                        input.setAttribute('name', p);
                                        input.setAttribute('value', params[p]);
                                        form.appendChild(input);
                                    }

                                    // Add form to page and submit it to open the OAuth 2.0 endpoint.
                                    document.body.appendChild(form);
                                    form.submit();
                                }

                                return oauthSignIn()
                                //  console.log('Google auth2.0 successfully')
                            }}
                        ><span>Google</span>
                        </GoogleLoginButton >
                    </div>
                    <div className="e-input-container">
                        <GithubLoginButton
                            onClick={
                                async () => {
                                
                                    const resa4 =
                                    newUrl('http://github.com/login/oauth/authorize?client_id=906b7888f82f9f1301b7& redirect_uri=http://localhost:3000&response_type=code&scope = user:email& state=pass-through value& code=234')
                                    if (resa4.status === 200) {
                                        window.location.href = resa4.url
                                        setAuth(resa4.status.data)
                                        setErrMsg('authentication successful')
                                        navigate('/', { replace: true })
                                        console.log('GitHup login success: ' + resa4.data)

                                    } else {
                                        console.log(resa4.statusText)
                                        setErrMsg(resa4.statusText)
                                        redirect(process.env.APP_CLIENT_REDIRECT_URL)
                                    }
                                }}//https://github.com/login/oauth/authorize
                        /></div>
                </div>
            </div>
            <div className="e-create-link">
                <div className="e-input-container">
                    <Link to="/forgot/password"
                        className="forgot-password"><i>Forgot password?</i>Click Here!</Link>
                </div>
                <div className="e-input-container">
                    <Button onClick={e => {
                        e.preventDefault();
                        window.location.replace('/register')
                    }
                    }>                          Create New Account</Button>
               </div>
 </div>
 </Form>


</section>
    )

}

export default Login