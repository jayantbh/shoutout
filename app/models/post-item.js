import DS from 'ember-data';

export default DS.Model.extend({
	title: DS.attr('string'),
	body: DS.attr('string'),
	userFullName: DS.attr('string'),
	gender: DS.attr('string'),
	newUser: DS.attr('string'),
	aboutUser: DS.attr('string'),
	userDOB: DS.attr('string')
});
