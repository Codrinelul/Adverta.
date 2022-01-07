import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Footer extends Component {
    render() {
        return (
            <footer id="footer" className="clearfix">
                <div id="footer-widgets" className="container">
                    <div className="themesflat-row gutter-30">
                        <div className="col span_1_of_3">
                            <div className="widget widget_text">
                                <div className="textwidget">
                                    <p>
                                        <img src="assets/img/logo-white@2x.png" alt="imagealt" width={170} height={34} />
                                    </p>
                                    <p className="margin-bottom-15">We have over 15 years of experien able to help you 24 hours a
                                        day.</p>
                                    <ul>
                                        <li>
                                            <div className="inner">
                                                <span className="fa fa-map-marker" />
                                                <span className="text">Khayber St, Al Aarid, Riyadh 13335,<span className="sl"> Saudi Arabia</span></span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="inner">
                                                <span className="fa fa-phone" />
                                                <span className="text">CALL US : 0533007781</span>
                                            </div>
                                        </li>
                                        <li className="margin-top-7">
                                            <div className="inner">
                                                <span className=" font-size-14 fa fa-envelope" />
                                                <span className="text">almndob2010@gmail.com</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>{/* /.widget_text */}
                            <div className="themesflat-spacer clearfix" data-desktop={0} data-mobile={0} data-smobile={35} />
                        </div>{/* /.col */}
                        
                        
                        
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;