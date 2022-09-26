import React from 'react'
import Image1 from '../assests/images/1.png'
import Image2 from '../assests/images/2.png'
import Image3 from '../assests/images/10.png'
import Image4 from '../assests/images/6.png'
import Image5 from '../assests/images/8.png'
export default function Nav() {
  return (
    <>
      <div className='container-fluid  align-items-center   bg-nav'>
        <div className="row justify-content-center">
          <div className='col-md-10  ps-5'>
            <span id='first'>First order, ₦0 delivery fee. Use promo code</span>
            <span className='text-white'><img src={Image1} className='two img-responsive img-fluid w-5' />FIRSTORDER</span>
          </div>
          <div className='col-md-2'>
            <img src={Image2} alt="" className='justify-content-end img-responsive img-fluid' />
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg  bg-light  col-md-12">
        <div className="container-fluid col-lg-10">
          <a className="navbar-brand bg-dark" href="#">
            <img src={Image3} alt="" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Stores</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Locations</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-danger" href="#">Become a Shopper</a>
              </li>
              <li className='nav-item'>
                <div className='d-flex'>
                  <a className="nav-link mx-3" href="#">Sign in</a>
                  <a className="nav-link btn btn-danger btn-lg rounded rounded-4 px-4 text-white" href="#">Sign up</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section className='section3 container-fluid c0l-lg-12 col-sm-12'>
        <div className='container pt-5'>
          <div className="row ">
            <div className='col-md-7'>
              <h3 className='get1'><strong>Get your groceries<br></br>
                delivered same-day</strong>
              </h3>
              <p className='order'>Order what you want from grocery stores and local market near you <br /> and get it delivered right to your door.</p>
              <div className='d-flex '>
                <input type="text" className='form-control' placeholder='Enter your address' />
                <img src={Image4} className='img4 logo' />
              </div>
            </div>
            <div className='col-md-5'>
              <img src={Image5} className=' dis img-responsive img-fluid' width='470px' height='200px' />
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="row justify-content-center text-center">
          <h3 className='mt-3 fa'>Favorite stores in<span className='la'>Lagos</span></h3>
        </div>
      </div>
    </>
  )
}
