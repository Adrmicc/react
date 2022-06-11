import React from "react";
import { Nav,NavLink,NavMenu } from "./styles";
const Navbar = () => {
  return (
    <>
      <Nav>
          <NavMenu>
        <NavLink to="/">
          <h1>Home</h1>
        </NavLink>
            <NavLink to="/sci-fi" activeStyle>
                sci-fi
            </NavLink>
            <NavLink to="/akcja" activeStyle>
                akcja
            </NavLink>
            <NavLink to="/horror" activeStyle>
                horror
            </NavLink>
            <NavLink to="/kontakt" activeStyle>
                kontakt
            </NavLink>
            <NavLink to="/login" activeStyle>
                logowanie
            </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
