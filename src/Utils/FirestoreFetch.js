import { query, where, collection, getDocs } from '@firebase/firestore';
import { doc, getDoc } from 'firebase/firestore';
import { db } from './FirebaseConfig';

export const firestoreFetch = async (idCategory) => {
    let q;
    if (idCategory) {
        q = query(collection(db, 'products'), where('categoryId', '==', idCategory));
    } else {
        q = query(collection(db, 'products'));
    }
    const querySnapshot = await getDocs(q);
    const dataFromFirestore = querySnapshot.docs.map((document) => ({
        id: document.id,
        ...document.data()
    }))
    return dataFromFirestore;
}

export const firestoreFetchDetail = async (idItem) => {
    const docRef = doc(db, "products", idItem); 
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return {
            id: idItem,
            ...docSnap.data()
        }
    } else {
        console.log("No such document!");
    }
}