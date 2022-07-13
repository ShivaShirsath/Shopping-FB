const firebaseConfig = {
  apiKey: "AIzaSyAXU6c68CEYp0eTfakc30LTxgiYOb5-nhA",
  authDomain: "shopping-sss.firebaseapp.com",
  projectId: "shopping-sss",
  storageBucket: "shopping-sss.appspot.com",
  messagingSenderId: "56817575845",
  appId: "1:56817575845:web:8072ec2f5af79c0303ea4c",
  measurementId: "G-60TMDKGWMT",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var provider = new firebase.auth.GoogleAuthProvider();

var database = new firebase.database();