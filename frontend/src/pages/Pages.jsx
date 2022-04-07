import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Jobs from "./Jobs";
import Registeration from "./Registration";
import Login from "./Login";
import NotFound from "./NotFound";
import Profile from "./profile";
import PostJob from "./PostJob";
const Pages = () => {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="jobs">
        <Route path="" element={<Jobs />} />
        <Route path="new" element={<PostJob />} />
      </Route>
      <Route path="auth">
        <Route path="register" element={<Registeration />} />
        <Route path="login" element={<Login />} />
      </Route>
      <Route path="profile" element={<Profile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Pages;
