import {
  FormWrapper,
  FormHeader,
  FormContent,
  FormGroup,
  SubmitButton,
} from "./styles/Form.styled";
import { FireStoreDB } from "../firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

import { useState, useRef } from "react";
import { useAuth } from "../contexts/AuthContext";

const ProfileForm = () => {
  const usersCollectionRef = collection(FireStoreDB, "users");
  const [userData, setUserData] = useState();
  const [submitting, setSubmitting] = useState(false);
  const { currentUser } = useAuth();
  const userLevelRef = useRef();
  const phoneNumberRef = useRef();
  const addressRef = useRef();
  const nameRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const level = userLevelRef.current.value.toLowerCase();
    const displayName = nameRef.current.value;
    const phoneNumber = phoneNumberRef.current.value;
    const address = addressRef.current.value;
    const uid = currentUser.uid;
    setSubmitting(true);
    await addDoc(usersCollectionRef, {
      uid,
      displayName,
      level,
      phoneNumber,
      address,
    });
    setSubmitting(false);
  };
  return (
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
            <input type="text" placeholder="Your full name" ref={nameRef} />
          </FormGroup>
          <FormGroup>
            <input
              placeholder="Phone Number"
              type="number"
              ref={phoneNumberRef}
            />
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
  );
};

export default ProfileForm;
