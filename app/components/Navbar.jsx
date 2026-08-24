"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
  <nav
  className="navbar navbar-expand-lg"
  style={{
    position: "sticky",
    top: 0,
    zIndex: 9999,
    backgroundColor: "rgba(6, 7, 11, 0.88)",
    backdropFilter: "blur(15px)",
    WebkitBackdropFilter: "blur(15px)",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
  }}
>
      <div className="container">
        <div
          className="d-flex align-items-center justify-content-between w-100"
          style={{
            minHeight: "75px",
          }}
        >
          {/* Logo */}
          <Link
  href="/"
  className="text-white text-decoration-none fw-bold d-flex align-items-center gap-2"
  style={{
    whiteSpace: "nowrap",
  }}
>
  <Image
    src="/icon.png"
    width={55}
    height={55}
    className="rounded-3 logo-img"
    alt="Earnify Hub logo"
  />

  <span className="brand-text">EARNIFY HUB</span>
</Link>

          {/* Desktop Buttons */}
          <div className="d-none d-lg-flex align-items-center gap-4">

            <Link className="text-light" href="/selerDashboard">
seler
</Link>
            <Link
              className="text-light text-decoration-none desktopLogin"
              href="/login"
              style={{fontSize:"18px"}}
            >
              Login
            </Link>

            <Link
              className="bg-light rounded-5 text-decoration-none text-black px-4 py-2"
              style={{
                fontSize: "19px",
                fontWeight: "600",
              }}
              href="/login"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Button */}
          
<div className="d-flex d-lg-none align-items-center gap-3">

  <Link className="text-light" href="/selerDashboard">
seler
</Link>
  <Link
    href="/login"
    className="text-light text-decoration-none mobile-login"
  >
    Login
  </Link>

  <Link
    href="/register"
    className="text-white text-decoration-none rounded-5 mobile-register"
  >
    Register
  </Link>
</div>
        </div>

        {/* Mobile Navbar Content */}
        <div
          className="collapse navbar-collapse"
          id="mainNavbar"
        >
          <div
            className="d-flex d-lg-none flex-column gap-3 w-100"
            style={{
              padding: "15px 0 20px",
            }}
          >
            <Link className="text-light" href="/selerDashboard">
seler
</Link>
            <Link
              className="text-light text-decoration-none"
              href="/login"
            >
              Login
            </Link>

            <Link
              className="bg-light rounded-5 text-decoration-none text-black text-center px-4 py-2"
              style={{
                fontSize: "18px",
                fontWeight: "600",
              }}
              href="/login"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}