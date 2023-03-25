import React from 'react'

export default function Aboute() {
  return <>
  <section className='main-color text-white py-5 vh-100 d-flex justify-content-center align-items-center'>
    <div className="container">
        <div className="heading-secti">
            <h2 className='fs-1 fw-bold text-center'>ABOUTE</h2>
            <div className='divider-custom my-4 w-100 d-flex justify-content-center align-items-center'>
                <div className="custom-line bg-white"></div>
                <div className='mx-3'><i class="fa-solid fa-star fa-2x"></i></div>
                <div className="custom-line bg-white"></div>
            </div>
        </div>
        <div className="row gx-5 mp-3">
            <div className="col-lg-4 ms-auto">
                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
            <div className="col-lg-4 me-auto">
                <p>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
            </div>
        </div>
    </div>
  </section>
  
  </>
}
