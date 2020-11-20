import React, {useState} from 'react';

import GameList from '../components/common/GameList/GameList';
import {GameListWrapper} from '../components/common/GameList/style';
import Container from 'react-bootstrap/Container';


export const Assets = () => {
    const data = [
        {
            id: 1001,
            title: "Demons Souls",
            category: "Action Role Playing",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris maximus posuere risus vel semper. Etiam tempus arcu non velit dignissim semper in ac turpis.",
            backgroundImage: "demons.jpg",
            gameLogo: "demonslogo.png",
            likes: 0,
            darkTheme: false,
            screenshots: [
                "1.jpg",
                "2.jpg",
                "3.jpg"
            ],
        },
        {
            id: 1002,
            title: "Horizon Forbidden West",
            category: "Action Role Playing",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris maximus posuere risus vel semper. Etiam tempus arcu non velit dignissim semper in ac turpis.",
            backgroundImage: "forbidden-west.jpg",
            gameLogo: "",
            likes: 2,
            darkTheme: false,
            screenshots: [
                "1.jpg",
                "2.jpg",
                "3.jpg"
            ],
        },
        {
            id: 1003,
            title: "Ratchet & Clank a Crack In Time",
            category: "Adventure platformer",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris maximus posuere risus vel semper. Etiam tempus arcu non velit dignissim semper in ac turpis.",
            backgroundImage: "ratchet.jpg",
            gameLogo: "",
            likes: 0,
            darkTheme: false,
            screenshots: [
                "1.jpg",
                "2.jpg",
                "3.jpg"
            ],
        },
        {
            id: 1004,
            title: "Spiderman Miles Morales",
            category: "Action Adventure",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris maximus posuere risus vel semper. Etiam tempus arcu non velit dignissim semper in ac turpis.",
            backgroundImage: "miles-morales.jpg",
            gameLogo: "",
            likes: 0,
            darkTheme: false,
            screenshots: [
                "1.jpg",
                "2.jpg",
                "3.jpg"
            ],
        },
        {
            id: 1005,
            title: "Cyberpunk 2077",
            category: "First Person Shooter",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris maximus posuere risus vel semper. Etiam tempus arcu non velit dignissim semper in ac turpis.",
            backgroundImage: "cyber.jpg",
            gameLogo: "",
            likes: 0,
            darkTheme: true,
            screenshots: [
                "1.jpg",
                "2.jpg",
                "3.jpg"
            ],
        }
        ]

    return (
        <React.Fragment>
            <GameListWrapper>
                <Container>
                    <GameList games={data}/>
                </Container>
            </GameListWrapper>
        </React.Fragment>
    );
};