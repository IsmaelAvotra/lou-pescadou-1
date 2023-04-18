import { NavLink, Outlet } from "react-router-dom";
import homeIcon from "../images/home.png";
import serchIcon from "../images/Vector.png";
import panierIcon from "../images/panier.png";
import newsIcon from "../images/documentprevious.png";
import loginIcon from "../images/profile2user.png";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleDivVisibility,
  toggleSearchVisibility,
  toggleBothVisibility,
  toggleOrdersVisibility,
} from "../redux/reducer";
import logo from "../images/logo2.png";

export default function RootLayout() {
  const [activeLink, setActiveLink] = useState(null);
  const isDivVisible = useSelector((state) => state.visibility.isDivVisible);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleDivVisibility());
  };
  const handleLinkClick = (index) => {
    setActiveLink(index);
  };
  const toggleComponents = () => {
    dispatch(toggleBothVisibility());
  };
  const isSearchVisible = useSelector(
    (state) => state.visibility.isSearchVisible
  );
  const isOrdersVisible = useSelector(
    (state) => state.visibility.isOrdersVisible
  );
  return (
    <div>
      <div className="container d-flex justify-content-center">
        <div className="row mobile-nav w-auto">
          <ul className="me-auto mb-1 mb-lg-0 d-flex justify-content-center">
            <li className={`nav-item link ${activeLink === 0 ? "active" : ""}`}>
              <NavLink
                to="/"
                className="nav-link text-light"
                onClick={toggleComponents}
              >
                <img
                  srcSet={homeIcon}
                  alt=""
                  className={activeLink === 0 ? "rotate" : ""}
                />
              </NavLink>
            </li>
            <li className={`nav-item link ${activeLink === 1 ? "active" : ""}`}>
              <div
                className="nav-link text-light"
                onClick={() => dispatch(toggleSearchVisibility())}
              >
                <img
                  srcSet={serchIcon}
                  alt=""
                  className={activeLink === 1 ? "rotate" : ""}
                />
              </div>
            </li>
            <li className={`nav-item link ${activeLink === 2 ? "active" : ""}`}>
              <div className="nav-link text-light" onClick={handleClick}>
                <img
                  srcSet={panierIcon}
                  alt=""
                  className={activeLink === 2 ? "rotate" : ""}
                />
              </div>
            </li>
            <li className={`nav-item link ${activeLink === 3 ? "active" : ""}`}>
              <div
                className="nav-link text-light"
                onClick={() => dispatch(toggleOrdersVisibility())}
              >
                <img
                  srcSet={newsIcon}
                  alt=""
                  className={activeLink === 3 ? "rotate" : ""}
                />
              </div>
            </li>
            <li className={`nav-item link ${activeLink === 4 ? "active" : ""}`}>
              <NavLink to="/login" className="nav-link text-light">
                <img
                  srcSet={loginIcon}
                  alt=""
                  className={activeLink === 4 ? "rotate" : ""}
                />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="d-flex justify-content-between w-100">
              <li className="link">
                <NavLink className="nav-link text-light" to="/">
                  Home{" "}
                </NavLink>
              </li>
              <li className="link">
                <NavLink className="nav-link text-light" to="/whyus">
                  Why us
                </NavLink>
              </li>
              <li></li>
              <li className="link">
                <NavLink className="nav-link text-light" to="/features">
                  Features
                </NavLink>
              </li>
              <li className="link">
                <NavLink className="nav-link text-light" to="/news">
                  What's new?
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="d-flex align-items-center ms-5">
            <div className="dropdown">
              <p className="d-flex">
                <NavLink className="nav-link" to="/signup">
                  <button
                    className="btn btn-danger"
                    style={{ fontFamily: "MV Boli" }}
                  >
                    S'inscrire
                  </button>{" "}
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </nav>
      <div className="logo-web">
        <div className="d-flex align-items-end ">
          <img alt="logo" srcSet={logo} className="w-100" />
        </div>
      </div>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
}
