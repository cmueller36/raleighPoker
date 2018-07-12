  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCev2KS710mNeNrEiUKA57smUjhSMtycds",
    authDomain: "raleighpoker-ce845.firebaseapp.com",
    databaseURL: "https://raleighpoker-ce845.firebaseio.com",
    projectId: "raleighpoker-ce845",
    storageBucket: "raleighpoker-ce845.appspot.com",
    messagingSenderId: "972429569717"
  };

  firebase.initializeApp(config);


var database = firebase.database();

//collect data from user

var userFirstName = "";
var lastName = "";
var email = "";

$("#submitButton").on("click", function (event) {
    event.preventDefault();

    userFirstName = $("#firstName").val().trim();
    console.log(userFirstName);

});