    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
    
    import { getAuth, onAuthStateChanged, GoogleAuthProvider,signOut,signInWithPopup,           sendSignInLinkToEmail,isSignInWithEmailLink, signInWithEmailLink, // createUserWithEmailAndPassword, signInWithEmailAndPassword,  updateProfile, updateEmail, setPersistence,  browserSessionPersistence, getIdTokenResult
    } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";

    import {  getFirestore,  collection,  getDocs,  doc, // setDoc,  addDoc,  
    } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js"

        
    const firebaseConfig = {
        apiKey: "AIzaSyDSux33iJAZsssEo2Za7As_eGGEThwXQZo",
        authDomain: "thinksolve-app.firebaseapp.com",
        projectId: "thinksolve-app",
        storageBucket: "thinksolve-app.appspot.com",
        messagingSenderId: "490986955869",
        appId: "1:490986955869:web:433c6f7b31865fed5099b4"
    };

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const db = getFirestore(app);


    function doWhenAuthStateChangesTWO() {

        //firebase: check user state
        onAuthStateChanged( auth , user => {

            if( user ){  
                
                console.log(`logged-in!`)
        
                getLockedUrlToUsers( window.location.href, user.email )
               
            }
            else {
                console.log(`logged-in FAILED`);

            }
 
        })
    }


    

    async function getLockedUrlToUsers(URL, USEREMAIL ) {

        const querySnapshot = await getDocs(collection(db, "lockedUrlToUsers"));

        // exits wrapped forEach loop as soon as if statement is satisfied 
        try{
            querySnapshot.forEach( doc => {
                let lockedUrl = `https://www.brightowltutoring.com/${doc.id}` 
                let allowedUsersArray = Object.values(doc.data())

                if ( (lockedUrl === URL) && ( allowedUsersArray.includes(USEREMAIL) ) ) {

                    console.log(`${USEREMAIL} is verified on ${lockedUrl}`)
                    document.querySelector('body').style.display = "block";
                    throw 'Breaky' // some random message that won't be caught
                } 
            })
        }catch (e) {
            // console.log(e) // 'Breaky'
            if (e !== 'Breaky') throw e
        }


    }





    window.onload = doWhenAuthStateChangesTWO();
    

    
   

