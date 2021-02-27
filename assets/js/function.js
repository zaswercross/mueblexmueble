
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyARKt-0BNsNX-27xFTZw6e1MDYAh0k9uqI",
    authDomain: "mueblexmueble.firebaseapp.com",
    projectId: "mueblexmueble",
    storageBucket: "mueblexmueble.appspot.com",
    messagingSenderId: "426159159739",
    appId: "1:426159159739:web:8d9797f13648689cc3ec9e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

let horaActual = ()  => {
    let OffTimeValue = "";
    let now = new Date();
    let ampm = (now.getHours() >= 12) ? " pm" : " am"
    let Hours = now.getHours();
    Hours = ((Hours > 12) ? Hours - 12 : Hours);
    let Minutes = ((now.getMinutes() < 10) ? ":0" : ":") + now.getMinutes();
    OffTimeValue = (" " + Hours + Minutes + " " + ampm);
    offHours = now.getHours();
    offMinutes = now.getMinutes();
    // console.log(OffTimeValue);
    return OffTimeValue;
}
