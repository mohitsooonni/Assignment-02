import React, { useState } from "react";
import {
  useDispatch,
  useSelector,
} from "react-redux";

const Accounts = () => {
  const { balance, previous } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();

  const [submitted, setSubmitted] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (submitted < 0) {
      alert("Please enter a valid amount");
    } else {
      dispatch({
        type: "ADD",
        payload: Number(submitted),
      });
      setSubmitted("");
    }
  };

  return (
    <div className="accounts">
      <h1 className="heading">Accounts</h1>
      <h3>Count: {previous.length}</h3>
      <div className="balance">
        <h3>Balance </h3>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            placeholder="Enter an amount"
            name="balance"
            onChange={(e) =>
              setSubmitted(e.target.value)
            }
            value={submitted}
          />

          <div className="submit">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>

      {previous.map((value, i) => {
        return (
          <div key={i} className="amtZone">
            <h3 className="amtAdded">
              Balance: {value}
            </h3>
          </div>
        );
      })}
    </div>
  );
};

export default Accounts;
