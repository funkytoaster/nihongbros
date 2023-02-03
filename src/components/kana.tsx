import React, { useEffect, useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CancelIcon from "@mui/icons-material/Cancel";
import Button from "@mui/material/Button";

import "./styles.css";

const Kana = ({ kana, onClick, setRight, setWrong, setCheats }) => {
  const [input, setInput] = useState("");
  const [attempt, setTry] = useState("");
  const [cheated, setCheated] = useState(false);
  const check = () => {
    if (attempt === "g") {
      onClick((prev) => prev + 1);
    } else {
      if (input.toLowerCase() === kana.roumaji.toLowerCase()) {
        setTry("g");
        setRight((prev) => prev + 1);
      } else {
        setTry("r");
        setWrong((prev) => prev + 1);
      }
    }
  };

  const onClickKana = () => {
    if (!cheated) {
      setCheats((prev) => prev + 1);
    }
    setCheated((prev) => !prev);
  };

  useEffect(() => {
    setTry("");
    setInput("");
    setCheated(false);
  }, [kana]);

  return (
    <div className="kanaContainer">
      <div className="kana">
        <div onClick={onClickKana}>{!cheated ? kana.kana : kana.roumaji}</div>
      </div>
      <div className="kanaInputContainer">
        <OutlinedInput
          onKeyDown={(e) => e.key === "Enter" && check()}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="kanaInput"
        />
        {attempt === "g" && <CheckBoxIcon className="kanaIcon green" />}
        {attempt === "r" && <CancelIcon className="kanaIcon red" />}
      </div>
      <Button
        onKeyDown={(e) => e.key === "Enter" && check()}
        onClick={check}
        variant="contained"
      >
        {attempt !== "g" ? "Check" : "Next"}
      </Button>
    </div>
  );
};

export default Kana;
