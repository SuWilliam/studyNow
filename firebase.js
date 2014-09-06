//include firebase in the head of html

var database = new Firebase("https://crackling-fire-8040.firebaseio.com/");

function addStudy(title, name, sub, lat, lng, notes){ //add a user's study session to firebase
	database.child(name);
	database.child(name).update({
			Title: title,
			Name: name,
			Subject: sub,
			Latitude: lat,
			Longitude: lng,
			Notes: notes
	});
}

function updateSubj(name, sub){
	database.child(name).update({
		Subject: sub
	})
}

function getStudyInfo(){ //retrieve the info about every study session in firebase
	database.on('child_added', function (snapshot) {
		var session = snapshot.val();
		var sessionName = session.Name;
		var sessionSubj = session.Subject;
		var sessionLat = session.Latitude;
		var sessionLng = session.Longitude;
	//addPin(sessionName, sessionSubj, sessionLat, sessionLng);
});
}

function deleteStudy(name){ //delete a completed study session from firebase
	database.child(name).remove();
}