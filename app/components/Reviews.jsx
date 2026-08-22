"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      name: "Community Member",
      role: "Buyer",
      text: "Real feedback from our community members will appear here.",
    },
    {
      id: 2,
      name: "Community Member",
      role: "Seller",
      text: "Real feedback from our community members will appear here.",
    },
    {
      id: 3,
      name: "Community Member",
      role: "Buyer",
      text: "Real feedback from our community members will appear here.",
    },
  ];

  return (
    <section
      style={{
        backgroundColor: "#06070b",
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
            Reviews
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
            What Our Users Say
          </h2>

          <p
            style={{
              color: "rgba(255,255,255,0.5)",
              fontSize: "15px",
              margin: 0,
            }}
          >
            Real feedback from our community members.
          </p>
        </div>

        {/* Reviews */}
        <div className="row g-4 justify-content-center">
          {reviews.map((review, index) => (
            <div
              key={review.id}
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
                {/* Quote */}
                <Quote
                  size={28}
                  style={{
                    color: "#22c55e",
                    marginBottom: "20px",
                  }}
                />

                {/* Stars */}
                <div
                  className="d-flex gap-1"
                  style={{
                    marginBottom: "18px",
                    color: "#FFD84D",
                  }}
                >
                  <Star size={15} fill="currentColor" />
                  <Star size={15} fill="currentColor" />
                  <Star size={15} fill="currentColor" />
                  <Star size={15} fill="currentColor" />
                  <Star size={15} fill="currentColor" />
                </div>

                {/* Review */}
                <p
                  style={{
                    color: "rgba(255,255,255,0.65)",
                    fontSize: "14px",
                    lineHeight: "1.8",
                    marginBottom: "25px",
                  }}
                >
                  {review.text}
                </p>

                {/* User */}
                <div>
                  <h4
                    style={{
                      color: "#fff",
                      fontSize: "15px",
                      fontWeight: "700",
                      marginBottom: "4px",
                    }}
                  >
                    {review.name}
                  </h4>

                  <span
                    style={{
                      color: "rgba(255,255,255,0.4)",
                      fontSize: "12px",
                    }}
                  >
                    {review.role}
                  </span>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}