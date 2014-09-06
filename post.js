// Checks to see whether the form fields has been filled in or not
function validatePost() {
alert("HI");
return;

    var title = document.forms["postListing"]["postTitle"].value;
    if (title == null || title == "") {
        alert("Please enter a title for this post.");
        return false;
        }
    var location = document.forms["postListing"]["postLocation"].value;
        if (location == null || location == "") {
        alert("Please enter in the location of where you're studying.");
        return false;
        }
    var course = document.forms["postListing"]["postCourse"].value;
        if (course == null || course == "") {
        alert("Please enter in the class you're studying for in this post listing.");
        return false;
        }
	var note = document.forms["postListing"]["postNote"].value;
        if (note == null || note == "") {
        alert("Please enter a description for your post listing.");
        return false;
        }
    }
	
// Submits the form data
function addListing(){
	
}