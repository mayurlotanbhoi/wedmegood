import React from 'react';
import Phone from "./Phone-num"

const DownloadApp = () => {
        return (
                <div className='container'>
                        <div className='m-5 ps-5 pe-5 download-app '>
                                <div className='p-5 flex-md-row d-flex flex-column justify-content-between' style={{ width: 'inherit' }}>
                                        <div>
                                                <h4>Download The WedMeGood Mobile App Today!</h4>
                                                <div className=' d-flex justify-content-between '>
                                                        <div className='download-app-icon'>
                                                                <img src='https://image.wedmegood.com/resized/20X/images/banner/light_bulb.svg' />
                                                                Save Wedding Ideas
                                                        </div>
                                                        <div className='download-app-icon'>
                                                                <img src='https://image.wedmegood.com/resized/20X/images/banner/light_bulb.svg' />
                                                                Shortlist Vendors
                                                        </div>
                                                        <div className='download-app-icon'>
                                                                <img src='https://image.wedmegood.com/resized/20X/images/banner/light_bulb.svg' />
                                                                Get Free Wedding Checklist
                                                        </div>
                                                </div>

                                                <h6>You will receive an SMS with a link to download the App</h6>
                                                <div className='mt-3 '>
                                                        <select style={{
                                                                backgroundColor: "#ffebe8",
                                                                border: "none",
                                                                borderBottom: "2px solid black",
                                                                outline: "none",
                                                                marginRight: "10px"
                                                        }} ><option>nbd</option>
                                                                <option>nbd</option>
                                                                <option>nbd</option>
                                                                <option>nbd</option>


                                                        </select>


                                                        <input
                                                                type='number'
                                                                style={{
                                                                        backgroundColor: "#ffebe8",
                                                                        border: "none",
                                                                        borderBottom: "2px solid black",
                                                                        outline: "none",
                                                                        width: "300px"
                                                                }}
                                                        />
                                                        {/* <div style={{ height: '10px', width: "100%", color: "black" }}></div> */}
                                                </div>


                                                <div className='btn-container  w-50 mt-5'>
                                                        Download App
                                                </div>

                                                <div className=' text-center mt-3 ' style={{ marginLeft: "-300px" }}>
                                                        <i class=" btn fa fa-apple " style={{ fontSize: "24px" }}></i>
                                                        <i class=" btn fa fa-android " style={{ fontSize: "24px" }}></i>
                                                </div>


                                        </div>
                                        <img
                                                style={{ width: '15%', height: 'auto' }} // Adjust the width and height as needed
                                                src='https://image.wedmegood.com/resized/500X/images/banner/download_app.jpg'
                                                alt='App Download'
                                        />
                                </div>
                        </div>
                </div >
        );
};

export default DownloadApp;
