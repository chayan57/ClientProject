"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section
      style={{
        backgroundColor: "#061A24",
        padding: "110px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center mx-auto"
          style={{
            maxWidth: "800px",
            padding: "65px 30px",
            borderRadius: "28px",
            background:
              "linear-gradient(145deg, rgba(15,47,61,0.9), rgba(7,29,41,0.95))",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
          }}
        >
          {/* Label */}
          <div
            style={{
              color: "#22c55e",
              fontSize: "12px",
              fontWeight: "700",
              letterSpacing: "2px",
              textTransform: "uppercase",
              marginBottom: "15px",
            }}
          >
            Call To Action
          </div>

          {/* Title */}
          <h2
            style={{
              color: "#fff",
              fontSize: "clamp(34px, 5vw, 56px)",
              fontWeight: "700",
              lineHeight: "1.1",
              letterSpacing: "-1.5px",
              marginBottom: "18px",
            }}
          >
            Start Your Journey Today
          </h2>

          {/* Description */}
          <p
            style={{
              color: "rgba(255,255,255,0.55)",
              fontSize: "15px",
              lineHeight: "1.8",
              maxWidth: "600px",
              margin: "0 auto 32px",
            }}
          >
            Join our growing marketplace and discover a simple way to buy
            and sell digital products.
          </p>

          {/* Buttons */}
          <div className="d-flex justify-content-center align-items-center gap-3 flex-wrap">
            <Link
              href="/register"
              className="d-inline-flex align-items-center gap-2 text-white text-decoration-none rounded-5 cta-primary"
            >
              Create Account
              <ArrowRight size={17} />
            </Link>

            <Link
              href="/products"
              className="text-white text-decoration-none rounded-5 cta-secondary"
            >
              Explore Products
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}