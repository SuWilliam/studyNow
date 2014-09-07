
var app = angular.module('studyNow', []);
app.controller('postsController', function ($scope) {
	// $scope.posts = [];
	var posts = [];


	// $scope.posts=[
	// {number: 1, title: "hi", name:"Bob", course: "Math 116", note:"In the UGLI near the back.", location: "University of Michigan Shapiro Library Ann Arbor, MI"},
	// {number: 2, title: "Need python help", name:"Ann", course: "Physics 140", note:"Having trouble with the 4th tutorial."},
	// {number: 3, title: "Anyone want to proofread my essay?", name:"Sarah", course: "English 125", note:"Give me your opinions!"},
// ,]

	getStudyInfo(function(data) {
		data.number = posts.length;
		posts.push(data);
		$scope.posts = posts;
		console.log($scope.posts);
		$scope.$apply();
		// console.log('data', data);
	});
}) 


/*app.controller('postsController', function () {
	var self = this;
	this.title = "";
	this.name = "";
	this.subject = ""; 
	this.note = "";
	this.latitude = "";
	this.longitude = "";*/

// var getPosts = function(title, name, course, lat, lng, note){
// 		self.title = title;
// 	    self.name = name;
// 		self.subject = course; 
// 		self.latitude = lat;
// 		self.longitude = lng;
// 		self.note = note;
// 		console.log("get posts", self.title);

// 	}

//this.getPosts();
