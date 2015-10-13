import Ember from 'ember';

export default Ember.Component.extend({
	loadUser: function () {
		let userdata = Cookies.getJSON('userdata');
		if(userdata){
			console.log(userdata);
			this.set('hasUser',true);
			this.set('userdata',userdata);
		}
	},
	init: function () {
		this._super();
		this.loadUser();
	},
	userdata: {},
	hasUser: false,
	actions:{
		addUser(newUser){
			this.sendAction('action', newUser);
			this.set('hasUser',true);
			this.loadUser();
			//console.log(hasUser);
		}
	}
});
