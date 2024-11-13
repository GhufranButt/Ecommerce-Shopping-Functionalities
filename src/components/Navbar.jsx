import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { totalUniqueItems } = useCart();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fs-5 py-3">
      <Link className="navbar-brand mx-4 fs-3" to="/">
        Home
      </Link>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ms-auto me-4">
          <Link to="/cart" className="nav-item nav-link">
            <i className="bi bi-cart4 fs-3"></i>
            {totalUniqueItems > 0 && (
              <span
                className="badge badge-pill badge-danger position-absolute"
                style={{
                  top: "25px",
                  right: "22px",
                  fontSize: "0.9rem",
                  width: "18px",
                  height: "18px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "50%",
                  color: "white",
                  backgroundColor: "red",
                  padding: "0",
                  fontWeight: "bold",
                  fontSize: "0.9rem",
                }}
              >
                {totalUniqueItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
