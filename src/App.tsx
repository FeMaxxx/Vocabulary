import { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import SharedLayout from "./components/SharedLayout";

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        {/* <Route index element={<Home />} />
        <Route path="/movies" element={<Info />} /> */}
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default App;
