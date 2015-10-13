import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		deleteUserData: function () {
			this.sendAction('action')
		}
	}
});
