import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";

// import { Signup } from "./Signup";
import { FlatDetails } from "./Flatdata";
import { LoginPage } from "./Auth";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/signup" element={<Signup />} /> */}
        <Route path="/flats/:id" element={<FlatDetails />} />
      </Routes>
    </>
  );
};
