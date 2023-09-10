import "./App.css";
import Navbar from "../src/components/Navbar";
import Herosection from "./components/Herosection";
import Scanner from "./components/Scanner";
function App() {
  return (
    <>
      <div className="w-full">
        <Herosection></Herosection>
        <Scanner></Scanner>
      </div>
    </>
  );
}

export default App;
