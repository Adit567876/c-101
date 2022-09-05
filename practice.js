var firebaseConfig = {
    apiKey: "AIzaSyD6THakeFYQbo5y1CLkDYfxUhenePv9Fss",
    authDomain: "kwitter-7f36f.firebaseapp.com",
    databaseURL: "https://kwitter-7f36f-default-rtdb.firebaseio.com",
    projectId: "kwitter-7f36f",
    storageBucket: "kwitter-7f36f.appspot.com",
    messagingSenderId: "359581654876",
    appId: "1:359581654876:web:6e8f89124298a8080d2b99",
    measurementId: "G-J3PWT2R4L3"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
function adduser(){
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding username"
    });
}