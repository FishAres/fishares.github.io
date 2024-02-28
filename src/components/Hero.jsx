import React from "react";
import top_img from "../../public/assets/top_img.jpg";

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${top_img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "80vh",
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
          display: "flex",
          backgroundColor: "rgba(0.5, 0.5, 0.5, 0.3)",
          borderRadius: "5px",
          padding: "20px",
          marginTop: "0px",
          maxHeight: "2rem",
          // width: "70rem",
          width: "97%",
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
