import React from "react";

let Ingredient = ({ name, amount }) => {
  return (
    <>
      <span>{name} </span>
      <span>{amount} </span>
    </>
  );
};

export default Ingredient;
