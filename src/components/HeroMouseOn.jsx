import React, { useState, useRef, useEffect } from "react";
import top_img from "../../public/assets/top_img.jpg";

const Eye = () => {
  return (
    <div
      style={{
        width: "4vh",
        height: "4vh",
        backgroundColor: "white",
        borderRadius: "50%",
        border: "2px solid black",
        position: "relative",
      }}>
      <div
        style={{
          width: "1vh",
          height: "1vh",
          backgroundColor: "black",
          borderRadius: "50%",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}></div>
    </div>
  );
};

const Eyes = () => {
  return (
    <div>
      <Eye />
      <Eye />
    </div>
  );
};

const Hero = () => {
  const [showEyes, setShowEyes] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        height: "80vh",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        backgroundImage: `url(${top_img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
      }}>
      <div
        onMouseEnter={() => setShowEyes(true)}
        onMouseLeave={() => setShowEyes(false)}
        style={{
          display: "flex",
          justifyContent: "center",
          position: "absolute",
          bottom: "28%",
          left: "51%",
          width: "10vh",
          height: "10vh",
          transform: "translateX(-50%)",
          zIndex: 1, // Ensure eyes appear over the image
        }}>
        <div style={{ display: showEyes ? "flex" : "none" }}>
          <Eye />
          <Eye />
        </div>
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          backgroundColor: "rgba(0.5, 0.5, 0.5, 0.3)",
          borderRadius: "5px",
          padding: "20px",
          marginTop: "0px",
          maxHeight: "2rem",
          width: "97%",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <h1>Ares Fisher</h1>
      </div>
    </div>
  );
};

export default Hero;
