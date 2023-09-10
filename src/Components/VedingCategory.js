import React from 'react';

const VendingCategory = ({ wedCat }) => {
        return (
                <div className='d-flex justify-content-between mb-5 ms-3 me-3 flex-wrap '>

                        {wedCat.map((cat, index) => {

                                return (
                                        <div className='d-flex justify-content-center   mb-3 ' style={{ backgroundColor: `${cat.backColor}` }}>
                                                <div className='d-flex align-items-center   ms-3 zoom-div-cate'>
                                                        <div style={{ lineHeight: "0.5rem", }}>
                                                                <h5>{cat.title}</h5>
                                                                <small>{cat.subTitel}</small>
                                                        </div>



                                                        <img className=' '
                                                                src={`${cat.img}`}
                                                                alt='Image'
                                                        />
                                                </div>
                                        </div>
                                )

                        })}

                </div>
        );
};

export default VendingCategory;
