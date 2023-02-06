/* eslint-disable react-hooks/exhaustive-deps */
import Button from "@mui/material/Button";
import React, { useCallback, useEffect, useState } from "react";

let ref;
const Stats = ({
  right,
  wrong,
  cheats,
  challengeMode,
  setChallengeMode,
  kanalist,
}) => {
  const [timer, setTimer] = useState({ min: 0, sec: 0 });
  const [endChallenge, setEndChallenge] = useState(false);

  const add = useCallback(() => {
    setTimer((prev) => {
      if (prev.sec < 59) {
        return { ...prev, sec: prev.sec + 1 };
      }
      return { min: prev.min + 1, sec: 0 };
    });
  }, [timer]);

  useEffect(() => {
    if (challengeMode && !right) {
      ref = setInterval(add, 1000);
    }
    if (right === kanalist.length && !endChallenge && challengeMode) {
      setEndChallenge(true);
      clearInterval(ref);
    }
  }, [challengeMode, right]);

  const backOnClick = () => {
    setEndChallenge(() => {
      setChallengeMode(false);
      setTimer({ min: 0, sec: 0 });

      return false;
    });
  };

  return (
    <>
      <div className={`statsContainer`}>
        {!challengeMode && (
          <>
            <p>Right: {`${right}`}</p>
            <p>Wrong: {`${wrong}`}</p>
            <p>Tries: {`${right + wrong}`}</p>
            {!!cheats && <p>Cheated: {`${cheats}`}</p>}
          </>
        )}
        {challengeMode && (
          <>
            {!endChallenge && <p>Answered: {`${right}/${kanalist.length}`}</p>}
            {endChallenge && (
              <p style={{ color: "chartreuse", fontSize: "larger" }}>
                コングラチュレイショん
              </p>
            )}
            <div
              className={`challengeMode ${endChallenge && "endo"}`}
            >{`${timer.min} : ${timer.sec}`}</div>
          </>
        )}
      </div>
      {endChallenge && (
        <Button className="back" variant="contained" onClick={backOnClick}>
          Back
        </Button>
      )}
    </>
  );
};

export default Stats;
