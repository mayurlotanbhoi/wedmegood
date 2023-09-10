import React from 'react';
import { NavBar, Header, HomeBanner, CardSlider, WeddingCat, WMGInhouse, Download } from '../../Ui';
import { PopulaeVenluCard, PopularSearch, } from "../../Components"
// import HomeBanner from '../../Ui/HomeBanner';

const Home = () => {
        return (
                <div >
                        <Header />
                        <NavBar />
                        <HomeBanner />
                        <CardSlider />
                        <WeddingCat />
                        <WMGInhouse />
                        <Download />



                </div>
        );
}

export default Home;
