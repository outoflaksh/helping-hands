import React from "react";
import {
  FormWrapper,
  FormContent,
  FormGroup,
  FormHeader,
  SubmitButton,
} from "../components/styles/Form.styled";
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
import { Page, Flex } from "../components/styles/Utility.styled";
import AuthContext from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const PostJob = () => {
  const jobsCollectionRef = collection(FireStoreDB, "jobs");
  const usersCollectionRef = collection(FireStoreDB, "users");
  const [userData, setUserData] = useState();
  const [submitting, setSubmitting] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const jobTitleRef = useRef();
  const jobLocationRef = useRef();
  const jobAddressRef = useRef();
  const contactNumberRef = useRef();
  const datesRef = useRef();
  const navigate = useNavigate();
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
  }, [currentUser, submitting]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    await addDoc(jobsCollectionRef, {
      uid: userData.uid,
      jobTitle: jobTitleRef.current.value,
      jobLocation: jobLocationRef.current.value,
      jobAddress: jobAddressRef.current.value,
      dates: datesRef.current.value,
      contactNumber: contactNumberRef.current.value,
    });
    setSubmitting(false);
    navigate("/jobs");
  };
  return (
    <Page>
      <Flex align="center" justify="center">
        <FormWrapper>
          <FormContent>
            <FormHeader>
              <h1>Post a new job</h1>
            </FormHeader>
            <form onSubmit={handleSubmit}>
              <FormGroup>
                <input
                  type="text"
                  ref={jobTitleRef}
                  placeholder="Job title; Ex: Construction"
                />
              </FormGroup>
              <FormGroup>
                <input
                  type="text"
                  ref={jobLocationRef}
                  placeholder="Job location; Ex: ABC School"
                />
                <input
                  type="text"
                  ref={jobAddressRef}
                  placeholder="Job address"
                />
              </FormGroup>
              <FormGroup>
                <input
                  type="text"
                  ref={contactNumberRef}
                  placeholder="Contact number"
                />
              </FormGroup>
              <FormGroup>
                <input type="text" ref={datesRef} placeholder="Dates" />
              </FormGroup>
              <SubmitButton type="submit" disabled={submitting}>
                {submitting ? "submitting" : "Post job"}
              </SubmitButton>
            </form>
          </FormContent>
        </FormWrapper>
      </Flex>
    </Page>
  );
};

export default PostJob;
