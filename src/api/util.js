import Q from 'q';
import $ from 'jquery';

export default {
  wrap: (options) => {
    var promise = $.ajax(options);

    // then means success
    promise.then(result => {
      console.log('API RES:', result);
      return result;
    });

    // if failure
    promise.fail((status, details, err) => {
      console.error('API ERR:', err);
    });

    return promise;
  }
};
