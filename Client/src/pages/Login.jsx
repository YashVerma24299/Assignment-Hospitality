import AuthForm from "../components/Auth/AuthForm";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const user = useSelector(s => s.auth.user);

  const handleLogin = (email, password) => {
    dispatch(login({ email, password }));
    if (!user) alert("Invalid credentials");
    else nav("/");
  };

  return <AuthForm
      title="Login"
      type="login"
      onSubmit={handleLogin}
    />;
}
