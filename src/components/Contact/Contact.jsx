import React, { useEffect } from 'react'

export default function Contact() {

  return <>
  <section className='py-5 d-flex justify-content-center align-items-center'>
    <div className="container">
    <div className="heading-secti">
        <h2 className='fs-1 fw-bold text-center'>CONTACT</h2>
        <div className='divider-custom my-4 w-100 d-flex justify-content-center align-items-center'>
            <div className="custom-line bg-dark"></div>
            <div className='mx-3'><i class="fa-solid fa-star fa-2x"></i></div>
            <div className="custom-line bg-dark"></div>
        </div>
    </div>
    <form>
    <div class="row">
    <div className="col-lg-8 mx-auto">
        <div class="form-floating mb-3">
            <input type="text" class="form-control" id="floatingInput" placeholder="Name"/>
            <label for="floatingInput">Name</label>
        </div>
        <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
            <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
            <input type="text" class="form-control" id="floatingPassword" placeholder="Phone Number"/>
            <label for="floatingPassword">Phone Number</label>
        </div>
        <div class="form-floating mt-3">
            <textarea class="form-control" row placeholder="Messagr" id="floatingTextarea" ></textarea>
            <label for="floatingTextarea">Message</label>
        </div>
        <div className='mt-4'>
            <button className='btn btn-primary py-3 px-4'>Send</button>
        </div>
    </div>
    </div>
    </form>
    </div>
  </section>
  </>

}
