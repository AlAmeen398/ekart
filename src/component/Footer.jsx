import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <div className='d-flex justify-content-center align-items-center bg-primary'
        style={{ height: "260px", width: "100%" }}>
        <div className='d-flex justify-content-center align-items-evenly p-4'>
          <div className='overview ' style={{ width: "400px" }}>
            <h5> <i class="fa-solid fa-cart-shopping fa-bounce me-2 text-light"></i>
              <span className='ms-4' style={{ color: "white", fontWeight: "700" }}>EKART</span>
            </h5>
            <p style={{ color: "white", textAlign: "justify" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, dolores aperiam. Nam necessitatibus dignissimos error sunt eum tempora, consectetur ipsam eos, earum officiis facere! Provident eos asperiores voluptatum dolorem exercitationem!</p>
          </div>
          <div className='links ms-3' style={{ color: "white" }}>
            <h4>LINKS</h4>
            <Link style={{ textDecoration: "none", color: "white" }} to={'/'}>Home <br /></Link>
            <Link style={{ textDecoration: "none", color: "white" }} to={'/cart'}>Cart <br /></Link>
            <Link style={{ textDecoration: "none", color: "white" }} to={'/wishlist'}>Wishlist <br /></Link>

          </div>
          <div className='guide ms-4' style={{ color: "white" }}>
            <h4>GUIDE</h4>
            REACT <br />
            REACT BOOTSTRAP <br />
            FONT AWESOME <br />
          </div>
          <div className='contact_us ms-4' style={{ color: "white" }}>
            <h4>CONTACT US</h4>
            <div className='d-flex'>
              <input type="text" name='' placeholder='enter your email' className='form-control' />
              <button className='btn btn-warning ms-3'>suscribe</button>
            </div>
            <div className='d-flex justify-content-evenly align-items-center mt-3'>
              <i className="fa-brands fa-instagram fa-2x"></i>
              <i className="fa-brands fa-whatsapp fa-2x"></i>
              <i className="fa-brands fa-twitter fa-2x"></i>
              <i className="fa-brands fa-reddit fa-2x"></i>
            </div>
          </div>

        </div>

      </div>
      <div className='d-flex justify-content-center align-items-center mt-3'>
      <p className='textStyle'>copy right &copy; 2025 E Kart build with react</p>
  
      </div>
    </>
  )
}

export default Footer