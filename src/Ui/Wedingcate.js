import React from 'react';
import { WeddingCate } from '../Components';

import WedcatObj from "../Data/wedingCate"

const Wedingcate = () => {
        return (
                <div className=' container ' style={{ marginTop: "7rem" }}>


                        <div className='ms-5 me-5 '>
                                <div className='ms-3 me-3 mb-3 d-flex justify-content-between '>
                                        <h4>Wedding Categories</h4>
                                        <span className=' btn' style={{ color: "#b4245d", fontWeight: "500" }}>View all Categories &gt;</span>
                                </div>
                                <WeddingCate wedCat={WedcatObj} />
                        </div>

                </div>
        );
}

export default Wedingcate;
