import Header from "./components/Header";
import Main from "./components/Main";
import Services from "./components/Services";
import Hospital from "./components/Hospital";
import Planos from "./components/Planos";
import PlanosMobile from "./components/PlanosMobile";
import Footer from "./components/Footer";
import FooterMobile from "./components/FooterMobile";
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
      <PlanosMobile />
      <Footer />
      <FooterMobile />
    </div>
  );
}

export default App;
