import React, { useRef } from 'react'; // Import useRef from React
import './Navbar.css';
import logo from '../../assets/icon/Logo.svg'; // Adjust the path as necessary
import bellIcon from '../../assets/icon/bell.svg'; // Adjust the path as necessary

const Navbar = () => {
  const navbarCollapseRef = useRef(null);

  const handleLinkClick = () => {
    if (navbarCollapseRef.current && navbarCollapseRef.current.classList.contains("show")) {
      // Bootstrap's collapse API
      const collapse = new window.bootstrap.Collapse(navbarCollapseRef.current, { toggle: false });
      collapse.hide();
    }
  };

  return (
    <nav className="container-fluid navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img
            src={logo} // Use the imported logo
            alt="Logo"
            width="50"
            height="50"
          />
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
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
          ref={navbarCollapseRef}
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link font-20-16"
                aria-current="page"
                href="https://surpass.academy/courses-categories/"
                onClick={handleLinkClick}
              >
                Courses
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link font-20-16" href="/" onClick={handleLinkClick}>
                Instructors
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link font-20-16" href="/" onClick={handleLinkClick}>
                Placements
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link font-20-16"
                href="https://surpass.academy/faq/"
                onClick={handleLinkClick}
              >
                FAQ
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link font-20-16"
                href="https://surpass.academy/contact-us/"
                onClick={handleLinkClick}
              >
                Contact Us
              </a>
            </li>
          </ul>
          <div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link website_color font-20-16"
                  href="https://surpass.academy/"
                  onClick={handleLinkClick}
                >
                  Go to Website
                </a>
              </li>
              <li className="nav-item">
                <img
                  src={bellIcon} // Use the imported bell icon
                  className="bell_icon"
                  alt="Bell Icon" // Add alt text for accessibility
                />
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle d-flex align-items-center"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://via.placeholder.com/50" // Placeholder for profile picture
                    className="profile-img"
                    alt=""
                  />
                  <div className="ms-2">
                    <span className="fw-bold font-20-16">Sumanyu</span>
                    <br />
                    <span className="text-muted font-20-16">Student</span>
                  </div>
                </a>

                <ul className="dropdown-menu">
                  <span className="dropdown-item font-20-16">
                    <b>Dashboard</b>
                  </span>
                  <li>
                    <a
                      className="dropdown-item font-20-16"
                      onClick={handleLinkClick}
                      href="/"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item font-20-16"
                      onClick={handleLinkClick}
                      href="/"
                    >
                      My Profile
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item font-20-16"
                      onClick={handleLinkClick}
                      href="/"
                    >
                      Order History
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item font-20-16"
                      onClick={handleLinkClick}
                      href="/"
                    >
                      Question & Answer
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item font-20-16"
                      onClick={handleLinkClick}
                      href="/"
                    >
                      Message / Live Chat
                    </a>
                  </li>

                  <span className="dropdown-item font-20-16">
                    <b>Account Setting</b>
                  </span>
                  <li>
                    <a
                      className="dropdown-item font-20-16"
                      onClick={handleLinkClick}
                      href="/"
                    >
                      Setting
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item font-20-16"
                      onClick={handleLinkClick}
                      href="/"
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
