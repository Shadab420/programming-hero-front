import React from 'react';
import img from '../../../assets/images/header-slider/slider-img1.png';
import './Register.scss';
import { FaUser, FaEnvelope, FaPhone, FaUserSecret, FaCheck, FaExclamationTriangle, FaArrowRight } from 'react-icons/fa';

const Register = () => {
    return (
        <div>
            <div class="columns is-vcentered is-centered auth-div">
                <div class="column is-half">
                    
                    <form action="" method="" className="box auth-form">
                        <h1 className="is-size-2-desktop title">Register</h1>
                        <div class="field">
                            <label class="label" for="name">Name</label>
                            <div class="control has-icons-left has-icons-right">
                                <input class="input" type="text" id="name" placeholder="Your Name"/>
                                {/* <input class="input is-success" type="text" id="name" placeholder="Your Name"/> */}
                                <span class="icon is-small is-left">
                                    <FaUser/>
                                </span>
                                {/* <span class="icon is-small is-right">
                                    <FaCheck/>
                                </span> */}
                            </div>
                            {/* <p class="help is-success">This username is available</p> */}
                        </div>

                        <div class="field">
                            <label class="label" for="email">Email</label>
                            <div class="control has-icons-left has-icons-right">
                                <input class="input" type="email" id="email" placeholder="you@email.com"/>
                                {/* <input class="input is-danger" type="email" id="email" placeholder="Email input" value="hello@"/> */}
                                <span class="icon is-small is-left">
                                    <FaEnvelope />
                                </span>
                                {/* <span class="icon is-small is-right">
                                    <FaExclamationTriangle />
                                </span> */}
                            </div>
                            {/* <p class="help is-danger">This email is invalid</p> */}
                        </div>

                        <div class="field">
                            <label class="label" for="phone">Phone No.</label>
                            <div class="control has-icons-left has-icons-right">
                                <input class="input" type="text" id="phone" placeholder="Your Phone No."/>
                                {/* <input class="input is-success" type="text" id="name" placeholder="Your Name"/> */}
                                <span class="icon is-small is-left">
                                    <FaPhone />
                                </span>
                                {/* <span class="icon is-small is-right">
                                    <FaCheck />
                                </span> */}
                            </div>
                            {/* <p class="help is-success">This username is available</p> */}
                        </div>

                        <div class="field">
                            <label class="label" for="password">Password</label>
                            <div class="control has-icons-left has-icons-right">
                                <input class="input" type="text" id="password" placeholder="******"/>
                                {/* <input class="input is-success" type="text" id="name" placeholder="Your Name"/> */}
                                <span class="icon is-small is-left">
                                    <FaUserSecret />
                                </span>
                                {/* <span class="icon is-small is-right">
                                    <FaCheck />
                                </span> */}
                            </div>
                            {/* <p class="help is-success">This username is available</p> */}
                        </div>

                        <div class="field">
                            <div class="control has-icons-right">
                                <button type="submit" class="button is-link">Submit</button>
                                <span className="icon is-small is-right button-icon"><FaArrowRight/></span>
                            </div>
                            {/* <div class="control">
                                <button class="button is-link is-light">Cancel</button>
                            </div> */}
                        </div>

                    </form>
                </div>
                <div class="column is-half">
                    <img src={img} className="image"/>
                </div>
            </div>
            
        </div>
    )
}

export default Register
