import { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Register from "./pages/Register";
import Login from "./pages/Login";
import gsap from "gsap";
import { Flip, Bounce } from "gsap/all";

gsap.registerPlugin(Flip, Bounce);

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default App;
