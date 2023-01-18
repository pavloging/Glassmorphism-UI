import Home from "./layouts/Home";
import About from "./layouts/About";
import Team from "./layouts/Team";
import Contact from "./layouts/Contact";

const routes = [
  {
    path: "",
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "team",
    element: <Team />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
];

export default routes;
