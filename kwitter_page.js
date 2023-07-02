var firebaseConfig = {
      apiKey: "AIzaSyDMMH6NsWSjmMekF5asoYpNMxAadIxN1qQ",
      authDomain: "kwitter-cb536.firebaseapp.com",
      databaseURL: "https://kwitter-cb536-default-rtdb.firebaseio.com",
      projectId: "kwitter-cb536",
      storageBucket: "kwitter-cb536.appspot.com",
      messagingSenderId: "506217663873",
      appId: "1:506217663873:web:e145e7698054fd6bc16c80"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


user_name=localStorage.getItem("user_name")
room_name=localStorage.getItem("room_name")

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
