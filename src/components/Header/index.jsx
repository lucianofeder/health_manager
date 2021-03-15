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
        <img id="logo" src={Logo} alt="Logo Tipo" />

        <div id="containerLinks">
          <div className="user">
            <button onClick={() => history.push(`/HomeUser/${user_id}`)}>
              <img src={Avatar} alt="Avatar" />
            </button>
            <button onClick={() => SetOpen(!open)} onBlur={handleOnBlurMenu}>
              <img src={Menu} alt="Menu" className="menor" />
            </button>
            <button onClick={handleLogout} id="logout">
              <img src={Logout} alt="Logout" className="menor" />
            </button>
          </div>
          {open && (
            <div
              onMouseEnter={() => SetonMenu(true)}
              onMouseLeave={() => SetonMenu(false)}
              className="nav"
            >
              <nav>
                <ul>
                  <li>
                    <Link to={"/AllGroups"}>
                      <p>All Groups</p>
                    </Link>
                  </li>

                  <li>
                    <Link to={"/AllUsers"}>
                      <p>All Users</p>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </div>
      </div>
    </HeaderContainer>
  );
};

export default HeaderComponent;
