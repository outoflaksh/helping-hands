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
import { useContext, useEffect, useRef, useState } from "react";
import AuthContext from "../contexts/AuthContext";
import { FormContent, FormHeader, FormWrapper, FormGroup, SubmitButton } from "../components/styles/Form.styled";

const Profile = () => {
    const usersCollectionRef = collection(FireStoreDB, 'users');
    const [userData, setUserData] = useState();
    const [submitting, setSubmitting] = useState(false);
    const { currentUser } = useContext(AuthContext);
    const userLevelRef = useRef();
    const phoneNumberRef = useRef();
    const addressRef = useRef();
    useEffect(() => {
        const checkDetails = async () => {
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
            checkDetails();
    }, [currentUser, submitting]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const level = userLevelRef.current.value.toLowerCase();
        const phoneNumber = phoneNumberRef.current.value;
        const address = addressRef.current.value;
        const uid = currentUser.uid;
        setSubmitting(true);
        await addDoc(usersCollectionRef, { uid, level, phoneNumber, address });
        setSubmitting(false);
    }

    return (
        <Page>
            {
                userData
                    ?
                    <>
                        <div>
                            <div>Profile:</div>
                            <div>email: {currentUser.email}</div>
                            <div>phone number: {userData.phoneNumber}</div>
                            <div>address: {userData.address}</div>
                            <div>registered as: {userData.level}</div>
                        </div>
                    </>
                    :
                    <FormWrapper>
                        <FormContent>
                            <FormHeader>
                                <h1>Complete your profile</h1>
                            </FormHeader>
                            <form onSubmit={handleSubmit}>
                                <FormGroup>
                                    <label>Who are you: </label>
                                    <select ref={userLevelRef}>
                                        <option>Worker</option>
                                        <option>Client</option>
                                    </select>
                                </FormGroup>
                                <FormGroup>
                                    <input placeholder="Phone Number" type="number" ref={phoneNumberRef} />
                                </FormGroup>
                                <FormGroup>
                                    <input type="text" placeholder="Address" ref={addressRef} />
                                </FormGroup>
                                <FormGroup>
                                    <SubmitButton type="submit" disabled={submitting}>
                                        {submitting ? "Submitting" : "Submit"}
                                    </SubmitButton>
                                </FormGroup>
                            </form>
                        </FormContent>
                    </FormWrapper>
            }
        </Page>
    );
}

export default Profile;