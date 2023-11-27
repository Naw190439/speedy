    // Import the functions you need from the SDKs you need
    import { initializeApp } from "firebase/app";
    import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
    import { getFirestore, collection, addDoc, getDocs, doc,} from "firebase/firestore";
	import { getDatabase, set, ref } from "firebase/database";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
    // Your web app's Firebase configuration
    // Import the functions you need from the SDKs you need

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
    const colRef = collection(fsDB, 'Orders');


	const addOrder = document.querySelector('.addOrder');
    addOrder.addEventListener('submit',(e) => {
        e.preventDefault()

		var Name = document.getElementById('Name').value;
        var email = document.getElementById('email').value;
        var order = document.getElementById('order').value;
        var PhnoeNo = document.getElementById('PhoneNo').value;
		var address1 = document.getElementById('address1').value;
        var address2 = document.getElementById('address2').value;
		
            addDoc(colRef, {
                PhneNo: PhnoeNo,
                Email: email,
                Order: order,
                Name: Name,
                Address1: address1,
                Address2: address2,
            })
            .then(() => {
                addOrder.reset();
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                 // ...
            });
            alert('Order Created Successfully');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ...
        
    });
    