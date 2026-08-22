"use client";

import { motion } from "framer-motion";
import { Trophy, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function TopSellers() {
  const sellers = [
    {
      id: 1,
      name: "Top Seller",
      description: "Discover products from our marketplace sellers.",
    },
    {
      id: 2,
      name: "Top Seller",
      description: "Discover products from our marketplace sellers.",
    },
    {
      id: 3,
      name: "Top Seller",
      description: "Discover products from our marketplace sellers.",
    },
  ];

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

        {/* Heading */}
        <div className="text-center mb-5">
          <div
            style={{
              color: "#22c55e",
              fontSize: "12px",
              fontWeight: "700",
              letterSpacing: "2px",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            Top Sellers
          </div>

          <h2
            style={{
              color: "#fff",
              fontSize: "clamp(34px, 5vw, 56px)",
              fontWeight: "700",
              letterSpacing: "-1.5px",
              marginBottom: "15px",
            }}
          >
            Monthly Top Sellers
          </h2>

          <p
            style={{
              maxWidth: "600px",
              margin: "0 auto",
              color: "rgba(255,255,255,0.5)",
              fontSize: "15px",
              lineHeight: "1.7",
            }}
          >
            See our highest-performing sellers and discover what they are
            offering.
          </p>
        </div>

        {/* Seller Cards */}
        <div className="row g-4 justify-content-center">
          {sellers.map((seller, index) => (
            <div
              key={seller.id}
              className="col-12 col-md-6 col-lg-4 d-flex justify-content-center"
            >
              <motion.div
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -7,
                }}
                style={{
                  width: "100%",
                  maxWidth: "360px",
                  padding: "28px",
                  borderRadius: "20px",
                  background:
                    "linear-gradient(145deg, rgba(15,47,61,0.88), rgba(7,29,41,0.92))",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {/* Seller Icon */}
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "15px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(34,197,94,0.1)",
                    border: "1px solid rgba(34,197,94,0.2)",
                    color: "#22c55e",
                    marginBottom: "22px",
                  }}
                >
                  <Trophy size={23} />
                </div>

                <h3
                  style={{
                    color: "#fff",
                    fontSize: "22px",
                    fontWeight: "700",
                    marginBottom: "10px",
                  }}
                >
                  {seller.name}
                </h3>

                <p
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    fontSize: "13px",
                    lineHeight: "1.7",
                    marginBottom: 0,
                  }}
                >
                  {seller.description}
                </p>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-5">
          <Link
            href="/leaderboard"
            className="d-inline-flex align-items-center gap-2 text-white text-decoration-none rounded-5"
            style={{
              backgroundColor: "#16a34a",
              padding: "12px 22px",
              fontSize: "14px",
              fontWeight: "600",
            }}
          >
            View Leaderboard
            <ArrowRight size={17} />
          </Link>
        </div>

      </div>
    </section>
  );
}