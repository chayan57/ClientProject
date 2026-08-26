"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import {
  FaTrophy,
  FaMedal,
  FaUserCircle,
  FaMapMarkerAlt,
  FaHeart,
  FaBriefcase,
  FaHome,
  FaGlobe,
  FaTools,
  FaCreditCard,
  FaFacebookF,
  FaClipboardList,
  FaMoneyBillWave,
  FaEnvelope,
} from "react-icons/fa";

function LeaderboardForm() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const leaders = [
    { rank: 1, name: "Top User", points: 1250 },
    { rank: 2, name: "Second User", points: 1100 },
    { rank: 3, name: "Third User", points: 980 },
    { rank: 4, name: "User Four", points: 850 },
    { rank: 5, name: "User Five", points: 760 },
  ];

  const menuItems = [
    {
      name: "Dashboard",
      icon: <FaHome />,
      className: "icon-dashboard",
      link: "/selerDashboard",
    },
    {
      name: "My Team Leaders",
      icon: <FaGlobe />,
      className: "icon-team",
      link: "/teamLeaders",
    },
    {
      name: "My Tasks",
      icon: <FaTools />,
      className: "icon-tasks",
      link: "/mytask",
    },
    {
      name: "Payment",
      icon: <FaCreditCard />,
      className: "icon-payment",
      link: "/payment",
    },
    {
      name: "Facebook Id Sell",
      icon: <FaFacebookF />,
      className: "icon-facebook",
      link: "/facebookIdSell",
    },
    {
      name: "My Job",
      icon: <FaClipboardList />,
      className: "icon-job",
      link: "/myjob",
    },
    {
      name: "Withdraw",
      icon: <FaMoneyBillWave />,
      className: "icon-withdraw",
      link: "/withdraw",
    },
    {
      name: "Gmail sell",
      icon: <FaEnvelope />,
      className: "icon-gmail",
      link: "/gmailSell",
    },
    {
      name: "Leaderboard",
      icon: <FaTrophy />,
      className: "icon-leaderboard",
      link: "/leaderboard",
    },
  ];

  return (
    <>
      {/* ================= MOBILE TOP BAR ================= */}
      <div className="seller-mobile-topbar d-lg-none">
  <button
    type="button"
    className="seller-hamburger"
    onClick={() => setMenuOpen(true)}
    aria-label="Open menu"
  >
    ☰
  </button>

  <div className="seller-ranking-info">
    <div className="seller-ranking">
      Your Ranking #1344
    </div>

    <div className="seller-earning">
      Total Earning: <strong>৳0.00</strong>
    </div>
  </div>
</div>

      {/* ================= OVERLAY ================= */}
      {menuOpen && (
        <div
          className="seller-menu-overlay"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* ================= SIDE MENU ================= */}
      <aside
        className={`seller-side-menu ${
          menuOpen ? "seller-side-menu-open" : ""
        }`}
      >
        {/* MENU HEADER */}
        <div className="seller-menu-header">
          <span>My Menus</span>

          <button
            type="button"
            className="seller-menu-close"
            onClick={() => setMenuOpen(false)}
          >
            ×
          </button>
        </div>

        {/* ================= SELLER PROFILE ================= */}
        <div className="seller-menu-profile">
          <div className="seller-menu-time">12:38:36 AM</div>

          <div className="seller-menu-logo">
            <Image
              src="/baner.jpeg"
              alt="Banner"
              width={320}
              height={160}
              priority
              className="seller-banner-image"
            />
          </div>

          <div className="seller-menu-avatar">
            <Image
              src="/logo.png"
              alt="Profile"
              width={100}
              height={100}
              className="seller-profile-image"
            />
          </div>

          <h4>Seller Name</h4>

          <p className="seller-refer-id">Refer ID: 000000000</p>

          <p className="seller-joined">Joined Aug 2026</p>

          {/* ACCOUNT STATUS */}
          <div className="seller-account-status">
            Account Status: <strong>Active</strong>
          </div>

          <div>
            <FaMapMarkerAlt />
            <span>From Bangladesh</span>
          </div>

          <div>
            <FaHeart />
            <span>Seller</span>
          </div>

          <div>
            <FaBriefcase />
            <span>Working with Seller Platform</span>
          </div>
        </div>

        {/* ================= MENU ITEMS ================= */}
        <nav className="seller-menu-list">
          {menuItems.map((item) => (
            <Link
              href={item.link}
              key={item.name}
              className={`seller-menu-item ${
                pathname === item.link ? "seller-menu-active" : ""
              }`}
              onClick={() => setMenuOpen(false)}
            >
              <span
                className={`seller-menu-item-icon ${
                  item.className || ""
                }`}
              >
                {item.icon}
              </span>

              <span className="seller-menu-item-text">
                {item.name}
              </span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* ================= MAIN CONTENT ================= */}
      <main className="seller-main-content">
        <div className="leaderboard-container">

          {/* HEADER */}
          <div className="leaderboard-header">
            <div className="leaderboard-icon">
              <FaTrophy />
            </div>

            <div>
              <h1>Leaderboard</h1>
              <p>
                Top performers and highest scoring members
              </p>
            </div>
          </div>

          {/* TOP 3 */}
          <div className="top-three">
            {leaders.slice(0, 3).map((user) => (
              <div
                className="top-user"
                key={user.rank}
              >
                <div className="rank-icon">
                  <FaMedal />
                </div>

                <div className="user-avatar">
                  <FaUserCircle />
                </div>

                <h3>{user.name}</h3>

                <span>{user.points} Points</span>
              </div>
            ))}
          </div>

          {/* LEADERBOARD LIST */}
          <div className="leaderboard-card">
            <div className="table-header">
              <span>Rank</span>
              <span>User</span>
              <span>Points</span>
            </div>

            {leaders.map((user) => (
              <div
                className="leader-row"
                key={user.rank}
              >
                <div className="rank">
                  #{user.rank}
                </div>

                <div className="user-info">
                  <FaUserCircle />
                  <span>{user.name}</span>
                </div>

                <div className="points">
                  {user.points}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default LeaderboardForm;