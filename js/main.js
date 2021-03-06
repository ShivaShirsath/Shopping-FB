document.addEventListener("visibilitychange", (e) => {
  if (document.visibilityState === "visible") {
    document.location.reload(true);
  }
});

firebase.auth().onAuthStateChanged((user) => {
  if (!user) {
    location.replace("index.html");
  } else {
    document.getElementById("user").innerHTML =
      "Hello " + (user.displayName ? user.displayName : user.email);
  }
});

function logout() {
  firebase
    .auth()
    .signOut()
    .then(() => {
      console.log("Sign-out successful");
    })
    .catch((error) => {
      console.log(error);
    });
}
