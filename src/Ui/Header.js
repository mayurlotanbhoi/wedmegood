import React from 'react';

const Header = () => {
        return (
                <nav class="navbar navbar-expand-lg navbar-light bg-light primary-color Header">
                        <div class="container-fluid container-fluid ms-4 me-4">
                                <small className=' d-flex' >India's Favourite Wedding Planning Platform
                                        <div className='All-Cities ms-5'> All Cities</div>
                                </small>


                                <div class="" id="">

                                        <div >
                                                <small className='me-4' >
                                                        <img className='me-1' style={{ width: "1.1rem" }} src='https://image.wedmegood.com/resized/20X/images/icons/write_a_review_new.png' />Write A Review
                                                </small>
                                                <small className=' '>    <img className='me-1' style={{ width: "0.7rem" }} src='https://image.wedmegood.com/resized/20X/images/icons/download_app_new.png' />Download App


                                                </small>
                                        </div>
                                </div>
                        </div>
                </nav >
        );
}

export default Header;
