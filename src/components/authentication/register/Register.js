import React from 'react';
import img from '../../../assets/images/header-slider/slider-img1.png';
import './Register.scss';
import { FaUser, FaEnvelope, FaPhone, FaUserSecret, FaCheck, FaExclamationTriangle, FaTimes, FaArrowRight } from 'react-icons/fa';
import { Formik, Form, useFormik, Field } from 'formik';
import RegisterSchema from './RegisterValidationSchema';

const Register = () => {

    return (
        <div>
            <div class="columns is-vcentered is-centered auth-div">
                <div class="column is-half">

                <Formik
                    initialValues={{
                        name: '',
                        email: '',
                        phone: '',
                        password:''
                    }}

                    validationSchema={RegisterSchema}

                    onSubmit={(values) => {
                    // same shape as initial values

                    console.log(values);

                    }}

                    >

                    {({ errors, touched }) => (
                    
                    <Form className="box auth-form">
                        <h1 className="is-size-2-desktop title">Register</h1>
                        <div class="field">
                            <label class="label" for="name">Name</label>
                            <div class="control has-icons-left has-icons-right">
                                <Field class="input" type="text" id="name" name="name" placeholder="Your Name"/>
                                {/*<input class="input is-success" type="text" id="name" placeholder="Your Name"/> */}
                                <span class="icon is-small is-left">
                                    <FaUser/>
                                </span>
                                {/* <span class="icon is-small is-right">
                                    <FaCheck/>
                                </span> */}
                                {errors.name && touched.name ? (

                                    <span class="icon is-small is-right">
                                        <FaExclamationTriangle />
                                    </span>

                                ) : null}
                            </div>
                            { errors.name && touched.name ? (<p class="help is-danger">{errors.name}</p>) : null }
                        </div>

                        <div class="field">
                            <label class="label" for="email">Email</label>
                            <div class="control has-icons-left has-icons-right">
                                <Field class="input" type="email" id="email" name="email" placeholder="you@email.com"/>
                                {/* <input class="input is-danger" type="email" id="email" placeholder="Email input" value="hello@"/> */}
                                <span class="icon is-small is-left">
                                    <FaEnvelope />
                                </span>
                                {/* <span class="icon is-small is-right">
                                    <FaExclamationTriangle />
                                </span> */}
                                {errors.email && touched.email ? (

                                    <span class="icon is-small is-right">
                                        <FaExclamationTriangle />
                                    </span>

                                ) : null}
                            </div>
                                {errors.email && touched.email ? (<p class="help is-danger">{errors.email}</p>) : null}
                        </div>

                        <div class="field">
                            <label class="label" for="phone">Phone No.</label>
                            <div class="control has-icons-left has-icons-right">
                                <Field class="input" type="text" id="phone" name="phone" placeholder="Your Phone No."/>
                                {/* <input class="input is-success" type="text" id="name" placeholder="Your Name"/> */}
                                <span class="icon is-small is-left">
                                    <FaPhone />
                                </span>
                                {/* <span class="icon is-small is-right">
                                    <FaCheck />
                                </span> */}
                                {errors.phone && touched.phone ? (

                                    <span class="icon is-small is-right">
                                        <FaExclamationTriangle />
                                    </span>

                                ) : null}
                            </div>
                            { errors.phone && touched.phone ? (<p class="help is-danger">{errors.phone}</p>) : null }
                        </div>

                        <div class="field">
                            <label class="label" for="password">Password</label>
                            <div class="control has-icons-left has-icons-right">
                                <Field class="input" type="text" id="password" name="password" placeholder="******"/>
                                {/* <input class="input is-success" type="text" id="name" placeholder="Your Name"/> */}
                                <span class="icon is-small is-left">
                                    <FaUserSecret />
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
                            <div class="control has-icons-right">
                                <button type="submit" class="button is-link">Submit</button>
                                <span className="icon is-small is-right button-icon"><FaArrowRight/></span>
                            </div>
                            {/* <div class="control">
                                <button class="button is-link is-light">Cancel</button>
                            </div> */}
                        </div>

                    </Form>
                    )}
                </Formik>
                </div>
                <div class="column is-half">
                    <img src={img} className="image"/>
                </div>
            </div>
            
        </div>
    )
}

export default Register
