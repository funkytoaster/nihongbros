import React from "react";
import Button from "@mui/material/Button";

import "./home.css";

const HomePage = () => (
  <div className="home">
    <Button href="/hira" variant="contained">
      かな Hiragana かな
    </Button>
    <Button href="/basicKatas" variant="contained">
      カナ Basic Katas カナ
    </Button>
    <Button href="/basicCombiKatas" variant="contained">
      カピョ Basic Combi Katas + Katas ピョナ (hiragana combinations but in
      Kata)
    </Button>
    <Button href="/fullKatas" variant="contained">
      ムィピョ ALL Katas ピョムィ (<b>Proced at your own risk</b>)
    </Button>
    <Button href="/kanas" variant="contained">
      <b>うまのペニスをおかした </b>(ALL)
    </Button>
  </div>
);

export default HomePage;
