import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function DEnvironment() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/home"); // o "/home" según tu ruta
  }, [navigate]);

  return (
    <div className="min-h-screen w-full bg-[url('/assets/react.svg')] bg-repeat bg-[#ebf0c6] bg-blend-multiply">
    </div>
  );
}

export default DEnvironment;

