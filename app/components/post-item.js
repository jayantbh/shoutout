import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ['row'],
	willRender: function () {
		console.log('Post rendered!')
	}
});
