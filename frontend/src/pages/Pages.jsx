import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Jobs from "./Jobs";
import WorkerRegisteration from "./Workers/Registration";
import WorkerLogin from "./Workers/Login";
const Pages = () => {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="jobs" element={<Jobs />} />
      <Route path="auth">
        <Route path="worker">
          <Route path="register" element={<WorkerRegisteration/>}/>
          <Route path="login" element={<WorkerLogin/>}/>
        </Route>
      </Route>
    </Routes>
  );
};

export default Pages;
