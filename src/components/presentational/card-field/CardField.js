import './style.scss';
import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card/Card';

import cakeImg from '../../../images/cake.jpg';
import chameleonImg from '../../../images/chameleon.jpg';
import bananImg from '../../../images/banan.jpg';

import img1 from './images/img_1.jpg';
import img2 from './images/img_2.jpg';
import img3 from './images/img_3.jpg';
import img4 from './images/img_4.jpg';
import img5 from './images/img_5.jpg';
import img6 from './images/img_6.jpg';
import img7 from './images/img_7.jpg';
import img8 from './images/img_8.jpg';
import img9 from './images/img_9.jpg';
import img10 from './images/img_10.jpg';
import img11 from './images/img_11.jpg';
import img12 from './images/img_12.jpg';

const arrayImg = [null, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
};

const CreateCard = ({ backCard, level, handleClickCard }) => {
    const cardsArray = [];

    for (let i = 1; i <= 2; i++) {
        for (let j = 1; j <= level.count; j++) {
            cardsArray.push(<Card frontImage={arrayImg[j]} backImage={backCard.img} borderC={backCard.border} identify={`card_${j}`} key={`${i}${j}`} />)
        }
    }
    shuffleArray(cardsArray);

    return (
        <div className="card-field" id="card-field" style={{ width: level.fieldSize + 'px' }} onClick={handleClickCard}>{cardsArray}</div>
    )
};

const CardField = ({ backCard, level, handleClickCard }) => {
    let backImage = createBackCard(backCard);
    let levelInfo = createLevel(level);

    return (
        <CreateCard
            backCard={backImage}
            level={levelInfo}
            handleClickCard={handleClickCard}
        />
    )
};

const createBackCard = (backCard) => {
    let backImage = {};

    switch (backCard) {
        case "back1": {
            backImage.img = chameleonImg;
            backImage.border = 'green';
            break;
        }
        case "back2": {
            backImage.img = bananImg;
            backImage.border = 'yellow';
            break;
        }
        case "back3": {
            backImage.img = cakeImg;
            backImage.border = 'pink';
            break;
        }
        default: {
            backImage.img = bananImg;
            backImage.border = 'yellow';
        }
    }
    return backImage;
};

const createLevel = (level) => {
    let levelInfo = {};

    switch (level) {
        case "level1": {
            levelInfo.count = 5;
            levelInfo.fieldSize = 950;
            break;
        }
        case "level2": {
            levelInfo.count = 9;
            levelInfo.fieldSize = 1100;
            break;
        }
        case "level3": {
            levelInfo.count = 12;
            levelInfo.fieldSize = 1400;
            break;
        }
        default: {
            levelInfo.count = 9;
            levelInfo.fieldSize = 1100;
        }
    }
    return levelInfo;
};

CardField.propTypes = {
    backCard: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
    handleClickCard: PropTypes.func.isRequired,
};

export default CardField;
