import React, {useState} from 'react';
import {gameData} from "../data";

import HeroSection from '../components/pages/Game/HeroSection/HeroSection';
import {useParams} from "react-router-dom";

export const Game2 = () => {

    const data =
        {
            id: 1001,
            title: "Demons Souls",
            category: "Action Role Playing",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris maximus posuere risus vel semper. Etiam tempus arcu non velit dignissim semper in ac turpis.",
            bgImage: "demons.jpg",
            gameLogo: "demonslogo.png",
            likes: 0,
            darkTheme: false,
            screenshots: [
                "1.jpg",
                "2.jpg",
                "3.jpg"
            ],
        }

    let { gameId } = useParams();

    return (
        <React.Fragment>
            <HeroSection game={data}/>
        </React.Fragment>
    );
};