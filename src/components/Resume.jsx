import React from "react";
import fisherCV from "../../public/assets/FisherCV.pdf";
import selfie from "../../public/assets/selfie.jpg";

const Selfie = () => {
  return (
    <div style={{ flex: 1, marginRight: "50px", textAlign: "center" }}>
      <img
        src={selfie}
        alt="Your Photo"
        style={{
          width: "300px",
          height: "auto",
          marginLeft: "50px",
          marginRight: "50px",
        }}
      />
    </div>
  );
};

const Resume = () => {
  return (
    <div
      id="cv"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "35px",
      }}
    >
      <div
        style={{
          flex: 1,
          marginRight: "0px",
          textAlign: "center",
        }}
      >
        <embed
          src={fisherCV}
          type="application/pdf"
          width="100%"
          height="600px"
        />
      </div>
    </div>
  );
};

export default Resume;
