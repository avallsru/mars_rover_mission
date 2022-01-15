import React, { useState } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setInitialCoords } from "../../redux/actions/robotActions";

const CoordInputs = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  function handleChange({ target }) {
    if (target.className === "xInput") {
      setX(target.value);
    } else if (target.className === "yInput") {
      setY(target.value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(setInitialCoords(x, y));
    navigate("/controller");
  }

  return (
    <div>
      <input onChange={handleChange} className="xInput" />
      <input onChange={handleChange} className="yInput" />
      <button type="submit" onClick={handleSubmit}>
        Set Robot
      </button>
    </div>
  );
};

export default CoordInputs;
