import React from 'react';

const NavBar = () => {
        return (

                <nav class="navbar navbar-expand-lg navbar-light bg-light primary-color nav-Bar">
                        <div class="container-fluid container-fluid ms-4 me-4">
                                <a class="navbar-brand" href="#"><img src='https://images.wedmegood.com/images/WMG-logo.svg' alt='Logo' /></a>
                                <button
                                        class="navbar-toggler"
                                        type="button"
                                        data-mdb-toggle="collapse"
                                        data-mdb-target="#navbarText"
                                        aria-controls="navbarText"
                                        aria-expanded="false"
                                        aria-label="Toggle navigation"
                                >
                                        <i class="fas fa-bars"></i>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarText">
                                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                                <li class="nav-item ms-2">
                                                        <a class="nav-link" aria-current="page" href="#">Venues</a>
                                                </li>
                                                <li class="nav-item ms-2">
                                                        <a class="nav-link" href="#">Vendors</a>
                                                </li>
                                                <li class="nav-item ms-2">
                                                        <a class="nav-link" href="#">Photos</a>
                                                </li>

                                                <li class="nav-item ms-2">
                                                        <a class="nav-link" href="#">Real Weddings</a>
                                                </li>
                                                <li class="nav-item ms-2">
                                                        <a class="nav-link" href="#">Blog</a>
                                                </li>
                                                <li class="nav-item ms-2">
                                                        <a class="nav-link" href="#">Shop</a>
                                                </li>
                                                <li class="nav-item ms-2">
                                                        <a class="nav-link" href="#">E-InvitesE-Invites <img src='https://image.wedmegood.com/resized/30X/images/deals/store-new-badges.png' alt='icon' /></a>
                                                </li>
                                        </ul>
                                        <span class="navbar-text d-flex align-items-center justify-content-between nav-rigth" style={{ width: "15rem" }}>
                                                <div className='btn d-flex align-items-center justify-content-center' style={{ backgroundColor: "#b4245d", borderRadius: "50%", width: "2rem", height: "2rem" }}>
                                                        <img src='https://image.wedmegood.com/resized/14X/images/icons/search_icon_white.png' />
                                                </div>


                                                <div className='btn d-flex align-items-center justify-content-center' style={{ backgroundColor: "#b4245d", borderRadius: "7rem", width: "8rem", height: "2rem", color: "white" }}>
                                                        Login
                                                </div>

                                        </span>
                                </div>
                        </div>
                </nav>
        );
}

export default NavBar;
