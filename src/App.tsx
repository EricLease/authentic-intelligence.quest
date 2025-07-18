import { useEffect, useState } from "react";
import "./App.css";
import { axGet } from "./api/client";

function App() {
  useEffect(() => {
    axGet("/api/posts")
      .then((res) => setState(JSON.stringify(res.data)))
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
