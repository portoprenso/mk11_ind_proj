import React from 'react';
import MainBanner from "../MainBanner/MainBanner";
import Header from "../Header/Header";
import GameDescBody from "../GameDescBody/GameDescBody";
import Footer from '../Footer/Footer';

const HomePage = () => {
    return (
        <div>
            <Header />
            <MainBanner />
            <GameDescBody />
            <Footer />
        </div>
    );
};

export default HomePage;