import { Page } from "../components/styles/Utility.styled";
import { FireStoreDB } from "../firebase";
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
} from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../contexts/AuthContext";

const Profile = () => {
    const usersCollectionRef = collection(FireStoreDB, 'users');
    const [userData, setUserData] = useState();
    const { currentUser } = useContext(AuthContext);
    useEffect(() => {
        const test = async () => {
            const userDocs = await getDocs(usersCollectionRef);
            setUserData(
                () => {
                    let userData;
                    for (let doc of userDocs.docs) {
                        let docData = doc.data();
                        if (docData.uid && docData.uid == currentUser.uid) {
                            userData = docData;
                        }
                    }
                    return userData;
                }
            );
        };
        if (currentUser)
            test();
    }, [currentUser]);
    return (
        <Page>
            {
                userData?userData.name:undefined
            }
        </Page>
    );
}

export default Profile;