import React from 'react';
import Carousel from 'react-multi-carousel';
import { HeadingTilels } from '../Ui';

const PopulaeVenluCard = ({ Popular }) => {


        const responsive = {
                desktop: {
                        breakpoint: { max: 3000, min: 1024 },
                        items: 3,
                        paritialVisibilityGutter: 60
                },
                tablet: {
                        breakpoint: { max: 1024, min: 464 },
                        items: 2,
                        paritialVisibilityGutter: 50
                },
                mobile: {
                        breakpoint: { max: 464, min: 0 },
                        items: 1,
                        paritialVisibilityGutter: 30
                }
        };


        return (
                <div className='container mt-5' style={{ marginBottom: "7rem" }}>

                        <div className='ms-5 me-5' >
                                <HeadingTilels />
                                <Carousel

                                        itemClass="image-item"
                                        responsive={responsive}
                                >
                                        {Popular.map((item, index) => {
                                                return (
                                                        <div key={index} class=" d-flex justify-content-between " style={{ width: "23rem" }}>
                                                                <img style={{ width: "12rem", height: "7rem", borderRadius: "0.5rem" }} src={item.img} class="card-img-top" alt="..." />
                                                                <div class=" ">
                                                                        <h6 class="card-title">{item.heading}</h6>
                                                                        <a href='#'><small> Mumbai | </small></a>
                                                                        <a href='#'><small> banglore |</small> </a>
                                                                        <a href='#'> <small>Pune  </small></a>
                                                                </div>
                                                        </div>
                                                );
                                        })}
                                </Carousel>
                        </div>
                </div>
        );
}

export default PopulaeVenluCard;

{/* <div class=" d-flex justify-content-between" style={{ width: "23rem" }}>
                                                        <img style={{ width: "12rem", height: "7rem", borderRadius: "0.5rem" }} src="https://source.unsplash.com/collection/190727/1600x900" class="card-img-top" alt="..." />
                                                        <div class=" ">
                                                                <h5 class="card-title">Card title snjs</h5>
                                                                <a href='#'><small> Mumbai | </small></a>
                                                                <a href='#'><small> banglore |</small> </a>
                                                                <a href='#'> <small>Pune  </small></a>
                                                        </div>
                                                </div> */}
