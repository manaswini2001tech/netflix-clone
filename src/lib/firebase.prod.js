import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyDLg8xAt3P_11iq44_TYCE73nGav832YDo",
    authDomain: "movie-c9408.firebaseapp.com",
    projectId: "movie-c9408",
    storageBucket: "movie-c9408.appspot.com",
    messagingSenderId: "917515145486",
    appId: "1:917515145486:web:cfb51b0e61a5edcf3b475f"
};

const firebase = Firebase.initializeApp(config);



export { firebase };