import React from 'react';
import img from '../../../assets/images/header-slider/slider-img1.png';
import '../authentication.scss';
import { FaEnvelope, FaUserSecret, FaCheck, FaExclamationTriangle, FaLock, FaArrowRight } from 'react-icons/fa';
import { Formik, Form, Field } from 'formik';
import LoginSchema from './LoginValidationSchema';
import { Link } from 'react-router-dom';
import ImageCarousel from '../../carousel/ImageCarousel';


const Register = () => {


    return (
        <div>
            <div class="columns is-vcentered is-centered auth-div">
                <div class="column is-half">

                <Formik
                    initialValues={{
                        emailOrPhone: '',
                        password:''
                    }}

                    validationSchema={LoginSchema}

                    onSubmit={(values) => {
                    // same shape as initial values

                    console.log(values);

                    }}

                    >

                    {({ errors, touched }) => (
                    
                    <Form className="box auth-form">
                        <h1 className="is-size-2-desktop title">Login</h1>
                        

                        <div class="field">
                            <label class="label" for="emailOrPhone">Email or Phone No.</label>
                            <div class="control has-icons-left has-icons-right">
                                <Field class="input" type="text" id="emailOrPhone" name="emailOrPhone" placeholder="Your Email or Phone No."/>
                                {/* <input class="input is-danger" type="email" id="email" placeholder="Email input" value="hello@"/> */}
                                <span class="icon is-small is-left">
                                    <FaEnvelope />
                                </span>
                                {/* <span class="icon is-small is-right">
                                    <FaExclamationTriangle />
                                </span> */}
                                {errors.emailOrPhone && touched.emailOrPhone ? (

                                    <span class="icon is-small is-right">
                                        <FaExclamationTriangle />
                                    </span>

                                ) : null}
                            </div>
                                {errors.emailOrPhone && touched.emailOrPhone ? (<p class="help is-danger">{errors.emailOrPhone}</p>) : null}
                        </div>

                        <div class="field">
                            <label class="label" for="password">Password</label>
                            <div class="control has-icons-left has-icons-right">
                                <Field class="input" type="text" id="password" name="password" placeholder="******"/>
                                {/* <input class="input is-success" type="text" id="name" placeholder="Your Name"/> */}
                                <span class="icon is-small is-left">
                                    <FaLock />
                                </span>
                                {/* <span class="icon is-small is-right">
                                    <FaCheck />
                                </span> */}
                                {errors.password && touched.password ? (

                                    <span class="icon is-small is-right">
                                        <FaExclamationTriangle />
                                    </span>

                                ) : null}
                            </div>
                            { errors.password && touched.password ? (<p class="help is-danger">{errors.password}</p>) : null }                        </div>
                        
                        <div class="field">
                            <div className="control columns is-vcentered is-centered">
                                    
                                    <div className="column remember-me">
                                        <input type="checkbox" />
                                        <label class="checkbox" >Remember Me</label>
                                    </div>
                                
                                    <Link to="#" className="column forgot-password">Forgot Password?</Link>
                            </div>
                        </div>    
                                
                        <div class="field">
                            <div class="control has-icons-right">
                                <button type="submit" class="button button-auth is-link">Login</button>
                                <span className="icon is-small is-right button-auth-icon"><FaArrowRight/></span>
                            </div>
                            {/* <div class="control">
                                <button class="button is-link is-light">Cancel</button>
                            </div> */}

                            <p className="reg-or-login-text">Need an account? <Link to="/register" className=" forgot-password">Register</Link></p>
                                
                            
                        </div>

                    </Form>
                    )}
                </Formik>
                </div>
                <div class="column is-half">
                    {/* <img src={img} className="image"/> */}

                    <ImageCarousel />

                </div>
            </div>
            
        </div>
    )
}

export default Register
