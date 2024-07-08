import { FiSun } from "react-icons/fi";
import { IoMdMoon } from "react-icons/io";
import Theme from "../../context/theme";

import { Logo, Nav, ThemeButton, WyloFont } from "./styledComponents";

const NavBar = () => (
  <Theme.Consumer>
    {(value) => {
      const { isDarkTheme, onChangeTheme } = value;
      const onClickChangeTheme = () => {
        onChangeTheme();
      };

      const bg_color = isDarkTheme ? "#36454F" : "#beacdf";

      const heading_color = isDarkTheme ? "#ECF2EA" : "#ffffff";

      const themeIcon = isDarkTheme ? (
        <FiSun size={33} color="#ffffff" />
      ) : (
        <IoMdMoon size={33} color="#ffffff" />
      );

      const websiteLogo =
        "https://res.cloudinary.com/dg2fgkjxv/image/upload/v1720289439/wyloapp_logo-removebg-preview_vtuv9i.png";

      return (
        <Nav bg_color={bg_color}>
          <a href="https://www.wyloapp.com/">
            <Logo src={websiteLogo} alt="logo" />
          </a>

          <WyloFont heading_color={heading_color}>Wylo</WyloFont>
          <ThemeButton data-testid="theme" onClick={onClickChangeTheme}>
            {themeIcon}
          </ThemeButton>
        </Nav>
      );
    }}
  </Theme.Consumer>
);

export default NavBar;
