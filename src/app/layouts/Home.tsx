import { Link } from "react-router-dom";
import "../App.css";

const Home = () => {
  return (
    <section>
      <div className="container">
        <header>
          <a
            href="https://github.com/pavloging"
            target="_blank"
            className="logo"
          >
            Pavloging
          </a>
          <ul>
            <li>
              <Link to="/" className="active">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/team">Team</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </header>
        <div className="content">
          <h2 className="name">Glassmorphism UI</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia,
            sapiente ipsam. Beatae veniam totam quo mollitia quia possimus
            reprehenderit et laboriosam, excepturi reiciendis officia ut earum
            doloribus culpa, odio inventore.
          </p>
          <a href="#">Read more</a>
        </div>
        <div className="imgBx">
          <img src="/human.webp" alt="human" />
        </div>
        <ul className="sci">
          <li>
            <a href="#">
              <img src="/facebook.svg" alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/instagram.svg" alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/twitter.svg" alt="" />
            </a>
          </li>
        </ul>
        <p className="copyrightText">
          Coperight © 2022 Web Developer. All Right Reserved.
        </p>
      </div>
    </section>
  );
};

export default Home;
