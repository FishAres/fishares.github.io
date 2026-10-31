import React from "react";
import LinkText from "./LinkText";
import chl_arch from "../../public/assets/chl_arch.png";
import chl_io_pred from "../../public/assets/chl_io_pred.png";
import chl_blk_pred from "../../public/assets/chl_blk_pred.png";

const page = {
  maxWidth: "900px",
  margin: "0 auto",
  fontFamily: "Inter",
  fontWeight: 400,
  textAlign: "left",
  lineHeight: 1.55,
};
const figure = { margin: "24px 0" };
const caption = { fontSize: "0.9em", color: "#555", marginTop: "6px" };
const panelLabels = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  fontSize: "0.85em",
  fontWeight: 600,
  marginBottom: "4px",
};
const table = { borderCollapse: "collapse", width: "100%", fontSize: "0.95em" };
const cell = { padding: "6px 10px", borderBottom: "1px solid #ddd" };
const num = { ...cell, textAlign: "right", fontVariantNumeric: "tabular-nums" };
const best = { fontWeight: 600 };

function PredictionFigure({ src, children }) {
  return (
    <figure style={figure}>
      <div style={panelLabels}>
        <span>Input after cloud masking</span>
        <span>Observed</span>
        <span>Model fill</span>
        <span>Error on hidden pixels</span>
      </div>
      <img src={src} style={{ width: "100%" }} />
      <figcaption style={caption}>{children}</figcaption>
    </figure>
  );
}

const results = [
  { region: "Indian Ocean (0.25°, 1997–2020)" },
  { model: "Day-of-year climatology", val: "0.254", test: "—" },
  { model: "3D-conv baseline (±4 days)", val: "0.130", test: "0.131" },
  { model: "Best single model", val: "0.127", test: "0.127" },
  { model: "Weighted ensemble (11 models)", val: "0.124", test: "0.124", best: true },
  { region: "Black Sea (4 km, 2014–2024)" },
  { model: "Day-of-year climatology", val: "0.358", test: "—" },
  { model: "3D-conv baseline", val: "0.150", test: "0.143" },
  { model: "Best single model", val: "0.141", test: "0.134" },
  { model: "Weighted ensemble (9 models)", val: "0.139", test: "0.133", best: true },
];

function ResultsTable() {
  return (
    <div style={{ overflowX: "auto" }}>
      <table style={table}>
        <thead>
          <tr>
            <th style={{ ...cell, textAlign: "left" }}>model</th>
            <th style={num}>val MAE</th>
            <th style={num}>test MAE</th>
          </tr>
        </thead>
        <tbody>
          {results.map((r, i) =>
            r.region ? (
              <tr key={i}>
                <td colSpan={3} style={{ ...cell, fontWeight: 600, paddingTop: "16px" }}>
                  {r.region}
                </td>
              </tr>
            ) : (
              <tr key={i} style={r.best ? best : undefined}>
                <td style={cell}>{r.model}</td>
                <td style={num}>{r.val}</td>
                <td style={num}>{r.test}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
      <p style={caption}>
        Mean absolute error in ln CHL on hidden pixels (lower is better). Scores
        are only comparable within a region.
      </p>
    </div>
  );
}

export default function MindTheChl() {
  return (
    <div style={page}>
      <h1 style={{ textAlign: "center" }}>Mind the CHL gap</h1>
      <h3 style={{ textAlign: "center", fontWeight: 400, marginTop: 0 }}>
        Filling cloud gaps in daily satellite chlorophyll with deep networks
      </h3>

      <p>
        Chlorophyll concentration (CHL) seen from space is the standard proxy
        for phytoplankton, the base of the marine food web. Ocean-colour
        satellites measure it every day, but only where the sky is clear, so
        on any given day large parts of a basin are missing. This project
        trains networks to fill those gaps using the days before and after,
        together with physical ocean fields that are available everywhere: sea
        surface temperature, salinity, mixed-layer depth, sea level, currents
        and wind.
      </p>
      <p>
        I worked on two regions: the Indian Ocean at 0.25° (1997–2020) and
        the Black Sea at 4 km (2014–2024). The project grew out of the{" "}
        <LinkText link="https://github.com/geo-smart/mind-the-chl-gap">
          2024 GeoSMART hackweek project
        </LinkText>
        . Code is on{" "}
        <LinkText link="https://github.com/FishAres/mind_the_chl">GitHub</LinkText>.
      </p>

      <h2>How the gap filling is scored</h2>
      <p>
        There is no ground truth under a real cloud, so the test has to create
        its own. For each target day, pixels that were actually observed are
        hidden behind the cloud mask of a different day, and the model is
        scored on how well it reconstructs them: the mean absolute error in
        log chlorophyll on the hidden pixels. The neighbouring days the model
        sees carry the same borrowed clouds, so it never gets a clearer view
        than real weather would allow. Validation and test sets are whole
        years held out from training.
      </p>

      <h2>Model</h2>
      <p>
        The best models pair a token encoder with a convolutional network. Each
        day in a ±8-day window is cut into 4×4-pixel ocean patches. Attention
        runs first over each patch's 17 days and then across all patches in
        the basin, and the result is decoded back to full resolution. A
        per-pixel attention step (the "blend") lets every pixel draw directly
        on its own observations from nearby days. A dilated CNN then combines
        all of this with the target day's own pixels and physics to predict
        the chlorophyll anomaly from the seasonal climatology.
      </p>
      <figure style={figure}>
        <img src={chl_arch} style={{ width: "100%" }} />
        <figcaption style={caption}>
          Full pipeline. Dashed boxes are optional modules: a physics memory
          that summarises the past 30–60 days of wind-stress curl, Ekman
          pumping, temperature and mixed-layer depth (river input and
          sunlight in the Black Sea), and analog tokens drawn from the
          same place in other years.
        </figcaption>
      </figure>

      <h2>Results</h2>
      <ResultsTable />
      <p>
        In both regions the networks cut the climatology's error by more than
        half. The token models beat the convolutional baseline by about 3% in
        the Indian Ocean and 6% in the Black Sea. Averaging several models,
        with weights that depend on how many observations lie near each
        hidden pixel, took off another 1–2.5%. On the original hackweek
        benchmark, a convolutional version of this setup scored 0.0998 test
        MAE against 0.1075 for the hackweek U-Net.
      </p>

      <PredictionFigure src={chl_io_pred}>
        Indian Ocean, test day 12 March 2020. The fill keeps fronts and
        filaments rather than smoothing them away; MAE 0.093 on 7,688 hidden
        pixels. The largest errors are in the productive coastal waters of the
        northern Arabian Sea.
      </PredictionFigure>
      <PredictionFigure src={chl_blk_pred}>
        Black Sea, test day 18 March 2019. MAE 0.093 on 10,846 hidden pixels.
        The largest errors sit along the coasts.
      </PredictionFigure>

      <h2>What did not help</h2>
      <p>
        A physics-informed loss that penalised violations of an
        advection–diffusion equation made the fills more physically
        consistent, but rarely more accurate: most gains were within the
        spread between random seeds, so the best models do not use it. Moving
        chlorophyll along reanalysis currents was also weak: in the Black Sea,
        observed features drift at under half the modelled current speed.
        Learned kriging, deep equilibrium models, neural ODEs and U-Nets all
        scored worse than the models above.
      </p>
      <p>
        A side result: the same machinery makes a useful one-day forecast. A
        model that sees only past chlorophyll (plus today's physics) scored
        0.132 test MAE against 0.176 for carrying the last observation
        forward.
      </p>
    </div>
  );
}
