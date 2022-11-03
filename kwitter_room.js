var firebaseConfig = {
      apiKey: "AIzaSyCIR_n9SbISdywGi4rKn4L-t0bk9KWb51M",
      authDomain: "leafi-a1b9f.firebaseapp.com",
      databaseURL: "https://leafi-a1b9f-default-rtdb.firebaseio.com",
      projectId: "leafi-a1b9f",
      storageBucket: "leafi-a1b9f.appspot.com",
      messagingSenderId: "1041470458268",
      appId: "1:1041470458268:web:b055e87e852e071ad72059"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome, "+user_name+"!";
//ADD YOUR FIREBASE LINKS HERE
 function addRoom(){
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
 }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;

      //Start code;
      row = "<div class='room_name' id = "+Room_names+" onclick = 'redirectToRoomName(this.ad)' >#"+ Room_names +"</div><hr>";
console.log("Room Name - " + Room_names)
document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}