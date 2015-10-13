import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		addUser(userData){
			//var hasUser = this.store.findRecord('user',{filter: {name:newUser}});
			//this.store.createRecord('user',{
			//	name: newUser
			//}).save();
			Cookies.set('userdata',userData);
			//this.store.find('user').then(
			//	function (data) {
			//		data = data.get('content');
			//		$.each(data, function (i, v) {
			//			console.log(i)
			//			console.log(v._data.name)
			//		});
			//	},
			//	function () {
			//		console.log("nothing here")
			//	}
			//);
		}
	}
});
