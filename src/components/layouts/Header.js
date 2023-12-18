import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Header.css";
import { useSelector } from "react-redux";

const Header = () => {
  const allItem = useSelector((state) => state);
  const { isLogin } = useAuth();

  const commonLinks = [
    { to: "/home", label: "Home" },
    { to: "/users", label: "Users" },
    { to: "/products", label: "Products" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  const authLinks = [
    { to: "/home", label: "Home" },
    { to: "/products", label: "Products" },
    { to: "/logout", label: "Logout" },
  ];

  const guestLinks = [
    { to: "/login", label: "Login" },
    { to: "/register", label: "Register" },
  ];

  const linksToShow =
    isLogin === true ? authLinks : [...commonLinks, ...guestLinks];
  console.log(linksToShow);
  return (
    <div className="header">
      <NavLink to="/" className="logo">
        React Portal
      </NavLink>
      <div className="header-right">
        {linksToShow.map((link) => (
          <NavLink
            key={"navlink_" + link.to}
            to={link.to}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {link.label}
          </NavLink>
        ))}
        {allItem.length > 0 ? (
          <NavLink key={"navlink_cart"} to="/cart">
            {`${allItem.length} Item in Cart`}
          </NavLink>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Header;
