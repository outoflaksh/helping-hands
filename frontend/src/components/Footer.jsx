import { useContext, useState } from "react";
import AuthContext from "../contexts/AuthContext";
import { FooterWrapper } from "../styles/Footer.styled";

function Footer() {
    const { currentUser, logout } = useContext(AuthContext);
    const [loading,setLoading] = useState(false);
    async function handleLogOut(){
        setLoading(true);
        await logout();
        setLoading(false);
    }
    return (
        <FooterWrapper>
            {
                (currentUser && currentUser.email) || "not signed in"
            }
            {
                currentUser?<button onClick={handleLogOut} disabled={loading}>Logout</button>:undefined
            }
        </FooterWrapper>
    )
}

export default Footer;