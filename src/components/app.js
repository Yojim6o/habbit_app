import React, { Component } from 'react';
import HabitList from '../containers/habit-list';
import HabitDetail from '../containers/habit-detail';

import Loader from 'react-loader';

import API from '../api/api';

import store from '../store';

export default class App extends Component {
  constructor() {
    super();
    this.loading = false;

    this.getTodos();
  }

  render() {
    return (
      <div>
        <Loader loaded={!this.loading}>
          <header>HabitApp</header>
          <HabitList />
          <HabitDetail />
          <button id="btn-create" onClick={this.btnCreateClickHandler.bind(this)}>Create Todo</button>
        </Loader>
      </div>
    );
  }

  getTodos() {
    API.todos.getAll().then((result) => {
      store.dispatch({type: 'SET_HABITS', habits: result});
    });
  }

  btnCreateClickHandler() {
    this.loading = true;

    API.todos.create({
      title: 'Test Habit',
      complete: false
    }).then(result => {
      this.loading = false;

      this.getTodos();
    });
  }
}
