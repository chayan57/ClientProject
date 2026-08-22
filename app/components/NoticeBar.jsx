"use client"
export default function NoticeBar() {
  return (
    <div
   
      style={{
        width: "100%",
        height: "42px",
        backgroundColor: "#281b0d",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* NOTICE */}

      <div
  style={{
    height: "100%",
    minWidth: "100px",
    backgroundColor: "#d99b00",
    color: "#080a0f",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "16px",
    fontWeight: "700",
    position: "relative",
    zIndex: 2,
    flexShrink: 0,

    
    clipPath: "polygon(0 0, 85% 0, 100% 50%, 85% 100%, 0 100%)",

    paddingRight: "12px",
  }}
>
  NOTICE
</div>


      {/* SLIDER */}

      <div
        style={{
          overflow: "hidden",
          flex: 1,
          height: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="notice-track">

          <span className="fs-5">
            Welcome to EARNIFY HUB! Start earning today from
            home with our trusted platform.
          </span>

          <span className="dot">•</span>

          <span className="fs-5">
            Welcome to EARNIFY HUB! Start earning today from
            home with our trusted platform.
          </span>

          <span className="dot">•</span>

          <span className="fs-5">
            Welcome to EARNIFY HUB! Start earning today from
            home with our trusted platform.
          </span>

        </div>
      </div>


      
    </div>
  );
}