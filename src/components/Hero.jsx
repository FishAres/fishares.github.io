import React from "react";
import top_img from "../../public/assets/top_img.jpg";

const Hero = () => {
  return (
    <div
      style={{
        // backgroundImage: `url('./public/assets/top_img.jpg')`,
        backgroundImage: `url(${top_img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",

        color: "white",
      }}
    >
      <div
        style={{
          flex: 1,
          position: "absolute",
          display: "flex",
          backgroundColor: "rgba(0.5, 0.5, 0.5, 0.3)",
          borderRadius: "40px",
          padding: "20px",
          marginTop: "0px",
          maxHeight: "2rem",
          maxWidth: "12rem",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>Ares Fisher</h1>
      </div>
    </div>
  );
};

export default Hero;
