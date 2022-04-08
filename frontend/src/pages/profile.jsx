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
import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import ProfileForm from "../components/ProfileForm";
import { SubmitButton } from "../components/styles/Form.styled";
import { NavLink } from "react-router-dom";

const Profile = () => {
  const usersCollectionRef = collection(FireStoreDB, "users");
  const [userData, setUserData] = useState();
  const [submitting, setSubmitting] = useState(false);
  const { currentUser } = useAuth();
  useEffect(() => {
    const checkDetails = async () => {
      const userDocs = await getDocs(usersCollectionRef);
      setUserData(() => {
        let userData;
        for (let doc of userDocs.docs) {
          let docData = doc.data();
          if (docData.uid && docData.uid == currentUser.uid) {
            userData = docData;
          }
        }
        return userData;
      });
    };
    if (currentUser) checkDetails();
    console.log(currentUser);
  }, [currentUser, submitting]);

  return (
    <Page>
      {userData ? (
        <>
          <div>
            <h1>Welcome, {userData.name}!</h1>
            {userData.level === "client" ? (
              <SubmitButton>
                <NavLink to="/jobs/new">Post a new job</NavLink>
              </SubmitButton>
            ) : (
              <SubmitButton>
                <NavLink to="/jobs">Look for jobs</NavLink>
              </SubmitButton>
            )}
          </div>
        </>
      ) : (
        <ProfileForm />
      )}
    </Page>
  );
};

export default Profile;
