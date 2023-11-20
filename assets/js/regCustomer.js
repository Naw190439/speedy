    // Import the functions you need from the SDKs you need
    import { initializeApp } from "firebase/app";
    import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
    import { getFirestore, collection, addDoc, getDocs, doc,} from "firebase/firestore";
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

    const colRef = collection(fsDB, 'Customers');


	const regCustomer = document.querySelector('.user');
    regCustomer.addEventListener('submit',(e) => {
        e.preventDefault()

		var firstname = document.getElementById('firstname').value;
		var lastname = document.getElementById('lastname').value;
        var email = document.getElementById('email').value;
        var username = document.getElementById('username').value;
		var password = document.getElementById('password').value;
		
		createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up
                const user = userCredential.user;

                // Create a document reference with the user's UID as the ID
/*                 const docRef = doc(fsDB, 'Customers', user.uid); */

                // Add the user's data to the Firestore database
                addDoc(colRef, {
                UID: user.uid,
                Username: username,
                Email: email,
                FirstName: firstname,
                LastName: lastname,
                Password: password,
                Subscription: "Standard",
                })
                .then(() => {
                    regCustomer.reset();
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ...
                });
                alert('User Created Successfully');
                setTimeout(function() {
                location.href = './customerLogin.html';
                }, 3000);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ...
            });


	});
    