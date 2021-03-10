import { useState } from "react";
import { HeaderContainer } from "./style";
import { Link } from "react-router-dom";
import Avatar from "../../images/user.svg";
import Logo from "../../images/Logo/logo4.png";
import Logout from "../../images/Icons/checkout.png";
import Menu from "../../images/Icons/menuDrop.png";

const HeaderComponent = () => {
  const [open, SetOpen] = useState(true);

  return (
    <HeaderContainer>
      <div className="containerUser">
        <img src={Logo} alt="Logo Tipo" />
        <div className="user">
          <Link to="/HomeUser">
            <img src={Avatar} alt="Avatar" />
          </Link>
          <img
            src={Menu}
            alt="Menu"
            className="menor"
            onClick={() => SetOpen(!open)}
          />
          <img src={Logout} alt="Logout" className="menor" />
        </div>
      </div>
      {open && (
        <div className="nav">
          <nav>
            <ul>
              <li>Link1</li>
              <li>Link2</li>
              <li>Link3</li>
            </ul>
          </nav>
        </div>
      )}
    </HeaderContainer>
  );
};

export default HeaderComponent;
