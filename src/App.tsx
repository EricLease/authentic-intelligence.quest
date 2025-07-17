import { useEffect, useState } from "react";
import "./App.css";
import { axGet } from "./api/client";

function App() {
  useEffect(() => {
    axGet("/api/hello")
      .then((res) => setState(res.data))
      .catch((reason) => setState(reason));
  }, []);

  const [state, setState] = useState("loading...");

  return (
    <div>
      Home
      <p>{state}</p>
    </div>
  );
}

export default App;
