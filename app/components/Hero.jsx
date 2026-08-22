"use client"
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="d-flex align-items-center"
      style={{
        minHeight: "calc(100vh - 75px)",
        backgroundColor: "#0e111b",
        color: "#fff",
        padding: "80px 0",
      }}
    >
      <div className="container">
        <div
          className="text-center mx-auto"
          style={{
            maxWidth: "850px",
          }}
        >
          <h2 className="DigitalProductsIntro">
  Turn Your
  <br />
  <span>Digital Products</span> Into Income
</h2>

          <p
            style={{
              maxWidth: "680px",
              margin: "0 auto 35px",
              color: "rgba(255,255,255,0.65)",
              fontSize: "18px",
              lineHeight: "1.7",
            }}
          >
            Buy useful digital products or become a seller and reach
            customers through our simple and secure marketplace.
          </p>

          <div className="d-flex justify-content-center align-items-center gap-3 flex-wrap">
           <Link
              href="#contact"
              className="text-decoration-none d-flex align-items-center gap-2 ms-2  StartSelling"
              style={{
                background: "rgb(34, 170, 0)",
                color: "#fefefe",
                padding: "12px 30px",
                borderRadius: "50px",
                fontWeight: "700",
                fontSize: "25px",
                boxShadow: "0 8px 24px rgba(255, 216, 77, 0.20)",
                transition:
                  "transform 0.25s ease, box-shadow 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 12px 30px hsl(127, 100%, 32%)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 8px 24px rgba(255, 216, 77, 0.20)";
              }}
            >
              Start Selling
            </Link>

            <Link
              href="/login"
              className="text-white text-decoration-none rounded-5 px-4 py-3 ExploreProducts"
              style={{
                border: "1px solid rgba(255,255,255,0.2)",
                backgroundColor: "rgba(255,255,255,0.04)",
                fontWeight: "600",
                fontSize:"20px"
              }}
              
            >
              Explore Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}