import React from 'react'
import brand from '../assests/images/new1.PNG'
import brand2 from '../assests/images/new2.PNG'
function Go() {
  return (
    <>
      <div className='container  justify-content-center'>
        <div className="col-md-12  text-center">
          <h4 className='my-2 shop'>Shop on the go</h4>
          <p className='best'>Get the best Shopascart experience all in one app.</p>
          <div className='d-flex justify-content-center'>
            <img src={brand} alt="brand" className='img-responsive img-fluid' width={100} height={20} />
            <img src={brand2} alt="brands" width={100} height={20} className='img-responsive img-fluid' />
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className=' row justify-content-center my-4'>
          <div className='text-center'>
            <p style={{ color: '#667085' }}>SHOPASCART+</p>
            <h3 style={{ color: "#D92D20", fontSize: "23px", fontWeight: "600px" }}>The best way to save money on grocery shopping</h3>
            <p style={{ color: "black" }}>Choose a plan that fits your shopping needs and get started.</p>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className="row justify-content-center my-4 ">
          <div className='col-md-4 m-auto'>
            <div className='wrap'>
              <h4 className='text-white fw-bold-2 pt-3'>Shopascart Plus</h4>
              <p style={{ color: 'white' }}>Unlimited delivery on orders over ₦5000</p>
              <h1 className='text-white fs-5'>₦3000/month or <br /> ₦25000/year</h1>
              <button className='plus'><span style={{ color: '#D92D20' }}>Get Shopascart Plus</span></button>
            </div>
          </div>
        </div>
        <div className="row mt-3 justify-content-center text-center" style={{ fontSize: 10 }}>
          <p>Deliveries under ₦5000 with or without a Shopascart+ membership will incur a ₦1800 fee <br /> and applicable taxes and service fees per order.</p>
        </div>
      </div>
    </>
  )
}

export default Go