import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Jobs from "./Jobs";
import WorkerRegisteration from "./Workers/Registration";
import WorkerLogin from "./Workers/Login";
import NotFound from "./NotFound";
const Pages = () => {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="jobs" element={<Jobs />} />
      <Route path="auth">
        <Route path="worker">
          <Route path="register" element={<WorkerRegisteration />} />
          <Route path="login" element={<WorkerLogin />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Pages;
