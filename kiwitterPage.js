//LINKS FIREBASE
const firebaseConfig = {
      apiKey: "AIzaSyCJDj5WCjpqvgCdafQ5tbW3Rm3i2WkJSTk",
      authDomain: "aula93-c60d7.firebaseapp.com",
      databaseURL: "https://aula93-c60d7-default-rtdb.firebaseio.com",
      projectId: "aula93-c60d7",
      storageBucket: "aula93-c60d7.appspot.com",
      messagingSenderId: "913160914907",
      appId: "1:913160914907:web:f762bd06d089d4da4749fe"
    };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Pegar nome usuário e sala da memória local
var userName = localStorage.getItem("userName")
var roomName = localStorage.getItem("nomeSala")


function send(){
  var mensagem = document.getElementById("msg").vallue
  firebase.database().ref(roomName).push({
      name:userName,
      message:mensagem,
      like:0
  })
  document.getElementById("msg").vallue = ""
}

function getData() { firebase.database().ref("/"+roomName).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebaseMessageId = childKey;
         messageData = childData;
//Início do código
console.log(firebaseMessageId)
console.log(messageData)
var nome = messageData['name']
var mensagem = messageData['message']
var curtida = messageData['like']
var nomeTag = "<h4>"+name+"<img class = 'user_tick 'src = 'tick.png'></h4>"
var messageTag = "<h4 class = 'message_h4'>"+message+"</h4>"
var likeBtn = "<button class = 'btn btn-warning' id = '"+firebaseMessageId+"vallue = "+curtida+"onclick = 'updateLike(this.id)''>"
var tagLike = "<span class ='glyphicon glyphicon-thumbs-up'>like: "+curtida+" </span></button>"
var linha = nomeTag+ messageTag+ tagLike
document.getElementById("output").innerHTML += linha
//Fim do código
      } });  }); }
getData();

function updateLike(messageId){
var buttonId = messageId
var likes = document.getElementById(buttonId).vallue
var updateLike = Number(likes)+1
firebase.database().ref(roomName).child(messageId).update({
  like: updateLike
})


}

function logout(){
  localStorage.removeItem("userName")
  localStorage.removeItem("roomName")
  window.location = "index.html"}