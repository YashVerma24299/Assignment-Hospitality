import AuthForm from "../components/Auth/AuthForm";
import { useDispatch } from "react-redux";
import { signup } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const dispatch = useDispatch();
  const nav = useNavigate();

  const handleSignup = (email, password) => {
    dispatch(signup({ email, password }));
    nav("/login");
  };

  return <AuthForm
      title="Sign Up"
      type="signup"
      onSubmit={handleSignup}
    />;
}
