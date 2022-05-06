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
        .then((doc) => doc.data().level)
        .catch((err) => null);
}

export function createUser(uid, data) {
    return firestore
        .collection("users")
        .doc(uid)
        .set({ uid, ...data }, { merge: true });
}

export async function getCollection(collectionId) {
    const data = [];
    return firestore
        .collection(collectionId)
        .orderBy("number", "asc")
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                data.push(doc.data());
            });
            return data;
        });
}

export async function getDocument(collectionId, documentId) {
    return firestore
        .collection(collectionId)
        .doc(documentId)
        .get()
        .then((doc) => {
            if (doc.exists) {
                return doc.data();
            }
        })
        .catch((err) => console.log(err));
}

export async function setDocument(collectionId, data) {
    const snapshot = await firestore.collection(collectionId).get();
    return firestore
        .collection(collectionId)
        .doc(data.id)
        .set({ ...data, number: snapshot.size + 1 }, { merge: true });
}

export async function setDocumentWithNumber(collectionId, data) {
    return firestore
        .collection(collectionId)
        .doc(data.id)
        .set({ ...data });
}
export async function updateDocument(collectionId, data) {
    return firestore
        .collection(collectionId)
        .doc(data.id)
        .update({ ...data });
}

export async function resetDocument(collectionId) {
    return firestore
        .collection(collectionId)
        .get()
        .then((snapshot) => {
            snapshot.docs.forEach((snapshot) => {
                snapshot.ref.delete();
            });
        });
}
