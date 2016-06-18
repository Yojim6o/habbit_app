import APIUtil from './util';

class TodosAPI {
  //-----------------------------------
  // Constructor
  //-----------------------------------
  constructor() {
    this.urlBase = 'http://localhost:3000';
  }

  //-----------------------------------
  // Methods
  //-----------------------------------
  makeURL(url) {
    return this.urlBase + url;
  }

  getAll() {
    return APIUtil.wrap({
      url: this.makeURL('/todos')
    });
  }

  create(data) {
    return APIUtil.wrap({
      type: 'POST',
      data: JSON.stringify(data),
      dataType: 'json',
      processData: false,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      url: this.makeURL('/todos')
    });
  }

  delete(id) {
    return APIUtil.wrap({
      type: 'DELETE',
      url: this.makeURL('/todo/' + id)
    });
  }
}

export default TodosAPI;