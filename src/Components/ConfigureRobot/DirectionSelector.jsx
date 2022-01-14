import React from "react";
import { Select } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { changeDirection } from "../../redux/actions/robotActions";

const DirectionSelector = () => {
  const dispatch = useDispatch();

  function handleChange({ target }) {
    dispatch(changeDirection(target.value));
    console.log(target.value);
  }
  return (
    <Select placeholder="Select direction" onChange={handleChange}>
      <option value="north">North</option>
      <option value="south">South</option>
      <option value="east">East</option>
      <option value="west">West</option>
    </Select>
  );
};

export default DirectionSelector;
