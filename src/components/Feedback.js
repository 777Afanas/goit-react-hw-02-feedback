import React from 'react';

class Feedback extends React.Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    handleGood = () => {
        this.setState(prevState => {
            return {
                good: prevState.good + 1,
            };
        });
    };

    handleNeutral = () => {
        this.setState(prevState => {
            return {
                neutral: prevState.neutral + 1,
            };
        });
    };

    handleBad = () => {
        this.setState(prevState => {
            return {
                bad: prevState.bad + 1,
            };
        });
    };

    render() {
        return (
            <div className="Feedback">
                
                <div className="Feedback-options">
                    <button type="button" onClick={this.handleGood}>Good</button>
                    <button type="button" onClick={this.handleNeutral}>Neutral</button>
                    <button type="button" onClick={this.handleBad}>Bad</button>
                </div>
                <p>Statistics</p> 
                <div>
                    <span className="Good-value">Good: {this.state.good}</span>
                    <span className="Neutral-value">Neutral: {this.state.neutral}</span>
                    <span className="Bad-value">Bad: {this.state.bad}</span>
                    <span className="Total-value">Total: 0</span>
                    <span className="Positive-feedback-value">Positive feedback: 0</span>
                </div> 
            </div>
        )
    };
}
export default Feedback 