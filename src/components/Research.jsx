import LinkText from "./LinkText";
import rnp_fig from "../../public/assets/rnp_fig.png";
import chl_thumb from "../../public/assets/chl_thumb.png";

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

function MindTheChl() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        fontFamily: "Inter",
        fontWeight: 400,
        textAlign: "left",
        marginTop: "40px",
      }}>
      <img
        style={{ marginRight: "20px", width: "40%", flexShrink: 0 }}
        src={chl_thumb}
      />
      <div>
        <h2>
          <LinkText to="/research/mind-the-chl">
            Mind the CHL gap: filling cloud gaps in satellite chlorophyll
          </LinkText>
        </h2>
        <h3>
          <p>
            Satellites map ocean chlorophyll every day, but clouds hide much of
            the sea on any given day.
          </p>
          <p>
            Attention-based networks fill those gaps from neighbouring days and
            physical ocean data, in the Indian Ocean and the Black Sea. On
            held-out years they cut the error of a seasonal climatology by more
            than half.
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
      <MindTheChl />
    </>
  );
}
