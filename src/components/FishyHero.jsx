import React, { useState, useEffect } from "react";
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
      }}
    >
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
        }}
      ></div>
    </div>
  );
};

const Hero = () => {
  const [showEyes, setShowEyes] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 0.6; // You can adjust this value as needed
      const scrollPercentage = scrollPosition / window.innerHeight;
      setShowEyes(scrollPercentage >= threshold);
    };

    window.addEventListener("scroll", handleScroll);
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

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
      }}
    >
      {showEyes && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            position: "absolute",
            bottom: "33%",
            left: "51%",
            transform: "translateX(-50%)",
            zIndex: 1, // Ensure eyes appear over the image
          }}
        >
          <Eye />
          <Eye />
        </div>
      )}

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
        }}
      >
        <h1>Ares Fisher</h1>
      </div>
    </div>
  );
};

export default Hero;

// {showEyes && (
//     <div
//       style={{
//         position: "absolute",
//         top: "60%",
//         left: "50%",
//         transform: "translate(-50%, -50%)",
//         width: "100px",
//         height: "50px",
//         backgroundColor: "white",
//         color: "black",
//         borderRadius: "50%",
//         boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
//         zIndex: 1, // Ensure eyes appear over the image
//       }}
//     >
//       HI
//     </div>
//   )}

//   <div
//     style={{
//       flex: 1,
//       display: "flex",
//       backgroundColor: "rgba(0.5, 0.5, 0.5, 0.3)",
//       borderRadius: "5px",
//       padding: "20px",
//       marginTop: "0px",
//       maxHeight: "2rem",
//       width: "97%",
//       alignItems: "center",
//       justifyContent: "center",
//     }}
//   >
