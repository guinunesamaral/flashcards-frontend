import React, { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useGlobalContext } from "../../context/context";
import "./AddFlashcard.css";

function AddFlashcard() {
  const { addFlashcard } = useGlobalContext();

  const [front, setFront] = useState("");
  const [back, setBack] = useState("");

  const changeFront = (e: FormEvent<HTMLInputElement>) => {
    setFront(e.currentTarget.value);
  };

  const changeBack = (e: FormEvent<HTMLTextAreaElement>) => {
    setBack(e.currentTarget.value);
  };

  const add = () => {
    const id = uuidv4();
    if (front && back) addFlashcard(id, front, back);
  };

  return (
    <div className="addContainer">
      <form action="">
        <div className="frontDiv">
          <label htmlFor="front">Front:</label>
          <input type="text" id="front" onChange={changeFront} />
        </div>
        <div className="backDiv">
          <label htmlFor="back">Back:</label>
          <textarea id="back" onChange={changeBack} />
        </div>
      </form>
      {front && back && (
        <Link className="link" to="/flashcard-box" onClick={add}>
          Add
        </Link>
      )}
    </div>
  );
}

export default AddFlashcard;
