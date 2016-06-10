import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class HabitDetail extends Component {
	render() {
		if (!this.props.habit) {
			return <div>Select a habit to get started.</div>
		}

		return (
			<div>
				<h3>Details for:</h3>
				<div>Title: {this.props.habit.title}</div>
				<div>Frequency: {this.props.habit.frequency} per day</div>
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
