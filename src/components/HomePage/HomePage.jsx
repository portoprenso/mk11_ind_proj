import React from 'react';
import MainBanner from "../MainBanner/MainBanner";
import Header from "../Header/Header";
import GameDescBody from "../GameDescBody/GameDescBody";

const HomePage = () => {
    return (
        <div>
            <Header />
            <MainBanner />
            <GameDescBody />
        </div>
    );
};

export default HomePage;