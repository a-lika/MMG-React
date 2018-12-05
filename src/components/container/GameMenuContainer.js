import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';
import GameMenu from '../presentational/game-menu/GameMenu';
import GameField from '../presentational/game-field/GameField';
import { SettingsContainer } from './SettingsContainer';
import { ScoreTableContainer } from './ScoreTableContainer';
import { restartGame } from '../../actions';

const mapStateToProps = (state) => {
    return {
        firstName: state.firstName,
        lastName: state.lastName,
        backCard: state.backCard,
        level: state.level,
        restart: state.restart,
        users: state.topUsers,
        gameOver: state.gameOver,
    }
};

function SettingsInfo(props) {
    return (
        <GameField
            content={
                <Fragment>
                    <h3 className="choose">The changes will be applied in the next game</h3>
                    <SettingsContainer {...props} />
                </Fragment>
            }
            handleClickClose={props.handleClickClose}
        />
    )
};

function ScoreInfo(props) {
    return (
        <GameField
            content={
                <Fragment>
                    <ScoreTableContainer {...props} />
                </Fragment>
            }
            handleClickClose={props.handleClickClose}
        />
    )
};

class GameMenuContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentChild: '',
        }
    }

    handleMenuClick = (event) => {
        switch (event.target.id) {
            case 'new-game': {
                this.props.dispatch(restartGame(true));
                break;
            }
            case 'options': {
                this.setState({ currentChild: event.target.id });
                this.props.dispatch(restartGame(false));
                break;
            }
            case 'score': {
                this.setState({ currentChild: event.target.id });
                this.props.dispatch(restartGame(false));
                break;
            }
        }
    }

    handleClickClose = (event) => {
        this.setState({ currentChild: '' })
    }

    render() {
        const name = `${this.props.firstName} ${this.props.lastName}`;

        let InfoBlock = null;

        if (this.state.currentChild) {
            switch (this.state.currentChild) {
                case 'options': {
                    InfoBlock = <SettingsInfo {...this.props}
                        handleClickClose={this.handleClickClose} />;
                    break;
                }
                case 'score': {
                    InfoBlock = <ScoreInfo {...this.props}
                        handleClickClose={this.handleClickClose} />;
                    break;
                }
            }
        }

        return (
            <Fragment>
                <GameMenu
                    userName={name}
                    props={this.props}
                    handleMenuClick={this.handleMenuClick}
                />

                <div className="game-field">
                    {InfoBlock}
                </div>
            </Fragment>
        )
    }
};

export default connect(
    mapStateToProps
)(GameMenuContainer);

export { GameMenuContainer };
