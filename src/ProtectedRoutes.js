import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const ProtectedRoutes = ({ user, children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/signin");
    }
  }, [user]);

  return children;
};

export default ProtectedRoutes;
