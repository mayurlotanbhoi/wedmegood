import React from 'react';


const HomeBanner = () => {
        return (
                <div className=' home-banner container-fuild d-flex align-items-end justify-content-center' style={{ color: "white" }} >

                        <div className='text-center  mb-4 '>
                                <h1 className='h1'>Your Wedding, Your Way</h1>
                                <h5>Find the best wedding vendors with thousands of trusted reviews</h5>
                                <div className=' d-flex w-100 '>
                                        <select class="form-select" aria-label="Default select example" >
                                                <option selected>Open this select menu</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                        </select>


                                        <select class="form-select" aria-label="Default select example" >
                                                <option>Open this select menu</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                        </select>

                                        <button className='w-50 drop-down-btn'>Get Started</button>


                                </div>

                                <div className='mt-3'>  <span style={{ fontSize: '1.2rem' }}>Popular Searches:</span><small >
                                        Wedding Photographers in IndiaBridal Makeup in IndiaWedding Cards in IndiaWedding Venues in India</small></div>
                        </div>


                </div>
        );
}

export default HomeBanner;
