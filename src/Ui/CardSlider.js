import React from 'react';
import { PopulaeVenluCard, PopularSearch } from "../Components/index"
import { HeadingTilels } from './index';
import Popular from "../Data/Popular"
import Popularsearch from "../Data/Popular-search"



const CardSlider = () => {
        return (
                <div className=' container'>
                        <PopulaeVenluCard Popular={Popular} />
                        <PopularSearch Popularsearch={Popularsearch} />
                </div>

        );
}

export default CardSlider


