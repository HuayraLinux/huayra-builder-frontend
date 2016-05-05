import JSONAPIAdapter from 'ember-data/adapters/json-api';

export default JSONAPIAdapter.extend({
  host: 'http://192.168.250.141:8000',
  namespace: 'api'
});
