import Todos from './todos';

class API {
  constructor() {
    this.todos = new Todos();
  }
}

export default new API();