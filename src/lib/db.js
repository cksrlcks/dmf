import firebase from "./firebase";

export const firestore = firebase.firestore();
export const storage = firebase.storage();

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

export async function getCollection(name) {
    const data = [];
    return firestore
        .collection(name)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                data.push(doc.data());
            });
            return data;
        });
}

export function addMenu(data) {
    return firestore.collection("menus").doc(data.id).set(data, { merge: true });
}

export function uploadImage(imageAsFile) {
    //const uploadTask = storage.ref(`/images/${imageAsFile.name}`).put(imageAsFile)
}
