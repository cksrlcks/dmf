import firebase from "./firebase";

const firestore = firebase.firestore();

export function updateUser(uid, data) {
    return firestore.collection("users").doc(uid).update(data);
}

export async function getUserLevel(uid) {
    return firestore
        .collection("users")
        .doc(uid)
        .get()
        .then((doc) => doc.data().level);
}

export function createUser(uid, data) {
    return firestore
        .collection("users")
        .doc(uid)
        .set({ uid, ...data }, { merge: true });
}
