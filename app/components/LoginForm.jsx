"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import { IconButton } from "@mui/material";
import Image from "next/image";

function LoginForm() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [isShowPassword, setIsShowPassword] =
    useState(false);

  const router = useRouter();

  return (
    <section
      className="container d-flex vh-100 justify-content-center px-3"
      style={{
        backgroundColor: "#f5efef",
      }}
    >
      <div
        className="w-100 w-md-25 position-relative rounded-3"
        style={{
          backgroundColor: "#ffffff",
          height: "auto",
          top: "80px",
          paddingBottom: "20px",
          maxWidth: "450px",
        }}
      >
                 <Image className="d-block mx-auto mb-2" src="/icon.png" height={60} width={60} alt="logo"/>
        
        <form className="px-4 pt-4">

          <h4 className="text-center mb-4">
            Login to your account
          </h4>

          {/* Email */}

          <div className="mb-3">
            <label
              htmlFor="email"
              className="form-label"
            >
              Email address
            </label>

            <input
              name="email"
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              required
              disabled={loading}
            />
          </div>

          {/* Password */}

          <div className="mb-3 position-relative">
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
                placeholder="Enter your password"
                required
                disabled={loading}
              />

              <IconButton
                className="position-absolute top-50 end-0 translate-middle-y"
                aria-label="Toggle password visibility"
                onClick={() =>
                  setIsShowPassword(
                    (prev) => !prev
                  )
                }
                disabled={loading}
                type="button"
              >
                {isShowPassword ? (
                  <FaEye size={16} />
                ) : (
                  <FaRegEyeSlash size={16} />
                )}
              </IconButton>
            </div>
          </div>

          {/* Error */}

          {error && (
            <div
              className="alert alert-danger py-1 px-2 mt-2"
              role="alert"
              style={{
                fontSize: "14px",
              }}
            >
              {error}
            </div>
          )}

          {/* Forgot Password */}

          <span className="d-block mb-2">
            <Link
              href="/forgotPassword"
              className="text-dark"
              style={{
                fontSize: "14px",
              }}
            >
              Forgot Password?
            </Link>
          </span>

          {/* Login Button */}

          <button
            type="submit"
            className="btn w-100 text-light"
            style={{
              backgroundColor: "#02B290",
            }}
            disabled={loading}
          >
            {loading ? (
              <>
                <span
                  className="spinner-border spinner-border-sm me-2"
                  role="status"
                  aria-hidden="true"
                />

                Logging in...
              </>
            ) : (
              "Login"
            )}
          </button>

          {/* Register */}

          <div className="social text-center">
            <p
              className="mb-0 mt-3"
              style={{
                fontSize: "14px",
              }}
            >
              Not Registered?{" "}

              <Link
                className="text-decoration-none"
                style={{
                  fontSize: "14px",
                  color: "#02B290",
                }}
                href="/register"
              >
                Sign Up
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
        </form>

        {/* Google Login */}

        <div className="mt-3 px-4">
          <p className="text-center">login with google</p>
        </div>
      </div>
    </section>
  );
}

export default LoginForm;