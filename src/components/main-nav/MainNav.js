import React, { useEffect, useState } from 'react';
import './MainNav.scss';
import logo from '../../assets/images/logo/programming-hero-web-logo.png';
import { useAuth } from '../../custom-hooks/useAuth';

const MainNav = (props) => {

    const auth = useAuth();

    return (
        <div>
            <nav className={`navbar is-fixed-top ${!auth.user? 'nav-blue' : 'nav-white'} `} role="navigation" aria-label="main navigation">
                <div className="navbar-brand nav-brand-div">

                    {
                        !auth.user && (
                            <a className="navbar-item" href="https://bulma.io">
                                <img src={logo} />
                            </a>
                        )
                    }

                    {
                        auth.user && <h4 className="navbar-item has-text-weight-semibold course-title">Complete Web Development Course with Jhankar Mahbub</h4>
                    }
                    

                    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    {/* <div className="navbar-start">
                    <a className="navbar-item">
                        Home
                    </a>

                    <a className="navbar-item">
                        Documentation
                    </a>

                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">
                        More
                        </a>

                        <div className="navbar-dropdown">
                        <a className="navbar-item">
                            About
                        </a>
                        <a className="navbar-item">
                            Jobs
                        </a>
                        <a className="navbar-item">
                            Contact
                        </a>
                        <hr className="navbar-divider"/>
                        <a className="navbar-item">
                            Report an issue
                        </a>
                        </div>
                    </div>
                    </div> */}
                    {
                        auth.user &&(
                            <div className="navbar-end nav-end-menu">
                                <div className="navbar-item">
                                    <div className="progress-div">
                                        <progress class="progress is-success" value="45" max="100">15%</progress>
                                        <small>Progress (45%)</small>
                                    </div>

                                    <div className="profile-image-div">
                                        <figure class="image is-32x32">
                                            <img class="is-rounded" src={require('../../assets/images/users/user.jpg')} />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </nav>
        </div>
    )
}

export default MainNav
