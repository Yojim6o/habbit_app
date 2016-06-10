import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class HabitDetail extends Component {
    render() {
        if (!this.props.habit) {
            return <div>Select a habit to get started.</div>
        }

    return (
        <div>
            <h3>{this.props.habit.title}</h3>
            <div>Frequency: {this.props.habit.frequency} per day</div>
            <div>Score: {
                this.props.habit.scorecard.reduce(function(a,b){
                    return a + b;
                }) / this.props.habit.scorecard.length / this.props.habit.frequency
            }</div>
        </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        habit: state.activeHabit
    };
}

export default connect(mapStateToProps)(HabitDetail);
