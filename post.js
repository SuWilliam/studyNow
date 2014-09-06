// Checks to see whether the form fields has been filled in or not
function validatePost() {
//alert("HI");
    var name = document.getElementById("name").value;
    if (name == null || name == "") {
        alert("Please enter a title for this post.");
        return false;
        }
    //var title = document.forms["postListing"]["postTitle"].value;
    var title = document.getElementById("title").value;
    if (title == null || title == "") {
        alert("Please enter a title for this post.");
        return false;
        }
    //var location = document.forms["postListing"]["postLocation"].value;
    var location = document.getElementById("location").value;
        if (location == null || location == "") {
        alert("Please enter in the location of where you're studying.");
        return false;
        }
    //var course = document.forms["postListing"]["postCourse"].value;
    var course = document.getElementById("course").value;
        if (course == null || course == "") {
        alert("Please enter in the class you're studying for in this post listing.");
        return false;
        }
	//var note = document.forms["postListing"]["postNote"].value;
    var note = document.getElementById("message").value;
    codeAddress(location, title, name, course, note);
    console.log("location coordinates:", locationCoords);
    //var lat = locationCoords[0];
   // var lng = locationCoords[1];
    //addStudy(title, name, course, lat, lng, note);

    }