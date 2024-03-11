import { useState } from "react";
import "./App.css";
import KodKata1 from "./components/KodKata1/KodKata1";

function App() {
  const [showKodKata1, setShowKodKata1] = useState(false);
  return (
    <>
      <h1>Alla React övningar</h1>
      <button
        onClick={() => {
          setShowKodKata1(true);
        }}
      >
        Kod-kata1
      </button>
      {showKodKata1 && <KodKata1 />}
    </>
  );
}

export default App;
