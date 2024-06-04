import { Link } from "react-router-dom";

import { FormRow, Logo } from "../components";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";

export default function Register() {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow type="text" name="name" labelText="name" defaultValue="john" />
        <FormRow
          type="text"
          name="lastName"
          labelText="last name"
          defaultValue="smith"
        />
        <FormRow type="text" name="location" defaultValue="earth" />
        <FormRow type="email" name="email" defaultValue="john@gmail.com" />
        <FormRow type="password" name="password" defaultValue="pepa123" />
        <button type="submit" className="btn btn-block">
          Submit
        </button>
        <p>
          Already member ? <Link to={"/login"}>Login</Link>
        </p>
      </form>
    </Wrapper>
  );
}
