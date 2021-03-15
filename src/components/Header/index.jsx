import { useState } from "react";
import { HeaderContainer } from "./style";
import { useHistory, Link } from "react-router-dom";
import Avatar from "../../images/Undraw/user.svg";
import Logo from "../../images/Logo/logo4.png";
import Logout from "../../images/Icons/checkout.png";
import Menu from "../../images/Icons/menuDrop.png";
import { useSelector } from "react-redux";
import { signInThunk } from "../../store/modules/users/thunk";
import { useDispatch } from "react-redux";

const HeaderComponent = () => {
  const [open, SetOpen] = useState(false);
  const [onMenu, SetonMenu] = useState(false);

  const { user_id } = useSelector((state) => state.users);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.clear();
    dispatch(signInThunk("", ""));
    history.push(`/Login`);
  };
  const handleOnBlurMenu = () => {
    !onMenu && SetOpen(false);
  };

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
    </HeaderContainer>
  );
};

export default HeaderComponent;
