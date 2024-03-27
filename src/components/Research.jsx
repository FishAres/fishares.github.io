import React from "react";
import LinkText from "./LinkText";
import rnp_fig from "../../public/assets/rnp_fig.png";

function RNP() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        fontFamily: "Inter",
        fontWeight: 400,
        textAlign: "left",
      }}>
      <img style={{ marginRight: "20px" }} src={rnp_fig} />
      <div>
        <h2>
          <LinkText link="https://academic.oup.com/pnasnexus/article/2/11/pgad337/7317432">
            Recursive neural programs: A differentiable framework for learning
            compositional part-whole hierarchies and image grammars
          </LinkText>
        </h2>
        <h3>
          <p>
            How do you perceive a coffee cup? Unlike a classifier that extracts
            features and gives you a label, we perceive things in a much more
            embodied way.
          </p>
          <p>
            A Recursive Neural Program is a novel generative architecture that
            models objects as recursive compositions of sensory-motor
            trajectories. This means that it perceives an image as a way to
            generate that image out of nested movement sequences.
          </p>
        </h3>
      </div>
    </div>
  );
}

export default function Research() {
  return (
    <>
      <h1>Research</h1>
      <RNP />
    </>
  );
}
