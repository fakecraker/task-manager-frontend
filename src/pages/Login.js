import { useContext } from "react";
import { AuthContext } from "../AuthProvider";

const Login = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <div>
      {isAuthenticated ? (
        <p>Redirecting...</p>
      ) : (
        <p>Please wait while we log you in...</p>
      )}
    </div>
  );
};

export default Login;
