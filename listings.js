var app = angular.module('studyNow', []);

app.controller('postsController', function () {

	this.title = "";
	this.name = "";
	this.subject = ""; 
	this.note = "";
	this.latitude = "";
	this.longitude = "";

	this.getPosts = function(title, name, course, lat, lng, note){
		console.log("get posts");
		this.title = title;
		this.name = name;
		this.subject = course; 
		this.latitude = lat;
		this.longitude = lng
		this.note = note;
	}

//this.getPosts();

})