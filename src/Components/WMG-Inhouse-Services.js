import React from 'react';
import { HeadingTilels } from '../Ui';

const WMGInhouseServices = () => {

        const data = [
                {
                        heading: "Wedsta",
                        subHeading: "WMG At Home, Family Makeup Services",
                        img: "https://image.wedmegood.com/resized-nw/570X/uploads/wmg_services/wedsta_dweb.jpg"
                },
                {
                        heading: "Genie Services",
                        subHeading: "Plan your dream wedding in your budget",
                        img: "https://image.wedmegood.com/resized-nw/570X/uploads/wmg_services/genie_dweb.jpg"
                },
                {
                        heading: "Venue Booking Service",
                        subHeahttps: "Best Price Guaranteed",
                        img: "https://image.wedmegood.com/resized-nw/570X/uploads/wmg_services/venue_dweb.jpg"
                }
        ]
        return (


                <div className='' >

                        <HeadingTilels />

                        <div className=' d-flex flex-wrap justify-content-between align-items-center m-1'>

                                {data.map((items, intex) => {

                                        return <div class="card m-1" key={intex}>
                                                <div className='m-2'>
                                                        <div className='zoom-div-WMG'>
                                                                <img class="card-img-top" src={`${items.img}`} alt="Card image cap" />

                                                        </div>

                                                        <div class="card-body text-center">
                                                                <h4>{items.heading}</h4>
                                                                <p>{items.subHeading}</p>
                                                                <div className=' d-flex justify-content-center align-items-center' >
                                                                        <p className='know-more ps-4 pe-4 pt-2 pb-2'>Know More</p>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                })}


                        </div>

                </div>
        );
}

export default WMGInhouseServices;
