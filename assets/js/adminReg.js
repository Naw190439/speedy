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
        apiKey: "AIzaSyAr2HchvB2sQgV7wzQV_lN-dWOJyI-pOUU",
        authDomain: "admindb-25346.firebaseapp.com",
        databaseURL: "https://admindb-25346-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "admindb-25346",
        storageBucket: "admindb-25346.appspot.com",
        messagingSenderId: "1053867588174",
        appId: "1:1053867588174:web:3995e240e81c9f4797611f",
        measurementId: "G-QDQVZ2G79R"
      };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
	const database = getDatabase(app);
    const auth = getAuth(app);
    const fsDB = getFirestore(app);

    const colRef = collection(fsDB, 'Admin');


	const regAdmin = document.querySelector('.user');
    regAdmin.addEventListener('submit',(e) => {
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
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ...
            });


	});
    