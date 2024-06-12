import React, { useEffect, useRef, useState } from "react";
import { Container, Row } from "reactstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsSearch, getProducts } from "../../store/productReducer";
import ProductsSearchHook from "../../hook/products-search-hook";

const Header = () => {
  const [searchHandle, searchWord] = ProductsSearchHook();
  const dispatch = useDispatch();
  const totalQty = useSelector((state) => state.product.totalQuantity);
  const favQty = useSelector((state) => state.favProduct.totalQuantity);
  const product = useSelector((state) => state.products.product);

  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add("sticky_header");
      } else {
        headerRef.current.classList.remove("sticky_header");
      }
    });
  };

  const navigateIcon = () => {
    navigate("/cart");
  };

  const navigateFav = () => {
    navigate("/wishlist");
  };

  useEffect(() => {
    stickyHeaderFunc();
    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  }, []);

  const menuToggle = () => menuRef.current.classList.toggle("active_menu");

  const nav_link = [
    {
      path: "home",
      display: "Home",
    },
    {
      path: "contact",
      display: "Contact",
    },
    {
      path: "about",
      display: "About",
    },
    {
      path: "signup",
      display: "Sign up",
    },
  ];

  const [user, setUser] = useState(() => {
    try {
      const data = localStorage.getItem("user");
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error("Error parsing user data from localStorage:", error);
      return null;
    }
  });

  const logOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav_wrapper">
            <div className="logo">
              <div>
                <Link to="/home">
                  <h1>Exclusive</h1>
                </Link>
              </div>
            </div>
            <div className="navigation" ref={menuRef} onClick={menuToggle}>
              <ul className="menu">
                {nav_link.map((item, index) => (
                  <li className="nav_item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "nav_active" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav_icon">
              <div className="search">
                <input
                  type="text"
                  placeholder="looking for?"
                  onChange={searchHandle}
                />
                <i className="ri-search-line"></i>
              </div>
              <span className="fav_icon" onClick={navigateFav}>
                <i className="ri-heart-line"></i>
                <span className="badge">{favQty} </span>
              </span>
              <span className="cart_icon" onClick={navigateIcon}>
                <i className="ri-shopping-cart-2-line"></i>
                <span className="badge"> {totalQty}</span>
              </span>

              <span className="profile">
                <i onClick={() => setToggle(!toggle)} className="ri-user-3-line"></i>

                <div className={toggle ? "profile_action d-block" : "profile_action"}>
                  <div className="d-flex justify-content-center align-items-center flex-column" onClick={() => setToggle(!toggle)}>
                    {user ? (
                      <>
                        <Link to="/account">Manage My Account</Link>
                        {user.role === "admin" ? <Link to="/admin/allproducts">Dashboard</Link> : <Link to="/order">My Order</Link>}
                        <Link onClick={logOut} to="/">Logout</Link>
                      </>
                    ) : (
                      <>
                        <Link to="/signup">Signup</Link>
                        <Link to="/login">Login</Link>
                      </>
                    )}
                  </div>
                </div>
              </span>

              <div className="mobile_menu">
                <span onClick={menuToggle}>
                  <i className="ri-menu-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
