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

// Initialize the FirebaseUI Widget using Firebase.  
var ui = new firebaseui.auth.AuthUI(firebase.auth());

// FirebaseUI config.
var uiConfig = {
    signInSuccessUrl: "./views/landingpage.html",
    signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
};

// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);

var userFirstName = "";
var userlastName = "";
var useremail = "";
var userid = "";
var userbuyin = "";



$("#submitButton").on("click", function (event) {

    event.preventDefault();

    handleSignUp();

    userFirstName = $("#firstName").val().trim();
    userlastName = $("#lastName").val().trim();
    useremail = $("#email").val().trim();
    userbuyin = $("#inputGroupSelect01").val().trim();

    var temp = {
        first_name: userFirstName,
        last_name: userlastName,
        user_email: useremail,
        buyIn: userbuyin
    }

    database.ref().push(temp);

    window.location = '../index.html';

});

//grab the added information
database.ref().on("child_added", function (childSnaphot) {

    //add new rows to table
    $("#tablebody").append($("<tr><td>" +
        childSnaphot.val().first_name + "</td><td>" +
        childSnaphot.val().last_name +
        "</td></tr>"))

});

//SignUp new user
function handleSignUp() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (email.length < 4) {
        alert('Please enter an email address.');
        return;
    }
    if (password.length < 4) {
        alert('Please enter a password.');
        return;
    }
    // Sign in with email and pass.
    // [START createwithemail]
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/weak-password') {
            alert('The password is too weak.');
        } else {
            alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
    });
    // [END createwithemail]
}
