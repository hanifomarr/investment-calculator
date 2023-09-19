import React, { useState } from "react";

function UserInput({ submitUserInput }) {
  const [userInput, setUserInput] = useState(initialValue);
  const initialValue = {
    "current-savings": 0,
    "yearly-contribution": 0,
    "expected-return": 0,
    duration: 0,
  };

  const inputChangeHandler = (event) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [event.target.id]: event.target.value,
      };
    });
    console.log(userInput);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("submit");
  };

  const resetHandler = () => {
    setUserInput(initialValue);
  };

  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input
              onChange={inputChangeHandler}
              value={userInput["current-savings"]}
              type="number"
              id="current-savings"
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input
              onChange={inputChangeHandler}
              value={userInput["yearly-contribution"]}
              type="number"
              id="yearly-contribution"
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input
              onChange={inputChangeHandler}
              value={userInput["expected-return"]}
              type="number"
              id="expected-return"
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input
              onChange={inputChangeHandler}
              value={userInput.duration}
              type="number"
              id="duration"
            />
          </p>
        </div>
        <p className="actions">
          <button onClick={resetHandler} type="reset" className="buttonAlt">
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
    </div>
  );
}

export default UserInput;
