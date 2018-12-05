import React, { Component } from "react";
import { connect } from 'react-redux';
import { CardFieldContainer } from './CardFieldContainer';
import { GameMenuContainer } from './GameMenuContainer';
import { getTopUsers } from '../../actions';
import { findUsers } from '../../selectors';

const mapStateToProps = (state) => {
    return {
        firstName: state.firstName,
        lastName: state.lastName,
        email: state.email,
        backCard: state.backCard,
        level: state.level,
        restart: state.restart,
        users: state.topUsers,
        gameOver: state.gameOver,
    }
};

class GameFieldContainer extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount = () => {
        findUsers(resolve => resolve)
            .then(response => {
                this.props.dispatch(getTopUsers(response))
            })
    }

    render() {
        return (
            <div className="game-container">
                <GameMenuContainer {...this.props} />
                <CardFieldContainer {...this.props} />
            </div>
        )
    }
};

export default connect(
    mapStateToProps
)(GameFieldContainer);

export { GameFieldContainer };
