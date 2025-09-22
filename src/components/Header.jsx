import { Link } from "react-scroll";

function Header() {
  return (
    <div className="flex items-center">
      <header className="flex">
        <nav className="nav flex">
          <Link to="inicio" smooth={true} duration={500}>
            <img
              className="flex justify-start items-center h-13 pl-12 mt-1"
              src="/logo.png"
              alt="logo"
            />
          </Link>
          <ul className="ul flex gap-11 text-cyan-950 text-2xl text-center justify-center pl-25 pr-9 pt-4.5">
            <Link to="inicio" smooth={true} duration={500}>
              <li className="li-header">
                <a href="#">Início</a>
              </li>
            </Link>
            <Link to="hospital" smooth={true} duration={500} offset={-110}>
              <li className="li-header">
                <a href="#">Hospital</a>
              </li>
            </Link>
            <Link to="services" smooth={true} duration={500} offset={-190}>
              <li className="li-header">
                <a href="#">Serviços</a>
              </li>
            </Link>
            <Link to="services" smooth={true} duration={500} offset={429}>
              <li className="li-header">
                <a href="#">Planos</a>
              </li>
            </Link>
          </ul>

          <div className="buttons">
            <button className="agende">
              <a href="#">Agende</a>
            </button>
            <button className="contato">
              <a href="https://wa.me/5551997409304">Contato</a>
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
