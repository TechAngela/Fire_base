const firebaseConfig = {
     apiKey: "AIzaSyDCM4XhHen-YJibOp16rD84fMgeuPaT2dE",
     authDomain: "teckcode-b0ee7.firebaseapp.com",
     projectId: "teckcode-b0ee7",
     storageBucket: "teckcode-b0ee7.appspot.com",
     messagingSenderId: "794750168650",
     appId: "1:794750168650:web:0cef6059a556e2e99180b3",
     measurementId: "G-0T5BS43TZR"
   };
   firebase.initializeApp(firebaseConfig);
   const db = firebase.firestore();
   console.log("fire base" ,firebase);