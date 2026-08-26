"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaHome,
  FaGlobe,
  FaTools,
  FaCreditCard,
  FaFacebookF,
  FaClipboardList,
  FaMoneyBillWave,
  FaEnvelope,
  FaPlus,
  FaWallet,
  FaCheckCircle,
  FaTimesCircle,
  FaClock,
  FaLock,
  FaTrophy,
  FaFileAlt,
  FaCheck,
  FaArrowRight,
  FaMapMarkerAlt,
  FaHeart,
  FaBriefcase,
  FaBars,
  FaTimes,
  FaComments,
  FaStar,
} from "react-icons/fa";

export default function SellerDashboard() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  const menuItems = [
    {
      name: "Dashboard",
      icon: <FaHome />,
      className: "icon-dashboard",
      link: "/dashboard",
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
  ];

  return (
    <div className="seller-dashboard">
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

        <div className="seller-mobile-title">Seller Dashboard</div>
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
          {menuItems.map((item, index) => (
            <Link
              href={item.link}
              key={item.name}
              className={`seller-menu-item ${
                activeMenu === item.name ? "seller-menu-active" : ""
              }`}
             onClick={() => {
  setActiveMenu(item.name);
  setMenuOpen(false);
}}
            >
              <span className={`seller-menu-item-icon ${item.className || ""}`}>
                {item.icon}
              </span>

              <span className="seller-menu-item-text">{item.name}</span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* ================= MAIN CONTENT ================= */}
      <main className="seller-dashboard-content">
        {/* ================= NOTICE ================= */}
        <div className="seller-notice">
          <span className="seller-notice-label">NOTICE</span>
          <span className="seller-notice-text">
            নতুন কাজের জন্য নিয়মিত ড্যাশবোর্ড চেক করুন এবং আপনার সাবমিশন
            স্ট্যাটাস দেখুন।
          </span>
        </div>

        {/* ================= PROFILE ================= */}
        <div className="seller-profile-card">
          <div className="seller-profile-avatar">R</div>

          <div className="seller-profile-details">
            <h5>Ratul Hossain</h5>

            <div className="seller-profile-badge">Basic</div>

            <span className="seller-profile-approved">✓ approved</span>
          </div>
        </div>

        {/* ================= TOP STAT CARDS ================= */}
        <div className="row g-3 seller-top-stats">
          <div className="col-6">
            <div className="seller-info-card wallet-card">
              <span>Coin Balance</span>
              <strong>৳0.00</strong>
            </div>
          </div>

          <div className="col-6">
            <div className="seller-info-card level-card">
              <span>Current Level</span>
              <strong>Basic</strong>
            </div>
          </div>

          <div className="col-6">
            <div className="seller-info-card status-card">
              <span>Account Status</span>
              <strong>Unverified</strong>
            </div>
          </div>

          <div className="col-6">
            <div className="seller-info-card submissions-card">
              <span>Total Submissions</span>
              <strong>0</strong>
            </div>
          </div>
        </div>

        {/* ================= ACHIEVEMENT ================= */}
        <div className="achievement-card">
          <div className="achievement-icon">⚄</div>

          <div className="achievement-content">
            <strong>Achievement Card সেকশন করুন</strong>
            <small>আপনার সাফল্য Facebook-এ শেয়ার করুন</small>
          </div>

          <button>অর্জন দেখুন ❯</button>
        </div>

        {/* ================= SUBMISSION STATUS ================= */}
        <div className="row g-2 seller-submission-status">
          <div className="col-3">
            <div className="submission-box pending-box">
              <span>Pending</span>
              <strong>0</strong>
            </div>
          </div>

          <div className="col-3">
            <div className="submission-box checking-box">
              <span>Checking</span>
              <strong>0</strong>
            </div>
          </div>

          <div className="col-3">
            <div className="submission-box approved-box">
              <span>Approved</span>
              <strong>0</strong>
            </div>
          </div>

          <div className="col-3">
            <div className="submission-box rejected-box">
              <span>Rejected</span>
              <strong>0</strong>
            </div>
          </div>
        </div>

        {/* ================= TIME CARDS ================= */}
        <div className="seller-time-section">
          <div className="row g-2">
            <div className="col-6">
              <div className="seller-time-card">
                <p>
                  ফাইল রিভিউ করা হবে
                  <strong>(24 Aug 2026)</strong>
                </p>

                <div className="seller-time">21 : 46 : 19</div>

                <strong className="seller-time-label">3:00 PM</strong>
              </div>
            </div>

            <div className="col-6">
              <div className="seller-time-card second-time">
                <p>
                  রিপোর্ট দেওয়ার সময়
                  <strong>(25 Aug 2026)</strong>
                </p>

                <div className="seller-time">41 : 46 : 19</div>

                <strong className="seller-time-label">11:00 AM</strong>
              </div>
            </div>
          </div>
        </div>

        {/* ================= LEVEL SECTION ================= */}
        <div className="seller-level-section">
          <div className="seller-level-header">
            <div className="seller-level-title">
              <div className="seller-level-icon">✥</div>

              <div>
                <strong>লেভেল সিস্টেম</strong>
                <small>Approval এবং performance অনুযায়ী level</small>
              </div>
            </div>

            <span className="seller-level-approval">0 Aprv.</span>
          </div>

          {/* LEVEL ITEMS */}
          <div className="row g-2 seller-level-items">
            <div className="col-6">
              <div className="seller-level-item active-level">
                <div className="level-circle">1</div>

                <div className="level-info">
                  <strong>LEVEL 2</strong>
                  <span>৳150 per Aprv. &nbsp; 17/80 email</span>
                  <small>সফল Approval — পরবর্তী level...</small>
                </div>
              </div>
            </div>

            <div className="col-6">
              <div className="seller-level-item locked-level">
                <div className="level-circle lock">🔒</div>

                <div className="level-info">
                  <strong>LEVEL 3</strong>
                  <span>৳400 per Aprv. &nbsp; 18/80 email</span>
                  <small>Approval required</small>
                </div>
              </div>
            </div>

            <div className="col-6">
              <div className="seller-level-item locked-level">
                <div className="level-circle lock">🔒</div>

                <div className="level-info">
                  <strong>LEVEL 4</strong>
                  <span>৳500 per Aprv. &nbsp; 32/80 email</span>
                  <small>Approval required</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= QUICK ACTION + RECENT ================= */}
        <div className="row g-3 seller-bottom-section">
          {/* QUICK ACTIONS */}
          <div className="col-6">
            <div className="seller-bottom-card">
              <h5>Quick Actions</h5>

              <div className="seller-action-list">
                <button className="submit-btn">＋ Submit New Gmail</button>

                <button className="withdraw-btn">▣ Withdraw Funds</button>

                <div className="seller-offer-box">
                  <span>বিক্রি দিন, ৫৳ পান!</span>

                  <button>বিক্রি</button>
                </div>

                <button className="verify-btn">Verify (Cost: 50৳)</button>
              </div>
            </div>
          </div>

          {/* RECENT SUBMISSIONS */}
          <div className="col-6">
            <div className="seller-bottom-card recent-card">
              <h5>Recent Submissions</h5>

              <div className="seller-empty-submissions">
                <div className="empty-document-icon">▤</div>

                <strong>No submissions yet.</strong>

                <span>Uploaded accounts will appear here.</span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= FOOTER ================= */}
        <div className="seller-dashboard-footer">
          Developed <strong>Chayan biswas</strong> Powered by
          <strong>https://chayanbiswas.vercel.app</strong>
        </div>

        {/* ================= CHAT BUTTON ================= */}
        <button className="seller-chat-button">▰</button>
      </main>
    </div>
  );
}
