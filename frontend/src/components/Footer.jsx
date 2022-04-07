import { useContext, useState } from "react";
import AuthContext from "../contexts/AuthContext";
import { Button } from "./styles/Common.styled";
import { FooterItems, FooterWrapper } from "./styles/Footer.styled.jsx";

function Footer() {
  const { currentUser, logout } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  async function handleLogOut() {
    setLoading(true);
    await logout();
    setLoading(false);
  }
  return (
    <FooterWrapper>
      <FooterItems>
        {(currentUser && currentUser.email) || "Not Signed In"}
        {currentUser ? (
          <>
            <div style={{height:"0.5rem"}}/>
            <Button onClick={handleLogOut} disabled={loading}>
              Logout
            </Button>
          </>
        ) : undefined}
      </FooterItems>
    </FooterWrapper>
  );
}

export default Footer;
