import React from './node_modules/react';
import logo from './logo.svg';
import './App.css';
import PhoneIcon from './node_modules/@material-ui/icons/Phone';

function Maintenance() {
    return (
        <div className="App">
            <video id="fullscreen-bg-video" autoPlay muted >
                <source src="/assets/videos/default-screen.mp4" type="video/mp4" />
            </video>

            <div className="size1 overlay1">
                <div className="size1 flex-col-c-m p-l-15 p-r-15 p-t-50 p-b-50">
                    <h3 className="l1-txt1 txt-center p-b-25">
                        Coming Soon
                    </h3>

                    <p className="m2-txt1 txt-center p-b-48">
                        Our website is under construction.
                    </p>

                    <div className="flex-w flex-c-m cd100 p-b-33">
                        <div className="flex-col-c-m size2 bor1 m-l-15 m-r-15 m-b-20">
                            <span className="l2-txt1 p-b-9 days"></span>
                            <span className="s2-txt1">Days</span>
                        </div>

                        <div className="flex-col-c-m size2 bor1 m-l-15 m-r-15 m-b-20">
                            <span className="l2-txt1 p-b-9 hours"></span>
                            <span className="s2-txt1">Hours</span>
                        </div>

                        <div className="flex-col-c-m size2 bor1 m-l-15 m-r-15 m-b-20">
                            <span className="l2-txt1 p-b-9 minutes"></span>
                            <span className="s2-txt1">Minutes</span>
                        </div>

                        <div className="flex-col-c-m size2 bor1 m-l-15 m-r-15 m-b-20">
                            <span className="l2-txt1 p-b-9 seconds"></span>
                            <span className="s2-txt1">Seconds</span>
                        </div>
                    </div>

                    <div className="flex-w flex-c-m cd100 p-b-33">
                        <a href="http://wa.me/6285728282811" className="flex-c-m size3 s2-txt3 how-btn1 trans-04 custom-contact-me-btn">
                            <div className="coming-soon-contact-me-icon">
                                <PhoneIcon />
                            </div>
                        Contact me
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Maintenance;
