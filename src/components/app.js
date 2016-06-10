import React, { Component } from 'react';
import HabitList from '../containers/habit-list';
import HabitDetail from '../containers/habit-detail';

export default class App extends Component {
    render() {
        return (
            <div>
                <header>HabitApp</header>
                <HabitList />
                <HabitDetail />
            </div>
        );
    }
}
