import firebase from 'firebase';

  var firebaseConfig = {
    apiKey: "AIzaSyBILMTQn1G2DtPsK8HWtF1FEkiANVsTTIY",
    authDomain: "burguer-queen-dd843.firebaseapp.com",
    databaseURL: "https://burguer-queen-dd843.firebaseio.com",
    projectId: "burguer-queen-dd843",
    storageBucket: "burguer-queen-dd843.appspot.com",
    messagingSenderId: "1039084295678",
    appId: "1:1039084295678:web:97f60cec1be81a85"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  firebase.database().ref().set({
      name: name,
      id: 2
  });
