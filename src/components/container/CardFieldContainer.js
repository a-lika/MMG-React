import React, { Component, Fragment } from "react";
import CardField from "../presentational/card-field/CardField";
import { connect } from 'react-redux';
import { restartGame, gameOver } from '../../actions';
import CongratsInfo from '../presentational/congrats/CongratsInfo';

const mapStateToProps = (state) => {
    return {
        backCard: state.backCard,
        level: state.level,
        restart: state.restart,
        gameOver: state.gameOver,
    }
};

class CardFieldContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gameOver: false,
        };
        this.allowClick = true;
    }

    moveCard = (card, cardField, showGameOver) => {
        if (card.classList.contains('card-container') && this.allowClick) {
            let cardClass = card.getAttribute('class');
            cardClass = cardClass.split(' ', 3)[1];
            card.classList.add('flip-card');
            this.checkFlipCard(cardClass, cardField, showGameOver)
        }
    }

    checkFlipCard = (nameClass, cardField, showGameOver) => {
        let childrenArray = Array.prototype.slice.call(cardField.children, 0);
        let flipCardArray = childrenArray.filter(el => el.classList.contains('flip-card'));
        let transformCardArray = childrenArray.filter(el => el.classList.contains('transform-card'));

        const allowTrue = () => {
            this.allowClick = true;
        };

        const closeCard = () => {
            flipCardArray.forEach(el => this.removeFlipCard(el));
            allowTrue();
        };

        if ((flipCardArray.length === 2)
            && (flipCardArray[0].classList.contains(nameClass) !== flipCardArray[1].classList.contains(nameClass))) {
            this.allowClick = false;
            setTimeout(closeCard, 600);

        } else if ((flipCardArray.length === 2)
            && (flipCardArray[0].classList.contains(nameClass) === flipCardArray[1].classList.contains(nameClass))) {
            this.allowClick = false;
            flipCardArray.forEach(el => {
                setTimeout(this.removeFlipCard, 600, el);
                el.classList.add('transform-card')
            });
            setTimeout(allowTrue, 700);

            if (transformCardArray.length === childrenArray.length - 2) {
                this.showGameOver();
            }
        }
    }

    removeFlipCard = (n) => {
        n.classList.remove('flip-card');
    }
    
    shouldComponentUpdate = (nextProps) => {
        const restart = this.props.restart;
        return restart !== nextProps.restart;
    }

    componentWillUpdate = () => {
        const cardsField = document.getElementById("card-field");
        if (!this.state.gameOver) {
            this.updateGameField(cardsField);
        }
    }

    componentDidUpdate = () => {
        if (this.props.restart) {
            this.forceUpdateHandler();
            this.props.dispatch(restartGame(false));
            this.hideGameOver();
        }
    }

    updateGameField = (gamefield) => {
        let childrenArray = Array.prototype.slice.call(gamefield.children, 0);
        childrenArray.forEach(el => {
            el.classList.remove('flip-card');
            el.classList.remove('transform-card');
        })
    }

    handleClickCard = (event) => {
        let card = event.target.parentNode.parentNode;
        this.moveCard(card, event.currentTarget, this.showGameOver, this.hideGameOver);
    }

    showGameOver = () => {
        this.props.dispatch(gameOver(true));
        this.setState({ gameOver: true });
    }

    hideGameOver = () => {
        this.setState({ gameOver: false });
    }

    render() {
        const gameOver = this.state.gameOver;
        return (
            <Fragment>
                {gameOver ? <CongratsInfo /> :
                    <CardField
                        backCard={this.props.backCard}
                        level={this.props.level}
                        handleClickCard={this.handleClickCard}
                    />
                }
            </Fragment>
        )
    }
};

export default connect(
    mapStateToProps,
)(CardFieldContainer);

export { CardFieldContainer };

