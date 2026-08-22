"use client"
import { motion } from "framer-motion";
import {
  CircleDollarSign,
  UsersRound,
  WalletMinimal,
  
 
} from "lucide-react";
function Services() {

    const steps = [
  {
    number: "01",
    title: "Secure Payments",
    icon: CircleDollarSign,
    text: "Simple and secure payment processing for buyers and sellers.",
  },
  {
    number: "02",
    title: "Trusted Sellers",
    icon: UsersRound,
    text: "Products are reviewed before being published on the marketplace.",
  },
  {
    number: "03",
    title: "Easy Withdrawals",
    icon: WalletMinimal,
    text: "Sellers can request withdrawals from their available balance according to platform rules.",
  },
  
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 45,
  },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: index * 0.12,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};
  return (
    <section
      id="process"
      style={{
        background: "#061A24",
        padding: "120px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
<div
            className="d-none d-lg-block"
            style={{
              position: "absolute",
              top: "48px",
              left: "11%",
              right: "11%",
              height: "1px",
              background:
                "linear-gradient(90deg, transparent, rgba(255,216,77,0.35), rgba(84,214,194,0.35), transparent)",
            }}
          />

          <div className="row g-4 justify-content-center">

            {steps.map((step, index) => {

              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="col-12 col-md-6 col-lg-3 justify-content-center"
                >

                  <motion.div
                    custom={index}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                      once: true,
                      amount: 0.25,
                    }}
                    whileHover={{
                      y: -8,
                    }}
                    style={{
                      height: "100%",
                      position: "relative",
                      padding: "28px 22px",
                      borderRadius: "18px",
                      background:
                        "linear-gradient(145deg, rgba(15,47,61,0.88), rgba(7,29,41,0.92))",
                      border:
                        "1px solid rgba(255,255,255,0.08)",
                      transition:
                        "border-color 0.3s ease",
                    }}
                  >

                    {/* Number + Icon */}

                    <div
                      className="d-flex align-items-center justify-content-between"
                      style={{
                        marginBottom: "30px",
                      }}
                    >

                      <span
                        style={{
                          color: "#54D6C2",
                          fontSize: "11px",
                          fontWeight: "700",
                          letterSpacing: "1px",
                        }}
                      >
                        {step.number}
                      </span>

                      <div
                        style={{
                          width: "42px",
                          height: "42px",
                          borderRadius: "12px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background:
                            "rgba(255,216,77,0.08)",
                          border:
                            "1px solid rgba(255,216,77,0.18)",
                          color: "#FFD84D",
                        }}
                      >
                        <Icon size={19} />
                      </div>

                    </div>

                    {/* Title */}

                    <h3
                      style={{
                        color: "#FFFFFF",
                        fontSize: "25px",
                        fontWeight: "800",
                        letterSpacing: "-0.8px",
                        marginBottom: "12px",
                      }}
                    >
                      {step.title}
                    </h3>

                    {/* Text */}

                    <p
                      style={{
                        color: "rgba(255,255,255,0.48)",
                        fontSize: "12px",
                        lineHeight: "1.75",
                        marginBottom: 0,
                      }}
                    >
                      {step.text}
                    </p>

                    {/* Bottom Accent */}

                    <div
                      style={{
                        marginTop: "28px",
                        width: index === 0 ? "35%" : "25%",
                        height: "2px",
                        borderRadius: "20px",
                        background:
                          index === 0 || index === 3
                            ? "#FFD84D"
                            : "#54D6C2",
                      }}
                    />

                  </motion.div>

                </div>
              );
            })}

          </div>
        </section>

    
  )
}

export default Services