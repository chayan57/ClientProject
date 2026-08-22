"use client";

import React, { useState } from "react";
import { IconButton } from "@mui/material";
import {
  StorefrontOutlined,
  ShoppingCartOutlined,
  SupportAgentOutlined,
} from "@mui/icons-material";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

function RegisterForm() {
  const [accountType, setAccountType] = useState("");
  const [isShowPassword, setIsShowPassword] =
    useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] =
    useState(false);

  return (
    <section
      className="container-fluid d-flex justify-content-center align-items-center px-3"
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5efef",
        paddingTop: "20px",
        paddingBottom: "20px",
        overflowX: "hidden",
      }}
    >
      <div
        className="w-100 rounded-3"
        style={{
          backgroundColor: "#ffffff",
          maxWidth: "450px",
          maxHeight: "95vh",
          overflowY: "auto",
          overflowX: "hidden",
          paddingBottom: "20px",
        }}
      >
        <form className="px-3 px-sm-4 pt-4">

          {/* Heading */}
         <Image className="d-block mx-auto mb-2" src="/icon.png" height={60} width={60} alt="logo"/>
          <h4 className="text-center mb-2">
            Create Account
          </h4>

          <p
            className="text-center text-muted mb-4"
            style={{
              fontSize: "14px",
            }}
          >
            Join EARNIFY HUB Network
          </p>

          {/* Full Name */}

          <div className="mb-3">
            <label
              htmlFor="fullName"
              className="form-label"
            >
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

          {/* Email */}

          <div className="mb-3">
            <label
              htmlFor="email"
              className="form-label"
            >
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

          {/* Phone */}

          <div className="mb-3">
            <label
              htmlFor="phone"
              className="form-label"
            >
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

          {/* Date of Birth + Refer Code */}

          <div className="row g-2">
            <div className="col-6 mb-3">
              <label
                htmlFor="dateOfBirth"
                className="form-label"
              >
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
              <label
                htmlFor="referCode"
                className="form-label"
              >
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
          </div>

          {/* Password + Confirm Password */}

          <div className="row g-2">
            <div className="col-6 mb-3">
              <label
                htmlFor="password"
                className="form-label"
              >
                Password
              </label>

              <div className="position-relative">
                <input
                  name="password"
                  type={
                    isShowPassword
                      ? "text"
                      : "password"
                  }
                  className="form-control"
                  id="password"
                  placeholder="min6 chars"
                  required
                />

                <IconButton
                  className="position-absolute top-50 end-0 translate-middle-y"
                  type="button"
                  size="small"
                  onClick={() =>
                    setIsShowPassword(
                      (prev) => !prev
                    )
                  }
                >
                  {isShowPassword ? (
                    <FaEye size={15} />
                  ) : (
                    <FaRegEyeSlash size={15} />
                  )}
                </IconButton>
              </div>
            </div>

            <div className="col-6 mb-3">
              <label
                htmlFor="confirmPassword"
                className="form-label"
              >
                Confirm Password
              </label>

              <div className="position-relative">
                <input
                  name="confirmPassword"
                  type={
                    isShowConfirmPassword
                      ? "text"
                      : "password"
                  }
                  className="form-control"
                  id="confirmPassword"
                  placeholder="Confirm pass"
                  required
                />

                <IconButton
                  className="position-absolute top-50 end-0 translate-middle-y"
                  type="button"
                  size="small"
                  onClick={() =>
                    setIsShowConfirmPassword(
                      (prev) => !prev
                    )
                  }
                >
                  {isShowConfirmPassword ? (
                    <FaEye size={15} />
                  ) : (
                    <FaRegEyeSlash size={15} />
                  )}
                </IconButton>
              </div>
            </div>
          </div>

          {/* Account Type */}

          <div className="mb-3">
            <label
              className="form-label"
              style={{
                fontWeight: 600,
                marginBottom: "8px",
              }}
            >
              Account Type
            </label>

            <div
              className="d-flex gap-2"
              style={{
                width: "100%",
                overflow: "hidden",
              }}
            >

              {/* Seller */}

              <label
                className="rounded-3 d-flex align-items-center"
                style={{
                  cursor: "pointer",
                  flex: "1 1 0",
                  minWidth: 0,
                  height: "62px",
                  padding: "7px",
                  border:
                    accountType === "seller"
                      ? "2px solid #02B290"
                      : "1px solid #dee2e6",
                  backgroundColor:
                    accountType === "seller"
                      ? "rgba(2, 178, 144, 0.06)"
                      : "#fff",
                  boxShadow:
                    accountType === "seller"
                      ? "0 4px 14px rgba(2, 178, 144, 0.12)"
                      : "none",
                  transition:
                    "all 0.2s ease",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  if (
                    accountType !== "seller"
                  ) {
                    e.currentTarget.style.borderColor =
                      "#02B290";

                    e.currentTarget.style.boxShadow =
                      "0 4px 14px rgba(2, 178, 144, 0.08)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (
                    accountType !== "seller"
                  ) {
                    e.currentTarget.style.borderColor =
                      "#dee2e6";

                    e.currentTarget.style.boxShadow =
                      "none";
                  }
                }}
              >
                <input
                  type="radio"
                  name="accountType"
                  value="seller"
                  checked={
                    accountType === "seller"
                  }
                  onChange={(e) =>
                    setAccountType(
                      e.target.value
                    )
                  }
                  style={{
                    margin: 0,
                    marginRight: "4px",
                    flexShrink: 0,
                    width: "12px",
                    height: "12px",
                  }}
                />

                <StorefrontOutlined
                  sx={{
                    fontSize: 20,
                    color:
                      accountType ===
                      "seller"
                        ? "#02B290"
                        : "#6c757d",
                    marginRight: "4px",
                    flexShrink: 0,
                  }}
                />

                <div 
                  style={{
                    minWidth: 0,
                    overflow: "hidden",
                  }}
                >
                  <strong
                    style={{
                      fontSize: "11px",
                      display: "block",
                      lineHeight: "1.2",
                    }}
                  >
                    Seller
                  </strong>

                  <div
                    className="text-muted mt-1"
                    style={{
                      fontSize: "8px",
                      lineHeight: "1.1",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow:
                        "ellipsis",
                    }}
                  >
                    Submit & earn Gmail
                  </div>
                </div>
              </label>

              {/* Buyer */}

              <label
                className="rounded-3 d-flex align-items-center"
                style={{
                  cursor: "pointer",
                  flex: "1 1 0",
                  minWidth: 0,
                  height: "62px",
                  padding: "7px",
                  border:
                    accountType === "buyer"
                      ? "2px solid #02B290"
                      : "1px solid #dee2e6",
                  backgroundColor:
                    accountType === "buyer"
                      ? "rgba(2, 178, 144, 0.06)"
                      : "#fff",
                  boxShadow:
                    accountType === "buyer"
                      ? "0 4px 14px rgba(2, 178, 144, 0.12)"
                      : "none",
                  transition:
                    "all 0.2s ease",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  if (
                    accountType !== "buyer"
                  ) {
                    e.currentTarget.style.borderColor =
                      "#02B290";

                    e.currentTarget.style.boxShadow =
                      "0 4px 14px rgba(2, 178, 144, 0.08)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (
                    accountType !== "buyer"
                  ) {
                    e.currentTarget.style.borderColor =
                      "#dee2e6";

                    e.currentTarget.style.boxShadow =
                      "none";
                  }
                }}
              >
                <input
                  type="radio"
                  name="accountType"
                  value="buyer"
                  checked={
                    accountType === "buyer"
                  }
                  onChange={(e) =>
                    setAccountType(
                      e.target.value
                    )
                  }
                  style={{
                    margin: 0,
                    marginRight: "4px",
                    flexShrink: 0,
                    width: "12px",
                    height: "12px",
                  }}
                />

                <ShoppingCartOutlined
                  sx={{
                    fontSize: 20,
                    color:
                      accountType ===
                      "buyer"
                        ? "#02B290"
                        : "#6c757d",
                    marginRight: "4px",
                    flexShrink: 0,
                  }}
                />

                <div
                  style={{
                    minWidth: 0,
                    overflow: "hidden",
                  }}
                >
                  <strong
                    style={{
                      fontSize: "11px",
                      display: "block",
                      lineHeight: "1.2",
                    }}
                  >
                    Buyer
                  </strong>

                  <div
                    className="text-muted mt-1"
                    style={{
                      fontSize: "8px",
                      lineHeight: "1.1",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow:
                        "ellipsis",
                    }}
                  >
                    Buy Gmail accounts
                  </div>
                </div>
              </label>

              {/* Agent */}

              <label
                className="rounded-3 d-flex align-items-center"
                style={{
                  cursor: "pointer",
                  flex: "1 1 0",
                  minWidth: 0,
                  height: "62px",
                  padding: "7px",
                  border:
                    accountType === "agent"
                      ? "2px solid #02B290"
                      : "1px solid #dee2e6",
                  backgroundColor:
                    accountType === "agent"
                      ? "rgba(2, 178, 144, 0.06)"
                      : "#fff",
                  boxShadow:
                    accountType === "agent"
                      ? "0 4px 14px rgba(2, 178, 144, 0.12)"
                      : "none",
                  transition:
                    "all 0.2s ease",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  if (
                    accountType !== "agent"
                  ) {
                    e.currentTarget.style.borderColor =
                      "#02B290";

                    e.currentTarget.style.boxShadow =
                      "0 4px 14px rgba(2, 178, 144, 0.08)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (
                    accountType !== "agent"
                  ) {
                    e.currentTarget.style.borderColor =
                      "#dee2e6";

                    e.currentTarget.style.boxShadow =
                      "none";
                  }
                }}
              >
                <input
                  type="radio"
                  name="accountType"
                  value="agent"
                  checked={
                    accountType === "agent"
                  }
                  onChange={(e) =>
                    setAccountType(
                      e.target.value
                    )
                  }
                  style={{
                    margin: 0,
                    marginRight: "4px",
                    flexShrink: 0,
                    width: "12px",
                    height: "12px",
                  }}
                />

                <SupportAgentOutlined
                  sx={{
                    fontSize: 20,
                    color:
                      accountType ===
                      "agent"
                        ? "#02B290"
                        : "#6c757d",
                    marginRight: "4px",
                    flexShrink: 0,
                  }}
                />

                <div
                  style={{
                    minWidth: 0,
                    overflow: "hidden",
                  }}
                >
                  <strong
                    style={{
                      fontSize: "11px",
                      display: "block",
                      lineHeight: "1.2",
                    }}
                  >
                    Agent
                  </strong>

                  <div
                    className="text-muted mt-1"
                    style={{
                      fontSize: "8px",
                      lineHeight: "1.1",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow:
                        "ellipsis",
                    }}
                  >
                    Agent Account
                  </div>
                </div>
              </label>
            </div>
          </div>

          {/* Create Account */}

          <button
            type="submit"
            className="btn w-100 text-light"
            style={{
              backgroundColor: "#02B290",
            }}
          >
            Create Account
          </button>

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


          {/* Social */}

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
  );
}

export default RegisterForm;