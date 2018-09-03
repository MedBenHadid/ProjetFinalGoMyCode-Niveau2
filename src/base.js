import Rebase from 're-base';
import Firebase from 'firebase';
const firebaseApp = Firebase.initializeApp({
     apiKey: "AIzaSyBiNlgcMwHz6CrejliX9O4L7ywRg3DXP98",
    authDomain: "projetreactfinale.firebaseapp.com",
    databaseURL: "https://projetreactfinale.firebaseio.com",
});
const base = Rebase.createClass(firebaseApp.database());
//named export
export {
    firebaseApp
};
export default base;