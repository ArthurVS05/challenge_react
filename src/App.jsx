import "./App.css";
import Navbar from "./Navbar/Navbar";
import Cardlist from "./cardlist/Cardlist";
import Footer from "./footer/Footer";
function App() {
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
