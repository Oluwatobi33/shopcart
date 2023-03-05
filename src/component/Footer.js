import React from 'react'
import img10 from '../assests/images/10.png'
import brand1 from '../assests/images/new1.PNG'
import brand2 from '../assests/images/new2.PNG'
export default function
    () {
    return (
        <>
            <section className='section container-fluid'>
                <div className='container justify-content-center'>
                    <div className="row pt-5">
                        <div className='col-lg-12 col-md-12 px-5 '>
                            <span className=''><img src={img10} /></span>
                        </div>
                        <div className="row">
                            <div className="col-sm-3">
                                <ul className='unlist'>
                                    <h5>Top Cities</h5>
                                    <li>Victoria Island</li>
                                    <li>IKeja</li>
                                    <li>Ikeja</li>
                                    <li>Yaba</li>
                                </ul>
                            </div>
                            <div className="col-sm-3">
                                <ul className='unlist'>
                                    <h5>Work with us</h5>
                                    <li>Become a Shopper</li>
                                    <li>Be a Partner Store</li>
                                    <li>In-Store Shopper</li>
                                    <li>Shopascart Ambassador Program</li>
                                </ul>
                            </div>
                            <div className="col-sm-2">
                                <ul className='unlist'>
                                    <h5>Get to know us</h5>
                                    <li>About</li>
                                    <li>Careers</li>
                                    <li>Investors</li>
                                    <li>Press</li>
                                </ul>
                            </div>
                            <div className="col-sm-3">
                                <ul className='unlist'>
                                    <h5>Legal</h5>
                                    <li>Terms of Use</li>
                                    <li>Privacy Policy</li>
                                </ul>
                                <ul className='unlist'>
                                    <h5>Support</h5>
                                    <li>FAQs</li>
                                    <li>Contact Us</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section2'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-9 two">
                            <p>© 2022 Shopascart, inc. All rights reserved.</p>
                            <p>Offer only available to new members. Use code FIRSTORDER at checkout to get your first delivery free.</p>
                        </div>
                    </div>
                    <ul className="media float-end">
                        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fa fa-pinterest"></i></a></li>
                    </ul>
                    <div className="row">
                        <div className="col-md-8">
                            <div className='d-flex '>
                                <img src={brand1} alt="brands" style={{ width: "200px", height: "50px", padding: "0px " }} className='mx-3' />
                                <img src={brand2} alt="brands" style={{ width: "200px", height: "50px", padding: "0px " }} />
                            </div>
                        </div>
                        <p className='text-white mt-3'>Coming soon</p>
                    </div>
                </div>
            </section>
        </>
    )
}
