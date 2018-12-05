import React, { Component } from "react";
import Settings from './../presentational/settings/Settings';
import { connect } from 'react-redux';
import { changeBackCards, changeLevel } from '../../actions';
import { backCardState, levelState } from '../../selectors';

const mapStateToProps = (state) => {
    return {
        backCard: backCardState(state),
        level: levelState(state)
    }
};

class SettingsContainer extends Component {

    backCardState(state) {
        state.backCard = state.backCard ? state.backCard : 'back2';
        return state.backCard
    }

    handleChangeBackCard = (event) => {
        this.props.dispatch(changeBackCards(event.target.id))
    }

    handleChangeLevel = (event) => {
        this.props.dispatch(changeLevel(event.target.id))
    }

    render() {
        return (
            <Settings
                handleChangeBackCard={this.handleChangeBackCard}
                handleChangeLevel={this.handleChangeLevel}
            />
        )
    }
};

export default connect(
    mapStateToProps,
)(SettingsContainer);

export { SettingsContainer };
