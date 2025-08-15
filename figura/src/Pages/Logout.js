import { useNavigate } from "react-router-dom";

function Logout() {
  sessionStorage.clear();
  const navigate = useNavigate();
  navigate("/");
  return <></>;
}

export default Logout;
