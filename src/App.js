import Weather from "./Weather";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="tehran" />
      <Footer />
    </div>
  );
}

export default App;
