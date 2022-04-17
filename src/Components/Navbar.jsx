import { useNavigate } from "react-router-dom";



export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <button
        onClick={() => {
          navigate("./login");
        }}
      >
        LOGIN/SIGNUP
      </button>
    </>
  );
};
