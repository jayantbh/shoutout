import Ember from 'ember';

export default Ember.Route.extend({
	beforeModel: function () {
		let userdata = Cookies.getJSON('userdata');
		if(userdata){
			//load some data into the index template
		}
		else{
			this.transitionTo('profile');
			console.log('no user');
		}
	},
	model(){
		return this.store.findAll('post-item');
	},
	actions: {
		addPost(title,body){
			let userdata = Cookies.getJSON('userdata');
			this.store.createRecord('post-item',{
				title: title,
				body: body,

				userFullName: userdata.userFullName,
				gender: userdata.gender,
				newUser: userdata.newUser,
				aboutUser: userdata.aboutUser,
				userDOB: userdata.userDOB
			}).save();
			console.log(title)
		}
	}
});
