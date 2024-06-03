import { Link, useRouteError } from "react-router-dom";

import img from "../assets/images/not-found.svg";
import Wrapper from "../assets/wrappers/ErrorPage";

export default function Error() {
  const error = useRouteError();
  console.log(error.error.message);
  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="not found" />
          <h3>Ohh! page not found</h3>
          <p>We can&apos;t seem to find the page you&apos;re looking for</p>
          <Link to="/dashboard">back home</Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <div>
      <h1>Error Page !!!</h1>
      <Link to="/">back home</Link>
    </div>
  );
}
