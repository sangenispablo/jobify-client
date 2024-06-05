import { Link } from "react-router-dom";

import Wrapper from "../assets/wrappers/LandingPage";
import mainImg from "../assets/images/main.svg";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Chambray poke selvage franzen retro cupping occupy tilde tonx
            normcore. Solarpunk af yr etsy. Paleo art party tattooed, cliche
            thundercats man bun narwhal. Shaman dreamcatcher mustache swag migas
            letterpress keffiyeh coloring book. Typewriter pork belly praxis,
            four loko bicycle rights whatever coloring book glossier same
            normcore gorpcore selfies polaroid freegan.
          </p>
          <Link to={"/register"} className="btn register-link">
            Register
          </Link>
          <Link to={"/login"} className="btn">
            Login
          </Link>
        </div>
        <img src={mainImg} alt="job img" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
