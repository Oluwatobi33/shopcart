import React from 'react'
import Image6 from '../assests/images/7.png'
import Image7 from '../assests/images/11.png'
import Image8 from '../assests/images/12.png'
import Image9 from '../assests/images/13.png'
import Image10 from '../assests/images/14.png'
import Image11 from '../assests/images/15.gif'
import Image12 from '../assests/images/16.png'
export default function Lagos() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="card border  border-0" >
              <img src={Image6} class="card-img-top" alt="..." />
              <div className="card-body border  border-0">
                <h5 className="card-title market">Shoprite</h5>
                <p className="card-text deliver">
                  Delivery• Pickup
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 ">
            <div className="card border  border-0">
              <img src={Image7} className="card-img-top" alt="..." />
              <div className="card-body border  border-0">
                <h5 className="card-title market">Addide</h5>
                <p className="card-text deliver">Delivery•Pickup</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3  col-md-6">
            <div className="card border  border-0">
              <img src={Image8} className='card-img-top' alt="..." />
              <div className="card-body border  border-0">
                <h5 className="card-title market">Delis</h5>
                <p className="card-text deliver">Delivery</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 ">
            <div className="card border  border-0">
              <img src={Image9} className='card-img-top' alt="..." />
              <div className="card-body border  border-0">
                <h5 className="card-title market">Supermart</h5>
                <p className="card-text deliver">Delivery•Pickup</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className="row">
          <div className="col-md-8">
            <div className="straight">
              <div className="card border border-0 ">
                <div className="card-body item">
                  <h2 className="card-title right">Choose what you want</h2>
                  <p className="card-text select">Select items from your favorite  <br /> grocery stores or local markets.</p>
                  <img src={Image10} className='card-img-top top1' alt="jjj" />
                </div>
              </div>
              <div className="card border border-0">
                <div className="card-body item">
                  <h2 className="card-title  right">Choose what you want</h2>
                  <p className="card-text select">Select items from your favorite <br /> grocery stores or local markets.</p>
                  <img src={Image11} className='card-img-top top1' alt="favpurite" />
                </div>
              </div>
              <div className="card border border-0 flow">
                <div className="card-body item">
                  <h2 className="card-title  right">Choose what you want</h2>
                  <p className="card-text select">Select items from your favorite <br /> grocery stores or local markets.</p>
                  <img src={Image12} className='card-img-top top1' alt="from" />
                </div>
              </div>
            </div>
          </div>
        </div >
      </div>
      {/* <div className="straight">
        <a href="#home">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>

      </div> */}
    </>
  )
}
