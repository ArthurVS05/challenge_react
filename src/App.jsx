import "./App.css";
import Navbar from "./Navbar/Navbar";
import Cardlist from "./cardlist/Cardlist";
import Footer from "./footer/Footer";
import { useState } from "react";
import data from "./data/data.json";
function App() {
  const [data, setData] = useState(data);
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Cardlist />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
