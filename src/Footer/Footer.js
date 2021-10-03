import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer ">
        <section className="container ">
            <div className="d-flex justify-content-center">
                <div className="pt-3 pb-0">
                    <div className="d-flex justify-content-center">
                        <div>
                            <span className="d-flex text-white py-3 ms-auto ">
                                <div className="social-icons-f">
                                    <a href="" target="_blank">
                                        <span className="icon-users rounded-circle  p-3"><i
                                                className="fab fa-facebook-f"></i></span>
                                    </a>
                                </div>
                                <div className="social-icons-f ms-3 ">
                                    <a href="" target="_blank">
                                        <span className="icon-users rounded-circle  p-3"><i
                                                className="fab fa-twitter"></i></span>
                                    </a>
                                </div>
                                <div className="social-icons-f ms-3 ">
                                    <a href="" target="_blank">
                                        <span className="icon-users rounded-circle  p-3"><i
                                                className="fab fa-linkedin-in"></i></span>
                                    </a>
                                </div>
                                <div className="social-icons-f ms-3 ">
                                    <a href="" target="_blank">
                                        <span className="icon-users rounded-circle  p-3"><i
                                                className="fab fa-instagram"></i></span>
                                    </a>
                                </div>
                            </span>

                        </div>
                    </div>
                    <p className="text-center text-white ">Copyright © 2020  AmarSoft All
                        Rights
                        Reserved by
                        Jahidul Islam .
                    </p>

                </div>
            </div>

        </section>

        {/* <div className="social-icons-f ms-3 fixed-bottom1">
            <a href="#" className="cd-top text-replace js-cd-top">
                <span className="icon-users rounded-circle  p-3"><i className="fa fa-chevron-up"></i> </span>
            </a>
        </div> */}
    </footer>    );
};

export default Footer;