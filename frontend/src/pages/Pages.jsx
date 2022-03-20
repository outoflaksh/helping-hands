import { Routes, Route } from "react-router-dom";
import AuthBase from "../components/AuthBase";
import Home from "./Home";
import Jobs from "./Jobs";
import RegisterationForm from "../components/RegisterationForm";

const Pages = () => {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="jobs" element={<Jobs />} />
      <Route path="worker">
        <Route path="auth" element={<AuthBase>worker</AuthBase>}>
          <Route path="login" element={"hemlo"}></Route>
          <Route path="register" element={<RegisterationForm/>}></Route>
        </Route>
      </Route>
      <Route path="client">
        <Route path="auth" element={<AuthBase>client</AuthBase>}>
          <Route path="login"></Route>
          <Route path="register"></Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default Pages;
