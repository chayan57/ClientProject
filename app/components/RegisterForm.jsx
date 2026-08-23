"use client";
import { IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { IoBagHandle } from "react-icons/io5";
import { GiShoppingBag } from "react-icons/gi";


import { FaEye, FaRegEyeSlash, FaTelegramPlane } from "react-icons/fa";

import Link from "next/link";
import Image from "next/image";
import { MdOutlineRealEstateAgent } from "react-icons/md";
function RegisterForm() {
  const [accountType, setAccountType] = useState("");

  const [isShowPassword, setIsShowPassword] = useState(false);

  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);
  const [showAccountVideo, setShowAccountVideo] = useState(false);


const [showTelegramPopup, setShowTelegramPopup] = useState(false);
const [showAccountVideoVideo, setShowAccountVideoVideo] = useState(false);
useEffect(() => {
  setShowTelegramPopup(true);
}, []);
  

const handleAccountType = (type) => {
  setAccountType(type);
  setShowAccountVideoVideo(false);
  setShowAccountVideo(true);
};

  return (
    <>
      {/* =====================================================
          TELEGRAM POPUP
      ===================================================== */}
{showTelegramPopup && (
  <div
    style={{
      position: "fixed",
      inset: 0,
      zIndex: 99999,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "12px",
      background: "rgba(0,0,0,0.65)",
      backdropFilter: "blur(6px)",
      WebkitBackdropFilter: "blur(6px)",
    }}
  >
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "420px",
        maxHeight: "calc(100vh - 24px)",
        overflowY: "auto",
        overflowX: "hidden",
        borderRadius: "24px",
        background:
          "linear-gradient(145deg, #075985 0%, #0f7fc0 45%, #229ed9 100%)",
        boxShadow: "0 25px 70px rgba(0,0,0,0.4)",
      }}
    >
      {/* Background Glow */}

      <div
        style={{
          position: "absolute",
          width: "180px",
          height: "180px",
          borderRadius: "50%",
          background: "rgba(34,158,217,0.25)",
          filter: "blur(35px)",
          top: "-80px",
          left: "-70px",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          width: "160px",
          height: "160px",
          borderRadius: "50%",
          background: "rgba(2,178,144,0.18)",
          filter: "blur(35px)",
          bottom: "-90px",
          right: "-70px",
          pointerEvents: "none",
        }}
      />

      {/* Content */}

      <div
        style={{
          position: "relative",
          padding: "32px 24px 24px",
          textAlign: "center",
          color: "#ffffff",
        }}
      >
        {/* Close */}

        <button
          type="button"
          onClick={() => setShowTelegramPopup(false)}
          style={{
            position: "absolute",
            top: "12px",
            right: "12px",
            width: "34px",
            height: "34px",
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.35)",
            background: "rgba(255,255,255,0.15)",
            color: "#ffffff",
            fontSize: "20px",
            lineHeight: "1",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,
          }}
        >
          ×
        </button>

        {/* Telegram Icon */}

        <div
          style={{
            position: "relative",
            width: "86px",
            height: "86px",
            margin: "0 auto 20px",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: "-8px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.18)",
              animation: "telegramRing 2s ease-in-out infinite",
            }}
          />

          <div
            style={{
              position: "relative",
              width: "86px",
              height: "86px",
              borderRadius: "50%",
              background:
                "linear-gradient(135deg,#2AABEE,#168AC0)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
              boxShadow: "0 12px 35px rgba(0,0,0,0.25)",
              animation: "telegramFloat 3s ease-in-out infinite",
            }}
          >
            <FaTelegramPlane size={38} />
          </div>

          <span
            style={{
              position: "absolute",
              right: "2px",
              bottom: "4px",
              width: "18px",
              height: "18px",
              borderRadius: "50%",
              background: "#02B290",
              border: "3px solid #ffffff",
            }}
          />
        </div>

        {/* Badge */}

        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            padding: "6px 11px",
            borderRadius: "30px",
            background: "rgba(255,255,255,0.14)",
            color: "#ffffff",
            fontSize: "11px",
            fontWeight: 700,
            marginBottom: "10px",
            border: "1px solid rgba(255,255,255,0.2)",
          }}
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "#02B290",
            }}
          />

          EARNIFY HUB COMMUNITY
        </div>

        {/* Title */}

        <h4
          style={{
            margin: "0 0 9px",
            fontSize: "23px",
            fontWeight: 800,
            color: "#ffffff",
            letterSpacing: "-0.4px",
          }}
        >
          Join Our Telegram
        </h4>

        {/* Description */}

        <p
          style={{
            margin: "0 auto 20px",
            maxWidth: "390px",
            fontSize: "13px",
            lineHeight: "1.65",
            color: "rgba(255,255,255,0.82)",
          }}
        >
          Stay connected with EARNIFY HUB and get important updates,
          announcements and community news directly on Telegram.
        </p>

        {/* Benefits */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "7px",
            marginBottom: "21px",
          }}
        >
          {[
            ["🔔", "Updates"],
            ["⚡", "Fast News"],
            ["👥", "Community"],
          ].map(([icon, text]) => (
            <div
              key={text}
              style={{
                padding: "9px 5px",
                borderRadius: "10px",
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.18)",
              }}
            >
              <div
                style={{
                  fontSize: "17px",
                  marginBottom: "3px",
                }}
              >
                {icon}
              </div>

              <span
                style={{
                  fontSize: "9px",
                  fontWeight: 600,
                  color: "#ffffff",
                }}
              >
                {text}
              </span>
            </div>
          ))}
        </div>

        {/* Join Telegram */}

        <a
          href="https://t.me/gmail_buysellgroup0"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "9px",
            width: "100%",
            padding: "12px",
            borderRadius: "11px",
            background: "#ffffff",
            color: "#168AC0",
            textDecoration: "none",
            fontSize: "14px",
            fontWeight: 700,
            boxShadow: "0 8px 22px rgba(0,0,0,0.18)",
            boxSizing: "border-box",
          }}
        >
          <FaTelegramPlane size={17} />

          Join Telegram Community

          <span style={{ fontSize: "17px" }}>→</span>
        </a>

        {/* Maybe Later */}

        <button
          type="button"
          onClick={() => setShowTelegramPopup(false)}
          style={{
            marginTop: "9px",
            border: "none",
            background: "transparent",
            color: "rgba(255,255,255,0.75)",
            fontSize: "12px",
            cursor: "pointer",
            padding: "5px 10px",
          }}
        >
          Maybe later
        </button>

        {/* Footer */}

        <div
          style={{
            marginTop: "12px",
            paddingTop: "12px",
            borderTop: "1px solid rgba(255,255,255,0.18)",
            fontSize: "10px",
            color: "rgba(255,255,255,0.6)",
          }}
        >
          Official EARNIFY HUB community
        </div>
      </div>
    </div>
  </div>
)}

      {/* =====================================================
          REGISTER FORM
      ===================================================== */}

      <section
        className="container-fluid d-flex justify-content-center align-items-center px-3"
        style={{
          minHeight: "100vh",
          paddingTop: "20px",
          paddingBottom: "20px",
        }}
      >
        <div
          className="w-100 rounded-3"
          style={{
            backgroundColor: "#ffffff",
            maxWidth: "550px",
            overflowY: "auto",
            overflowX: "hidden",
            paddingBottom: "20px",
          }}
        >
          <form className="register-form px-3 px-sm-4 pt-4">
            {/* =================================================
                HEADING
            ================================================= */}

            <Image
              className="d-block mx-auto mb-2"
              src="/icon.png"
              height={60}
              width={60}
              alt="logo"
            />

            <h4 className="text-center mb-2">Create Account</h4>

            <p
              className="text-center text-muted mb-4"
              style={{
                fontSize: "14px",
              }}
            >
              Join EARNIFY HUB Network
            </p>

            {/* =================================================
                FULL NAME
            ================================================= */}

            <div className="mb-3">
              <label htmlFor="fullName" className="form-label">
                Full Name
              </label>

              <input
                name="fullName"
                type="text"
                className="form-control"
                id="fullName"
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* =================================================
                EMAIL
            ================================================= */}

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>

              <input
                name="email"
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* =================================================
                PHONE
            ================================================= */}

            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>

              <input
                name="phone"
                type="tel"
                className="form-control"
                id="phone"
                placeholder="Enter your phone number"
                required
              />
            </div>

            {/* =================================================
                DATE OF BIRTH + REFER CODE
            ================================================= */}

              <div className="col-6 mb-3">
                <label htmlFor="dateOfBirth" className="form-label ">
                  Date of Birth
                </label>

                <input
                  name="dateOfBirth"
                  type="date"
                  className="form-control"
                  id="dateOfBirth"
                  required
                />
              </div>

              <div className="col-6 mb-3">
                <label htmlFor="referCode" className="form-label ">
                  Refer Code
                </label>

                <input
                  name="referCode"
                  type="text"
                  className="form-control"
                  id="referCode"
                  placeholder="Enter refer code"
                />
              </div>

            {/* =================================================
                PASSWORD + CONFIRM PASSWORD
            ================================================= */}

          
              {/* Password */}

              <div className="col-12 mb-3">
                <label htmlFor="password" className="form-label ">
                  Password
                </label>

                <div className="position-relative">
                  <input
                    name="password"
                    type={isShowPassword ? "text" : "password"}
                    className="form-control"
                    id="password"
                    placeholder="min6 chars"
                    required
                  />

                  <IconButton
                    className="position-absolute top-50 end-0 translate-middle-y"
                    type="button"
                    size="small"
                    onClick={() => setIsShowPassword((prev) => !prev)}
                  >
                    {isShowPassword ? (
                      <FaEye size={15} />
                    ) : (
                      <FaRegEyeSlash size={15} />
                    )}
                  </IconButton>
                </div>
              </div>

              {/* Confirm Password */}

              <div className="col-12 mb-3">
                <label htmlFor="confirmPassword" className="form-label ">
                  Confirm Password
                </label>

                <div className="position-relative">
                  <input
                    name="confirmPassword"
                    type={isShowConfirmPassword ? "text" : "password"}
                    className="form-control"
                    id="confirmPassword"
                    placeholder="Confirm pass"
                    required
                  />

                  <IconButton
                    className="position-absolute top-50 end-0 translate-middle-y"
                    type="button"
                    size="small"
                    onClick={() => setIsShowConfirmPassword((prev) => !prev)}
                  >
                    {isShowConfirmPassword ? (
                      <FaEye size={15} />
                    ) : (
                      <FaRegEyeSlash size={15} />
                    )}
                  </IconButton>
                </div>
              </div>
            

            {/* =================================================
                     ACCOUNT TYPE
            ================================================= */}

            

           <div className="account-type-grid d-flex justify-content-center">

  {/* Seller */}
  <label
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    cursor: "pointer",
  }}
  className={`account-card ${
    accountType === "seller" ? "active" : ""
  }`}
  onClick={() => handleAccountType("seller")}
>
  <div
  className="p-1"
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "6px",
    }}
  >
    <div
      style={{
        width: "42px",
        height: "42px",
        borderRadius: "12px",
        backgroundColor: "rgba(2, 178, 144, 0.12)",
        color: "#02B290",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <IoBagHandle size={25} />
    </div>

    <span
      style={{
        fontSize: "12px",
        fontWeight: 700,
        color: "#111827",
        margin: 0,
        lineHeight: 1.2,
      }}
    >
      Seller Account
    </span>
  </div>
</label>

  {/* Buyer */}
  <label
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    cursor: "pointer",
  }}
  className={`account-card ${
  accountType === "buyer" ? "active" : ""
}`}
onClick={() => handleAccountType("buyer")}
  
>
  <div
   className="p-1"
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "6px",
    }}
  >
    <div
      style={{
        width: "42px",
        height: "42px",
        borderRadius: "12px",
        backgroundColor: "rgba(2, 178, 144, 0.12)",
        color: "#02B290",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <GiShoppingBag size={25} />
    </div>

    <span
      style={{
        fontSize: "12px",
        fontWeight: 700,
        color: "#111827",
        margin: 0,
        lineHeight: 1.2,
      }}
    >
      Buyer Account
    </span>
  </div>
</label>

  {/* Agent */}
  <label
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    cursor: "pointer",
  }}
 className={`account-card ${
  accountType === "agent" ? "active" : ""
}`}
onClick={() => handleAccountType("agent")}
>
  <div
   className="p-1"
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "6px",
    }}
  >
    <div
      style={{
        width: "42px",
        height: "42px",
        borderRadius: "12px",
        backgroundColor: "rgba(2, 178, 144, 0.12)",
        color: "#02B290",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <MdOutlineRealEstateAgent size={25} />
    </div>

    <span
      style={{
        fontSize: "12px",
        fontWeight: 700,
        color: "#111827",
        margin: 0,
        lineHeight: 1.2,
      }}
    >
      Agent Account
    </span>
  </div>
</label>

</div>

{/* =================================================
    YOUTUBE TUTORIAL
================================================= */}

{/* =================================================
    ACCOUNT VIDEO POPUP
================================================= */}

{showAccountVideo && (
  <div
    style={{
      position: "fixed",
      inset: 0,
      zIndex: 99998,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "15px",
      background: "rgba(0,0,0,0.65)",
      backdropFilter: "blur(6px)",
      WebkitBackdropFilter: "blur(6px)",
    }}
  >
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "600px",
        maxHeight: "calc(100vh - 30px)",
        overflowY: "auto",
        background: "#ffffff",
        borderRadius: "18px",
        padding: "22px",
        boxSizing: "border-box",
        boxShadow: "0 25px 70px rgba(0,0,0,0.35)",
      }}
    >
      {/* Close */}

      <button
        type="button"
        onClick={() => setShowAccountVideo(false)}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          width: "32px",
          height: "32px",
          border: "none",
          borderRadius: "50%",
          background: "#f1f5f9",
          color: "#111827",
          fontSize: "20px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 5,
        }}
      >
        ×
      </button>

      {/* Question */}

      <div
        style={{
          textAlign: "center",
          padding: "10px 25px 18px",
        }}
      >
        <h5
          style={{
            margin: "0 0 8px",
            fontSize: "18px",
            fontWeight: 800,
            color: "#111827",
          }}
        >
          আপনি এই কাজ সম্পর্কে বিস্তারিত জানতে চান?
        </h5>

        <p
          style={{
            margin: 0,
            fontSize: "13px",
            color: "#6b7280",
          }}
        >
          {accountType === "seller" && "Seller Account সম্পর্কে বিস্তারিত ভিডিও দেখুন"}
          {accountType === "buyer" && "Buyer Account সম্পর্কে বিস্তারিত ভিডিও দেখুন"}
          {accountType === "agent" && "Agent Account সম্পর্কে বিস্তারিত ভিডিও দেখুন"}
        </p>
      </div>

      {/* Buttons */}

      {!showAccountVideoVideo && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            marginBottom: "10px",
          }}
        >
          <button
            type="button"
            onClick={() => setShowAccountVideoVideo(true)}
            style={{
              border: "none",
              borderRadius: "8px",
              padding: "9px 28px",
              background: "#02B290",
              color: "#ffffff",
              fontSize: "14px",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            হ্যাঁ
          </button>

          <button
            type="button"
            onClick={() => setShowAccountVideo(false)}
            style={{
              border: "1px solid #d1d5db",
              borderRadius: "8px",
              padding: "9px 28px",
              background: "#ffffff",
              color: "#374151",
              fontSize: "14px",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            না
          </button>
        </div>
      )}

      {/* Video */}

      {showAccountVideoVideo && (
        <div
          style={{
            width: "100%",
            aspectRatio: "16 / 9",
            overflow: "hidden",
            borderRadius: "12px",
            background: "#000000",
          }}
        >
          <iframe
            src={
              accountType === "seller"
                ? "https://www.youtube.com/embed/wHfSba9XVXI"
                : accountType === "buyer"
                ? "https://www.youtube.com/embed/Z1zWG0OFSJk"
                : "https://www.youtube.com/embed/o1fBCbLh6LM"
            }
            title={`${accountType} account tutorial`}
            style={{
              width: "100%",
              height: "100%",
              border: "none",
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      )}
    </div>
  </div>
)}

            {/* =================================================
                CREATE ACCOUNT
            ================================================= */}

            <button
              type="submit"
              className="btn m-2 w-100 text-light"
              style={{
                backgroundColor: "#02B290",
                border: "none",
                padding: "10px",
                fontWeight: 600,
                borderRadius: "8px",
              }}
            >
              Create Account
            </button>

            {/* =================================================
                LOGIN
            ================================================= */}

            <div className="text-center mt-3">
              <p
                className="mb-1"
                style={{
                  fontSize: "14px",
                }}
              >
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-decoration-none"
                  style={{
                    color: "#02B290",
                  }}
                >
                  Login
                </Link>
              </p>

              <span
                className="text-muted"
                style={{
                  fontSize: "14px",
                }}
              >
                Or continue with social account
              </span>
            </div>

            {/* =================================================
                GOOGLE
            ================================================= */}

            <div className="text-center mt-3">
              <span
                className="text-muted"
                style={{
                  fontSize: "14px",
                }}
              >
                or continue with google
              </span>
            </div>
          </form>
        </div>
      </section>

      {/* =====================================================
          ANIMATIONS
      ===================================================== */}

      <style jsx>{`
        @keyframes telegramRing {
          0% {
            transform: scale(0.9);
            opacity: 0.8;
          }

          50% {
            transform: scale(1.08);
            opacity: 0.35;
          }

          100% {
            transform: scale(0.9);
            opacity: 0.8;
          }
        }

        @keyframes telegramFloat {
          0% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-5px);
          }

          100% {
            transform: translateY(0);
          }
        }

        @media (max-width: 400px) {
          .container-fluid {
            padding-left: 10px !important;
            padding-right: 10px !important;
          }
        }
      `}</style>
    </>
  );
}

export default RegisterForm;
