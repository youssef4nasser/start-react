import React, { useEffect } from 'react'

import imgcabin from "../../img/cabin.png"
import imgcake from "../../img/cake.png"
import imgcircus from "../../img/circus.png"
import imggame from "../../img/game.png"
import imgsafe from "../../img/safe.png"
import imgsubmarine from "../../img/submarine.png"

export default function Portfolio() {
    // Component didMount
    // useEffect(() => {} ,[])


  return <>
    <section className='py-5 d-flex justify-content-center align-items-center mt-5'>
        <div className="container">
            <div className="heading-secti">
                <h2 className='fs-1 fw-bold text-secondary text-center'>PORTFOLIO</h2>
                <div className='divider-custom my-3 w-100 d-flex justify-content-center align-items-center'>
                    <div className="custom-line bg-secondary"></div>
                    <div className='mx-3'><i class="fa-solid fa-star fa-2x"></i></div>
                    <div className="custom-line bg-secondary"></div>
                </div>
            </div>
            <div className="row g-5 mt-1">
                <div className="col-md-6 col-lg-4 ">
                    <div className="portfolio-item position-relative" data-bs-toggle="modal" data-bs-target="#firstmodal">
                        <img className='w-100' src={imgcabin} alt="item-portfolio" />
                        <div className="layer-custom position-absolute top-0 b w-100 h-100 d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-plus fa-3x text-white"></i>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 ">
                    <div className="portfolio-item position-relative" data-bs-toggle="modal" data-bs-target="#secondmodal">
                        <img className='w-100' src={imgcake} alt="item-portfolio" />
                        <div className="layer-custom position-absolute top-0 b w-100 h-100 d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-plus fa-3x text-white"></i>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 ">
                    <div className="portfolio-item position-relative" data-bs-toggle="modal" data-bs-target="#thirddmodal">
                        <img className='w-100' src={imgcircus} alt="item-portfolio" />
                        <div className="layer-custom position-absolute top-0 b w-100 h-100 d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-plus fa-3x text-white"></i>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 ">
                    <div className="portfolio-item position-relative" data-bs-toggle="modal" data-bs-target="#forthdmodal">
                        <img className='w-100' src={imggame} alt="item-portfolio" />
                        <div className="layer-custom position-absolute top-0 b w-100 h-100 d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-plus fa-3x text-white"></i>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 ">
                    <div className="portfolio-item position-relative" data-bs-toggle="modal" data-bs-target="#fifthhdmodal">
                        <img className='w-100' src={imgsafe} alt="item-portfolio" />
                        <div className="layer-custom position-absolute top-0 b w-100 h-100 d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-plus fa-3x text-white"></i>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 ">
                    <div className="portfolio-item position-relative"  data-bs-toggle="modal" data-bs-target="#Sixthdmodal">
                        <img className='w-100' src={imgsubmarine} alt="item-portfolio" />
                        <div className="layer-custom position-absolute top-0 b w-100 h-100 d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-plus fa-3x text-white"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div className="modal fade text-center" id="firstmodal" tabindex="-1" aria-labelledby="firstmodalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-body">
                    <h2>LOG CABIN</h2>
                    <img className='w-100' src={imgcabin} alt="item-portfolio" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                    <button className='btn btn-info' data-bs-dismiss="modal">Close Window</button>
                </div>
            </div>
        </div>
    </div>

    <div className="modal fade text-center" id="secondmodal" tabindex="-1" aria-labelledby="secondmodalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-body">
                    <h2>TASTY CAKE</h2>
                    <img className='w-100' src={imgcake} alt="item-portfolio" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                    <button className='btn btn-info' data-bs-dismiss="modal">Close Window</button>
                </div>
            </div>
        </div>
    </div>

    <div className="modal fade text-center" id="thirddmodal" tabindex="-1" aria-labelledby="thirddmodalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-body">
                    <h2>CIRCUS TENT</h2>
                    <img className='w-100' src={imgcircus} alt="item-portfolio" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                    <button className='btn btn-info' data-bs-dismiss="modal">Close Window</button>
                </div>
            </div>
        </div>
    </div>

    <div className="modal fade text-center" id="forthdmodal" tabindex="-1" aria-labelledby="forthdmodalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-body">
                    <h2>CONTROLLER</h2>
                    <img className='w-100' src={imggame} alt="item-portfolio" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                    <button className='btn btn-info' data-bs-dismiss="modal">Close Window</button>
                </div>
            </div>
        </div>
    </div>

     <div className="modal fade text-center" id="fifthhdmodal" tabindex="-1" aria-labelledby="fifthhdmodalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-body">
                    <h2>LOCKED SAFE</h2>
                    <img className='w-100' src={imgsafe} alt="item-portfolio" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                    <button className='btn btn-info' data-bs-dismiss="modal">Close Window</button>
                </div>
            </div>
        </div>
    </div>

    <div className="modal fade text-center" id="Sixthdmodal" tabindex="-1" aria-labelledby="SixthdmodalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-body">
                    <h2>SUBMARINE</h2>
                    <img className='w-100' src={imgsubmarine} alt="item-portfolio" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                    <button className='btn btn-info' data-bs-dismiss="modal">Close Window</button>
                </div>
            </div>
        </div>
    </div>

  </>
}
