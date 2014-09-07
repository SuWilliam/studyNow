var app = angular.module('studyNow', []);

app.controller('postsController', function () {
	var self = this;
	this.title = "";
	this.name = "";
	this.subject = ""; 
	this.note = "";
	this.latitude = "";
	this.longitude = "";

	this.getPosts = function(title, name, course, lat, lng, note){
		self.title = title;
	    self.name = name;
		self.subject = course; 
		self.latitude = lat;
		self.longitude = lng;
		self.note = note;
		console.log("get posts", self.title);

	}

//this.getPosts();

})