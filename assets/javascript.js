
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

var uiConfig = {
    callbacks: {
        signInSuccessWithAuthResult: function (authResult, redirectUrl) {
            // User successfully signed in.
            // Return type determines whether we continue the redirect automatically
            // or whether we leave that to developer to handle.
            return true;
        },
        uiShown: function () {
            // The widget is rendered.
            // Hide the loader.
            document.getElementById('loader').style.display = 'none';
        }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl: '<url-to-redirect-to-on-success>',
    signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.PhoneAuthProvider.PROVIDER_ID
    ],
    // Terms of service url.
    tosUrl: '<your-tos-url>'
};

// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);


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

//grab the added information
database.ref().on("child_added", function (childSnaphot) {

    //add new rows to table
    $("#tablebody").append($("<tr><td>"
    +childSnaphot.val().first_name+"</td><td>"
    +childSnaphot.val().last_name
    +"</td></tr>"))
  
  });

//   //gify image
//   // Storing our giphy API URL for a random cat image
//   var imageSearch = "poker"
//   var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag="+imageSearch;

//   // Perfoming an AJAX GET request to our queryURL
//   $.ajax({
//     url: queryURL,
//     method: "GET"
//   })

//   // After the data from the AJAX request comes back
//     .then(function(response) {
//         console.log(response);

//     // Saving the image_original_url property
//       var imageUrl = response.data.image_original_url;

//       // Creating and storing an image tag
//       var catImage = $("<img>");

//       // Setting the catImage src attribute to imageUrl
//       catImage.attr("src", imageUrl);
//       catImage.attr("alt", "poker image");

//       // Prepending the catImage to the images div
//       $("#images").prepend(catImage);
//     });