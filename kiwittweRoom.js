// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCJDj5WCjpqvgCdafQ5tbW3Rm3i2WkJSTk",
    authDomain: "aula93-c60d7.firebaseapp.com",
    projectId: "aula93-c60d7",
    storageBucket: "aula93-c60d7.appspot.com",
    messagingSenderId: "913160914907",
    appId: "1:913160914907:web:f762bd06d089d4da4749fe"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  name = localStorage.getItem("userName")
  document.getElementById("userName").innerHTML = "Bem Vindo(a) "+name+"!"
  console.log(name)

  function addRoom(){
    var roomName = document.getElementById("roomName").value
    firebase.database().ref("/").child(roomName).update({
      proposito:"Adicionar nome de Sala"
    })
    localStorage.setItem("roomName",roomName)
    window.location = "kwitterPage.html"
  }
  function getdata(){
    firebase.database().ref("/").on('value',function(snapShot){
      document.getElementById("output").innerHTML = ""
      snapShot.forEach(function(childsnapShot){
        childkey = childsnapShot.key
        roomNames = childkey
        console.log("nomedaSala"+roomNames)
        row = "<div class = 'roomName' id ="+roomNames+" onclick = 'redirecionar(this.ids)'>"+roomNames+"</div> <hr>"
        document.getElementById("outPut").innerHTML+= row        
      })
    })
  }
  getdata()
  function redirecionar(name){
    console.log(name)
    localStorage.setItem("nomeSala",name)
    window.location = "kiwitterPage.html"
  }
  function logout(){
    localStorage.removeItem("userName")
    localStorage.removeItem("roomName")
    window.location = "index.html"
  }