import React from 'react'

export default function Footer() {
  return <>
    <footer className='py-5 text-white'>
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                  <h2>LOCATION</h2>
                  <p>2215 John Daniel Drive <br />Clark, MO 65243</p>
                </div>
                <div className="col-md-4">
                  <h2>AROUND THE WEB</h2>
                  <div>
                  <a className='btn-social text-decoration-none mx-2' href="#"><i class="fa-brands fa-facebook text-white"></i></a>
                  <a className='btn-social text-decoration-none mx-2' href="#"><i class="fa-brands fa-twitter text-white"></i></a>
                  <a className='btn-social text-decoration-none mx-2' href="#"><i class="fa-brands fa-linkedin text-white"></i></a>
                  <a className='btn-social text-decoration-none mx-2' href="#"><i class="fa-brands fa-dribbble text-white"></i></a>
                  </div>
                </div>
                <div className="col-md-4">
                  <h2>ABOUT FREELANCER</h2>
                  <p>Freelance is a free to use, MIT licensed Bootstrap theme created by Route</p>
                </div>
            </div>
        </div>
    </footer>
  </>
}
