import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  status: attr('string'),
  created: attr('date'),
  commitHash: attr('string'),
  commitMessage: attr('string'),
  dockerID: attr('string'),
  package: belongsTo("package")
});
