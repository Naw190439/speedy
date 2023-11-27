    // Import the functions you need from the SDKs you need
    import { initializeApp } from "firebase/app";
    import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, } from "firebase/auth";
    import { getFirestore, collection, addDoc, getDocs, getDoc, doc} from "firebase/firestore";
	import { getDatabase, set, ref } from "firebase/database";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
    // Your web app's Firebase configuration

    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyCG_zZxotVjURGpeHr5pTh9wkKFFBfQo-M",
        authDomain: "usersdb-4d54c.firebaseapp.com",
        databaseURL: "https://usersdb-4d54c-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "usersdb-4d54c",
        storageBucket: "usersdb-4d54c.appspot.com",
        messagingSenderId: "602482286493",
        appId: "1:602482286493:web:c7923354f718f92f3c1974",
        measurementId: "G-BXF87M4VNZ"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
	const database = getDatabase(app);
    const auth = getAuth(app);
    const fsDB = getFirestore(app);
    const currentUser = auth.currentUser;
    
    onAuthStateChanged(auth, async (user) => {
        if (user) {
          const UID = user.uid;
      
          // Retrieve user data from Firestore
          const colRef = collection(fsDB, 'Customers');
          const userDocSnap = await getDoc(colRef);
          const userData = userDocSnap.data();
      
          if (userData) {
            const userName = userData.name;
            console.log("Current user name:", userName);
          } else {
            console.log("No user data found for UID:", UID);
          }
        } else {
          console.log("No current user signed in");
        }
      });

    
    
    
    // Sign Out 
    const signOutCustomer = document.querySelector('.logOut');
    signOutCustomer.addEventListener('click', () => {
        
        signOut(auth)
            .then(() => {
        // Sign-out successful.
        alert('Signed Out!')
        location.href = '../../customerLogin.html';
        }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        });

    });