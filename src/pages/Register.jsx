import { Link } from "react-router-dom";

import { Logo } from "../components";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";

export default function Register() {
  return (
    <div>
      <h1>Register</h1>
      <Link to={"/login"}>Login</Link>
    </div>
  );
}
