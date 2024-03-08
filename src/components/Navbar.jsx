import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand fw-bolder" href="#">
          FlipIt
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <input
            className="form-control mt-1 navbar-search"
            type="search"
            placeholder="Search Product"
            aria-label="Search"
          />
          <ul className="navbar-nav mx-md-4">
            <li className="nav-item">
              <a className="nav-link  mt-2 fw-medium" href="#">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mt-2 fw-medium" href="#">
                SignUp
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <button type="button" class="btn btn-dark navbar-button">
                  Sell
                </button>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <button
                  type="button"
                  class="btn btn-outline-dark navbar-button"
                >
                  Logistic
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
