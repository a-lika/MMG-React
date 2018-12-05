import React, { Component } from "react";
import Timer from './../presentational/timer/Timer';
import { connect } from 'react-redux';
import { gameOver } from '../../actions';

const mapStateToProps = (state) => {
    return {
        level: state.level,
        restart: state.restart,
        gameOver: state.gameOver,
        firstName: state.firstName,
        lastName: state.lastName,
        email: state.email,
    }
};

class TimerContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            minutes: 0,
            seconds: 0,
            score: 0,
        }
    }

    tick = () => {
        let countSeconds = this.state.seconds + 1;
        let countMinutes = this.state.minutes;
        let countScore = this.state.score + 1;

        if (countSeconds === 60) {
            countSeconds = 0;
            countMinutes += 1;
            if (countMinutes === 60) {
                clearInterval(this.timer)
            }
        }
        this.setState({
            minutes: countMinutes,
            seconds: countSeconds,
            score: countScore,
        })
    }

    update = () => {
        clearInterval(this.timer);
        this.setState({
            minutes: 0,
            seconds: 0,
        });
    }

    clearForNewGame = () => {
        this.update();
        this.timer = setInterval(this.tick, 1000);
    }

    clearForever = () => {
        clearInterval(this.timer);
    }

    componentDidMount = () => {
        this.timer = setInterval(this.tick, 1000);
    }

    componentWillUnmount = () => {
        clearInterval(this.timer)
    }

    componentDidUpdate = () => {
        if (this.props.restart) {
            this.clearForNewGame();
            this.setState({ score: 0 });
        }

        if (this.props.gameOver) {
            this.props.dispatch(gameOver(false));
            this.clearForever();

            fetch("http://mmg-score.herokuapp.com", {
                method: "post",
                headers: {
                    "Access-Control-Allow-Credentials": "true",
                    "Access-Control-Allow-Origin": "cors_url",
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "username": `${this.props.firstName}`,
                    "email": `${this.props.email}`,
                    "score": `${this.state.score}`
                })
            })
        }
    }

    render() {
        let minutes = this.state.minutes;
        let seconds = this.state.seconds;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        return (
            <Timer
                minutes={minutes}
                seconds={seconds}
            />
        )
    }
};

export default connect(
    mapStateToProps
)(TimerContainer);

export { TimerContainer };
