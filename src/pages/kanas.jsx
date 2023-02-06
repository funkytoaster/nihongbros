/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useMemo } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";

import Kana from "../components/kana.tsx";
import Stats from "../components/stats.tsx";
import Button from "@mui/material/Button";

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

const KanasPage = ({ kanalist }) => {
  const [index, setIndex] = useState(0);

  const [right, setRight] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [cheats, setCheats] = useState(0);
  const [showInpt] = useState(false);
  const [username, setUsername] = useState("");
  const [challengeMode, setChallengeMode] = useState(false);

  const onClick = () => {
    /**
     * 
    if (showInpt && username) {
      setChallengeMode(true);
    } 
    setShowInpt((prev) => !prev);
     */

    setChallengeMode(true);
  };

  const kanaOnClick = () => {
    setIndex((prev) => {
      if (challengeMode && right < kanalist.length) {
        return prev + 1;
      }
      return Math.floor(Math.random() * kanalist.length);
    });
  };

  const list = useMemo(() => shuffle(kanalist), [challengeMode]);

  useEffect(() => {
    setRight(0);
    setWrong(0);
    setCheats(0);
    setIndex(0);
  }, [challengeMode]);

  return (
    <div className="kanasPage">
      <Kana
        kana={list[index]}
        onClick={kanaOnClick}
        setRight={setRight}
        setWrong={setWrong}
        setCheats={setCheats}
      />
      <Stats
        right={right}
        wrong={wrong}
        cheats={cheats}
        challengeMode={challengeMode}
        setChallengeMode={setChallengeMode}
        kanalist={kanalist}
      />
      {!challengeMode && (
        <div className="CTAS">
          {showInpt && (
            <OutlinedInput
              onKeyDown={(e) => e.key === "Enter" && onClick()}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="kanaInput"
              placeholder="Username"
              style={{ width: "100%", marginBottom: "8px" }}
            />
          )}
          <Button onClick={onClick} variant="contained">
            {`${showInpt && !!username ? "START" : ""} Challenge Mode`}
          </Button>
        </div>
      )}
    </div>
  );
};

export default KanasPage;
