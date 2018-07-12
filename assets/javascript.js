
// Initialize Firebase
var config = {
    apiKey: "AIzaSyDLzUT4UfZkHRCLTkxvaGN9ugOI7XIuoJg",
    authDomain: "inclass0531.firebaseapp.com",
    databaseURL: "https://inclass0531.firebaseio.com",
    projectId: "inclass0531",
    storageBucket: "",
    messagingSenderId: "145760898899"
  };

  firebase.initializeApp(config);


var database = firebase.database();


//collect data from user
var userFirstName = "";
var userlastName = "";
var useremail = "";

$("#submitButton").on("click", function (event) {

    event.preventDefault();

    userFirstName = $("#firstName").val().trim();
    userlastName = $("#lastName").val().trim();
    useremail = $("#email").val().trim();

    var temp = {
        first_name: userFirstName,
        last_name: userlastName,
        user_email: useremail
    }

    database.ref().push(temp);
});