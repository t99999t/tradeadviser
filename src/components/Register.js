//@flow

import {useEffect, useRef, useState} from "react";
import {faCheck, faInfoCircle, faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from '../api/axios';
import {useNavigate} from "react-router-dom";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const LASTNAME_REGEX = /^[A-z]/;
const FIRSTNAME_REGEX = /^[A-z]/;
const MIDDLE_REGEX = /^[A-z]/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = 'register/auth';
const options = ['female', 'male', 'other']

const Register = () => {

    const navigate = useNavigate();
    const emailRef = useRef();
    const lastNameRef = useRef();
    const middleNameRef = useRef();
    const firstNameRef = useRef();
    const pwdRef = useRef();
    const pwdConfirmRef = useRef();
    const birthdayRef = useRef();
    const [username, setUsername] = useState('');
    const userRef = useRef();
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [password, setPassword] = useState('');

    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('')

    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('');
    const [middlename, setMiddleName] = useState('');

    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);
    const [phoneFocus, setPhoneFocus] = useState(false);
    const [firstNameFocus, setFirstNameFocus] = useState(false);
    const [lastNameFocus, setLastNameFocus] = useState(false);
    const [middleNameFocus, setMiddleNameFocus] = useState(false);
    const [birthdayFocus, setBirthdayFocus] = useState(false);
    const [genderFocus, setGenderFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [validLastName, setValidLastName] = useState(false);
    const [validFirstName, setValidFirstName] = useState(false)
    const [validMiddleName, setValidMiddleName] = useState(false)

    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    const [sex, setSex] = useState('');
    const [birthdate, setBirthdate] = useState('');

    //Handle events
    async function handleSubmit (e) {
        e.preventDefault();
        // if button enabled with JS hack
        const v1 = USER_REGEX.test(username);
        const v2 = PWD_REGEX.test(password);

        if (!v1 && !v2) {

            setErrMsg("Invalid Entry");
        } else {
            if (!username || !password || !sex || !birthdate || !phone || !email || !firstname) {
                setErrMsg("Invalid Entry");
            }


            const response = await axios.post(REGISTER_URL, JSON.stringify({
                    username,
                    password,
                    phone,
                    email,
                    firstname,
                    lastname,
                    middlename,
                    sex,
                    birthdate
                }),
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
                        'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, X-CSRF-Token',
                        'Access-Control-Allow-Credentials': true

                    },
                    withCredentials: true
                }
            )


            if (response.status === 200) {
                setErrMsg("Registration successful\nYou can now sign in with your username and password");
                setSuccess(true);
                setTimeout(() => {

                    navigate('/login', {replace: true})

                }, 5000)
            } else {
                if (response.status === 500) {
                    setErrMsg(response.statusText);
                    setSuccess(false);


                    setTimeout(() => {

                        navigate('/login', {replace: true})

                    }, 10000)
                } else if (!response?.data) {
                    setErrMsg('No Server Response');
                } else if (response?.status === 400) {
                    setErrMsg('Username Taken');
                } else {
                    setTimeout(() => {
                        navigate('/login', {replace: true})

                    }, 4000)
                    setErrMsg('Registration Failed \n' + response.statusText)

                }}


        e.stopPropagation();
    }}
        useEffect(() => {
            setGenderFocus(genderFocus)
        }, [genderFocus])


        useEffect(() => {
            setValidName(USER_REGEX.test(username));

        }, [username])

        useEffect(() => {
            setValidPwd(PWD_REGEX.test(password));
            setValidMatch(password === matchPwd);

        }, [password, matchPwd])
        useEffect(() => {
            setEmailFocus(emailFocus);
        }, [emailFocus])

        useEffect(() => {
            setLastNameFocus(lastNameFocus);
        }, [lastNameFocus])
        useEffect(() => {
            setFirstNameFocus(firstNameFocus);
        }, [firstNameFocus])
        useEffect(() => {
            setMiddleNameFocus(middleNameFocus);
        }, [middleNameFocus])
        useEffect(() => {
            setGenderFocus(genderFocus);
        }, [genderFocus])
        useEffect(() => {
            setBirthdayFocus(birthdayFocus);

        }, [birthdayFocus])
        useEffect(() => {
            setPhoneFocus(phoneFocus)
        }, [phoneFocus])

        useEffect(() => {
            setMatchFocus(matchFocus)
        }, [matchFocus])


        useEffect(() => {
            setValidLastName(LASTNAME_REGEX.test(lastname))

        }, [lastname])
        useEffect(() => {
            setValidFirstName(FIRSTNAME_REGEX.test(firstname))
        }, [firstname])
        useEffect(() => {
            setValidMiddleName(MIDDLE_REGEX.test(middlename))
        }, [middlename])


        useEffect(() => {
            setErrMsg(errMsg);
        }, [errMsg])


        useEffect(() => {
            setSuccess(success)
        }, [success])
        useEffect(() => {
            setEmail(email)
        }, [email])
        useEffect(() => {
            setPhone(phone)

        }, [phone])
        useEffect(() => {
            setPhoneFocus(phoneFocus)
        }, [phoneFocus])

        useEffect(() => {
            setBirthdate(birthdate)
        }, [birthdate])
        useEffect(() => {
            setSex(sex)
        }, [sex])
        useEffect(() => {
            setBirthdayFocus(birthdayFocus)
        }, [birthdayFocus])
        useEffect(() => {
            setUsername(username)
        }, [username])

        let defaultSelectValue = 'green';
        return ((success ? (
            
            <section>
                <h1>Success!</h1>
                <span>
                    <a href="/">Sign In</a>
                </span>
                </section>
           
        ) : (
        

            <section>

                <div className="row">
                    <div className="col-md-12">
                        <h1>Registration</h1>
                        <div className={'infos'}>
                            <p className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}
                            </p>
                        </div>
                        <div className="flex-box">

                            <form>

                                <label htmlFor="username">
                                    Username:
                                    <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"}/>
                                    <FontAwesomeIcon icon={faTimes}
                                                     className={validName || !username ? "hide" : "invalid"}/>
                                </label>
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    ref={userRef}
                                    autoComplete="on"
                                    placeholder="Enter username"
                                    onChange={(e) => {
                                        setUsername(e.target.value)
                                    }}
                                    value={username}
                                    required
                                    aria-invalid={validName ? "false" : "true"}
                                    aria-describedby="uidnote"
                                    onFocus={() => setUserFocus(true)}
                                    onBlur={() => setUserFocus(false)}
                                />
                                <p id="uidnote"
                                   className={userFocus && username && !validName ? "instructions" : "offscreen"}>
                                    <FontAwesomeIcon icon={faInfoCircle}/>
                                    4 to 24 characters.<br/>
                                    Must begin with a letter.<br/>
                                    Letters, numbers, underscores, hyphens allowed.
                                </p>

                                <div className="e-input-container">
                                    <label htmlFor="password">
                                        Password:
                                        <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"}/>
                                        <FontAwesomeIcon icon={faTimes}
                                                         className={validPwd || !password ? "hide" : "invalid"}/>
                                    </label>
                                    <input
                                        placeholder="Enter your password"
                                        type="password"
                                        id="password"
                                        onChange={(e) => setPassword(e.target.value)}
                                        name="password"
                                        value={password}
                                        autoComplete="off"
                                        ref={pwdRef}
                                        required
                                        aria-invalid={validPwd ? "false" : "true"}
                                        aria-describedby="pwdnote"
                                        onFocus={() => setPwdFocus(true)}
                                        onBlur={() => setPwdFocus(false)}
                                    />
                                    <p id="pwdnote"
                                       className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                                        <FontAwesomeIcon icon={faInfoCircle}/>
                                        8 to 24 characters.<br/>
                                        Must include uppercase and lowercase letters, a number and a special
                                        character.<br/>
                                        Allowed special characters: <span aria-label="exclamation mark">!</span>
                                        <span
                                            aria-label="at symbol"></span> <span aria-label="hashtag">#</span> <span
                                        aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                                    </p>
                                </div>
                                <div className="e-input-container">
                                    <label htmlFor="confirm_pwd">
                                        Confirm Password:
                                        <FontAwesomeIcon icon={faCheck}
                                                         className={validMatch && matchPwd ? "valid" : "hide"}/>
                                        <FontAwesomeIcon icon={faTimes}
                                                         className={validMatch || !matchPwd ? "hide" : "invalid"}/>

                                    </label><input
                                    type="password"
                                    ref={pwdConfirmRef}
                                    placeholder="Confirm your password"
                                    id="confirm_pwd"
                                    name="confirm_pwd"
                                    onChange={(e) => setMatchPwd(e.target.value)}
                                    value={matchPwd}
                                    required
                                    autoComplete="on"
                                    aria-invalid={validMatch ? "false" : "true"}
                                    aria-describedby="confirmnote"
                                    onFocus={() => setMatchFocus(true)}
                                    onBlur={() => setMatchFocus(false)}
                                />

                                    <p id="confirmnote"
                                       className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                                        <FontAwesomeIcon icon={faInfoCircle}/>
                                        Must match the first password input field.</p>

                                </div>

                                <div className="e-input-container">
                                    <label htmlFor="email">Email:

                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        autoComplete="on"
                                        placeholder="Enter email address"
                                        name="email"
                                        value={email}
                                        ref={emailRef}
                                        onChange={(e) => setEmail(e.target.value)} required
                                    />
                                </div>


                                <div className="e-input-container">

                                    <label htmlFor="phone">Phone:</label>

                                    <PhoneInput
                                        country={'us'}
                                        autoComplete="on"
                                        value={phone}
                                        onChange={phone => setPhone(phone)}
                                    />


                                </div>

                                <div className="e-input-container">
                                    <label htmlFor="lastname">Last Name:
                                        <FontAwesomeIcon icon={faCheck}
                                                         className={validLastName ? "valid" : "hide"}/>
                                        <FontAwesomeIcon icon={faTimes}
                                                         className={validLastName || !lastname ? "hide" : "invalid"}/>
                                    </label>
                                    <input
                                        ref={lastNameRef}
                                        autoComplete="on"
                                        placeholder="Enter your lastname"
                                        type="text"
                                        name="lastname"
                                        value={lastname}
                                        onChange={(e) => setLastName(e.target.value)}
                                        aria-invalid={validLastName ? "false" : "true"}
                                    />
                                    <p id="uidnote"
                                       className={lastNameFocus && lastname && !validLastName ? "instructions" : "offscreen"}>
                                        <FontAwesomeIcon icon={faInfoCircle}/>

                                        Must be with a letter only.<br/>
                                        Letters only are allowed.
                                    </p>


                                </div>
                                <div className="e-input-container">
                                    <label htmlFor="firstname">First Name:

                                        <FontAwesomeIcon icon={faCheck}
                                                         className={validFirstName ? "valid" : "hide"}/>
                                        <FontAwesomeIcon icon={faTimes}
                                                         className={validFirstName || !firstname ? "hide" : "invalid"}/>

                                    </label>
                                    <input
                                        ref={firstNameRef}
                                        autoComplete="on"
                                        placeholder="Enter your firstname"
                                        type="text"
                                        name="firstname"
                                        value={firstname}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        aria-invalid={validFirstName ? "false" : "true"}
                                    />
                                </div>


                                <div className="e-input-container">
                                    <label htmlFor="middlename">Middlename:

                                        <FontAwesomeIcon icon={faCheck}
                                                         className={validMiddleName ? "valid" : "hide"}/>
                                        <FontAwesomeIcon icon={faTimes}
                                                         className={validMiddleName || !middlename ? "hide" : "invalid"}/>

                                    </label>
                                    <input
                                        aria-invalid={validMiddleName ? "false" : "true"}
                                        autoComplete="off"
                                        placeholder="Enter your middlename"
                                        type="text"
                                        name="middlename"
                                        ref={middleNameRef}
                                        value={middlename}
                                        onChange={(e) => setMiddleName(e.target.value)}/>

                                </div>

                                <div className="e-input-container">
                                    <label htmlFor="birthdate">Birthdate</label>
                                    <input type="date" id="birthdate" name="birthdate"
                                           value={birthdate}
                                           onChange={e => setBirthdate(e.target.value)}
                                           ref={birthdayRef}/>
                                </div>
                                <div className="e-input-container">
                                    <label htmlFor={'sex'}>Sex:</label>
                                    <select
                                        id={sex}
                                        name={'sex'}
                                        defaultValue={sex}
                                        style={{color: sex === defaultSelectValue ? "red" : "black"}}
                                        onChange={e => setSex(e.target.value)}
                                    >
                                        {options.map(options => (
                                            <option key={options} value={options}>
                                                {options}
                                            </option>
                                        ))}
                                    </select>

                                </div>

                            </form>
                            <div className="buttons">
                                <button disabled={!validName || !birthdate || !validPwd || !validMatch}
                                        onClick={e => handleSubmit(e)}>Sign Up
                                </button>
                                <p>Already registered?<br/>
                                    <button onClick={() => window.location.replace('/login')} type={'button'}>Sign
                                        In
                                    </button>
                                </p>
                            </div>
                        </div>


                    </div>
                </div>


            </section>
             

        )))
    }

export default Register