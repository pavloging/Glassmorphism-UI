import { useRef } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";

function App() {
  const contentRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const elements = useRoutes(routes);

  return <div ref={contentRef}>{elements}</div>;
}

export default App;
