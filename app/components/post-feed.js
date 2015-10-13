import Ember from 'ember';

export default Ember.Component.extend({
	postStatus: 'loading',
	classNames: ['row'],
	didRender: function () {
		let secondLastPostTime = $(".post-item:nth-last-child(2) .row .post-time").text();
		let lastPost = $(".post-item:last");
		let lastPostTime = $(".post-item:last .row .post-time").text();

		if(lastPostTime>secondLastPostTime){
			$(".post-item:last").remove();
			lastPost.css('display','none');
			$(".post-feed").prepend(lastPost);
			lastPost.slideDown(500);
		}
		//console.log(this.get('posts'))
		//var l = this.get('posts').get('content').get('length');
		//console.log(l)
		//if(l){
		//	this.set('postStatus','available');
		//}
		//else{
		//	this.set('postStatus','unavailable');
		//}
		//console.log("Did Render");
	}
});
