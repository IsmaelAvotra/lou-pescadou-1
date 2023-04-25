const LogoSection = () => {
  return (
    <div className="logo-container">
      <div className="logo">
        <img alt="" src="/assets/mobile/logo2.png" />
      </div>
      <div
        style={{
          zIndex: 98,
          fontSize: "30px",
          fontFamily: "Poppins",
          position: "relative",
          left: "20px",
        }}
      ></div>
      <div className="warp" aria-labelledby="warp-label">
            <span id="warp-label" className="warp__placeholder">
                Lou Pescado
            </span>
    
            <span>
                <span className="warp__0">
                    L
                </span>
                <span className="warp__1">
                    o
                </span>
                <span className="warp__2">
                    u
                </span>
                <span className="warp__3">
                     
                </span>
                <span className="warp__4">
                    P
                </span>
                <span className="warp__5">
                    e
                </span>
                <span className="warp__6">
                    s
                </span>
                <span className="warp__7">
                    c
                </span>
                <span className="warp__8">
                    a
                </span>
                <span className="warp__9">
                    d
                </span>
                <span className="warp__10">
                    o
                </span>
            </span>
        </div>
    </div>
  );
};
export default LogoSection;
