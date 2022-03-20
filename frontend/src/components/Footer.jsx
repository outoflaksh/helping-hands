import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import { FooterWrapper } from "../styles/Footer.styled";

function Footer() {
    const { currentUser } = useContext(AuthContext);
    return (
        <FooterWrapper>
            {
                (currentUser && currentUser.email) || "not signed in"
            }
        </FooterWrapper>
    )
}

export default Footer;