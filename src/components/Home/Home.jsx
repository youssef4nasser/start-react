import React from 'react'

import imgHome from "../../img/avataaars (1).svg"

export default function Home() {
  return <>
    <div className='main-color text-white' >
        <div className="container">
            <div className="home-content d-flex justify-content-center align-items-center flex-column vh-100">
                <img className='' src={imgHome} alt="" />
                <h1 className='heading-home my-4 fw-bold text-uppercase'>start react</h1>
                <div className='divider-custom my-3 w-100 d-flex justify-content-center align-items-center'>
                    <div className="custom-line  bg-white"></div>
                    <div className='mx-3'><i class="fa-solid fa-star fa-2x"></i></div>
                    <div className="custom-line bg-white"></div>
                </div>
                <p className='fs-4'>Graphic Artist - Web Designer - Illustrator</p>
            </div>
        </div>
    </div>
  </>
}
