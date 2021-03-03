import React from "react";
import { Link } from "react-router-dom";

const Header = ({ dark, children, className, to }) => {
  dark = !!dark ? "dark" : "light";
  return (
    <nav
      className={
        `navbar navbar-${dark} bg-${dark}` + (className ? " " + className : "")
      }
    >
      {to ? (
        <Link to={to} className="navbar-brand">
          {children}
        </Link>
      ) : (
        <span className="navbar-brand">{children}</span>
      )}
    </nav>
  );
};

export default Header;
