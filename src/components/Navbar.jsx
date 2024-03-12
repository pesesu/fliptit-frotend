import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg py-2">
      <div className="container-fluid mx-md-5">
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
        <div
          className="d-lg-flex justify-content-between  collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <input
            className="form-control mt-1 navbar-search"
            type="search"
            placeholder="Search Product"
            aria-label="Search"
            style={{ maxWidth: "1090px" }}
          />

          <ul className="d-lg-flex align-items-lg-center gap-2 navbar-nav ml-2">
            <li className="nav-item">
              <a className="  nav-link  fw-medium" href="#">
                Login
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link fw-medium" href="#">
                SignUp
              </a>
            </li>
            <div className="d-flex flex-sm-column flex-lg-row">
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
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
