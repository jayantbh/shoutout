import Ember from 'ember';

export default Ember.Component.extend({
	newUser: '',
	userFullName: '',
	gender: '',
	userDOB: '',
	today: new Date(),
	userInterests: '',
	init: function () {
		this._super();
		Ember.run.schedule('afterRender',this, function () {
			Ember.$('input').removeClass('valid');
			//console.log("After Render");
		})
	},
	actions: {
		genderCheck: function () {
			console.log(this.get('value'))
		},
		submitUser: function () {
			let newUser = this.get('newUser') || 'unnamed';
			let userFullName = this.get('userFullName') || 'The Nameless';
			let userDOB = this.get('userDOB') || 'Unknown DOB';
			let gender = this.get('gender') || 'Unknown Gender';
			let aboutUser = this.get('aboutUser') || 'Unknown Persona';

			console.log(newUser+' '+userFullName+' '+userDOB+' '+gender+' '+aboutUser);
			let userData = {
				newUser: newUser,
				userFullName: userFullName,
				userDOB: userDOB,
				gender: gender,
				aboutUser: aboutUser
			}
			if (newUser.length) {
				this.sendAction('action', userData);
				//console.log(newUser);
				this.set(newUser,null);
			}
		}
	}
});
