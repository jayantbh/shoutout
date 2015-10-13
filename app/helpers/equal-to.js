import Ember from 'ember';

export function equalTo(params/*, hash*/) {
  if(params[0] === params[1])
	return true;
}

export default Ember.Helper.helper(equalTo);
