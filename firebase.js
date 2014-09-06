//include firebase in the head of html

var database = new Firebase("https://crackling-fire-8040.firebaseio.com/");

function addStudy(name){
	database.child(name);
	console.log("yooo add the user's name");
}

addStudy("Danielle");