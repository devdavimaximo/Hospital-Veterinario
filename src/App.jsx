import Header from "./components/Header";
import Main from "./components/Main";
import Services from "./components/Services";
import Hospital from "./components/Hospital";
import Planos from "./components/Planos";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <div>
      <Header />
      <hr />
      <Main />
      <Hospital />
      <Services />
      <Planos />
      <Footer />
    </div>
  );
}

export default App;
