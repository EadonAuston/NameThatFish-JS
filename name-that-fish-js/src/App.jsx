import "./App.css";
import { ClassApp } from "./Components/Class/ClassApp";
import { FunctionalApp } from "./Components/Functional/FunctionalApp";

function App() {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <ClassApp />
        <FunctionalApp />
      </div>
    </>
  );
}

export default App;
