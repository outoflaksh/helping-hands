import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Jobs from "./Jobs";
import WorkerRegisteration from "./Workers/Registration";

const Pages = () => {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="jobs" element={<Jobs />} />
      <Route path="auth">
        <Route path="worker">
          <Route path="register" element={<WorkerRegisteration/>}/>
        </Route>
      </Route>
    </Routes>
  );
};

export default Pages;
