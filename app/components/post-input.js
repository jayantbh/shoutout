import Ember from 'ember';

export default Ember.Component.extend({
	postTitle: '',
	postBody: '',
	actions: {
		submitPost(){
			let title = this.get('postTitle');
			let body = this.get('postBody');
			if(title.length>0 && body.length>0){
				this.sendAction('action',title,body);
			}
			else{
				Materialize.toast('Both post title and body need to be entered.',3000);
			}
			console.log(title)
		}
	}
});
