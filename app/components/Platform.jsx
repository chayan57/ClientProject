"use client";

import { motion } from "framer-motion";

export default function Platform() {
  const stats = [
    {
      value: "0",
      label: "Products Listed",
    },
    {
      value: "0",
      label: "Registered Users",
    },
    {
      value: "0",
      label: "Completed Orders",
    },
    {
      value: "$0",
      label: "Total Seller Payouts",
    },
  ];

  return (
    <section
      style={{
        backgroundColor: "#06070b",
        padding: "100px 0",
        color: "#fff",
      }}
    >
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-5">
          <h2
            style={{
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: "700",
              letterSpacing: "-1.5px",
              marginBottom: "12px",
            }}
          >
            Our Growing Community
          </h2>

          <p
            style={{
              color: "rgba(255,255,255,0.5)",
              fontSize: "15px",
              marginBottom: 0,
            }}
          >
            See how our marketplace is growing.
          </p>
        </div>

        {/* Stats */}
        <div className="row g-3 justify-content-center">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="col-6 col-lg-3"
            >
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                style={{
                  textAlign: "center",
                  padding: "30px 15px",
                  borderRadius: "18px",
                  background:
                    "linear-gradient(145deg, rgba(15,47,61,0.7), rgba(7,29,41,0.8))",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div
                  style={{
                    fontSize: "clamp(28px, 4vw, 42px)",
                    fontWeight: "800",
                    color: "#22c55e",
                    marginBottom: "8px",
                  }}
                >
                  {stat.value}
                </div>

                <div
                  style={{
                    color: "rgba(255,255,255,0.55)",
                    fontSize: "13px",
                  }}
                >
                  {stat.label}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}