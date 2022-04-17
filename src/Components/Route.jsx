import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";

// import { Signup } from "./Signup";
import { FlatDetails } from "./Flatdata";
import { LoginPage } from "./Auth";
import { Navbar } from "./Navbar";

export const AllRoutes = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/flats/:id" element={<FlatDetails />} />
      </Routes>
    </>
  );
};
