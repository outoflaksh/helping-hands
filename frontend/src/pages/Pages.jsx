import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Jobs from "./Jobs";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/jobs" element={<Jobs />} />
    </Routes>
  );
};

export default Pages;
