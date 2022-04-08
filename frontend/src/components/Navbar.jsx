import { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import { Nav, NavList, NavItem, NavBrand } from "./styles/Nav.styled";
import { FireStoreDB } from "../firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  const usersCollectionRef = collection(FireStoreDB, "users");
  const [userData, setUserData] = useState();
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
  }, [currentUser]);
  return (
    <Nav>
      <NavLink to="/">
        <NavBrand src={"./logo.png"} />
      </NavLink>
      <NavList>
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/jobs">Jobs</NavLink>
        </NavItem>
        {currentUser ? (
          <>
            <NavItem>
              <NavLink to="/profile">Profile</NavLink>
            </NavItem>
            {userData && userData.level == "client" ? (
              <NavItem>
                <NavLink to="/jobs/new">Post Job</NavLink>
              </NavItem>
            ) : undefined}
          </>
        ) : (
          <>
            <NavItem>
              <NavLink to="/auth/register">Register</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/auth/login">Login</NavLink>
            </NavItem>
          </>
        )}
      </NavList>
    </Nav>
  );
};

export default Navbar;
