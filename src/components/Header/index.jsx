import { useState } from "react";
import { HeaderContainer } from "./style";
import { useHistory } from "react-router-dom";
import Avatar from "../../images/Undraw/user.svg";
import Logo from "../../images/Logo/logo4.png";
import Logout from "../../images/Icons/checkout.png";
import Menu from "../../images/Icons/menuDrop.png";
import { useSelector } from "react-redux";

const HeaderComponent = () => {
  const [open, SetOpen] = useState(true);
  const { user_id } = useSelector((state) => state.users);

  const history = useHistory();

  return (
    <HeaderContainer>
      <div className="containerUser">
        <img src={Logo} alt="Logo Tipo" className="logo" />
        <div className="user">
          <img
            src={Avatar}
            alt="Avatar"
            onClick={() => history.push(`/HomeUser/${user_id}`)}
          />
          <img
            src={Menu}
            alt="Menu"
            className="menor"
            onClick={() => SetOpen(!open)}
          />
          <img
            src={Logout}
            alt="Logout"
            className="menor"
            onClick={() => history.push("/")}
          />
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
