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
    
    const fsDB = getFirestore();
    const colRef = collection(fsDB, "customers");
    
    const loadDataOnEntry = () => {
      getDocs(colRef)
        .then((querySnapshot) => {
          const customers = [];
          querySnapshot.forEach((doc) => {
            const customerData = doc.data();
            customerData.id = doc.id;
            customers.push(customerData);
          });
    
          // Process or display the retrieved customer data
          console.log("Customers:", customers);
        })
        .catch((error) => {
          console.error("Error retrieving customer data:", error);
        });
    };
    
    window.addEventListener('DOMContentLoaded', loadDataOnEntry);