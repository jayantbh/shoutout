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
	message: '',
	actions:{
		addUser(newUser){
			this.sendAction('action', newUser);
			this.set('hasUser',true);
			this.loadUser();
			//console.log(hasUser);
			var i = 3;
			this.set('message','This page will redirect to feeds in '+(i+1)+' second(s).');
			var self = this;
			var clr = setInterval(function () {
				self.set('message','This page will redirect to feeds in '+i+' second(s).');
				if(i === 0){
					clearInterval(clr);
					self.set('message',null)
					self.sendAction('redir');
				}
				i--;
			},1000);
		},
		deleteUserData: function () {
			Cookies.remove('userdata');
			this.set('hasUser',false);
		}
	}
});
