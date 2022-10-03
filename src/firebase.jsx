import firebase from "firebase/compat/app";

function firebaseApp() {
  const config = {
    databaseURL: "https://noveria-db-auth-default-rtdb.firebaseio.com/",
    projectId: "noveria-db-auth",
    apiKey: "AIzaSyBjH91zhCIzrXChka3vyL7isupMhr3xyhc",
  };
  return firebase.initializeApp(config);
}

export default firebaseApp;