import React from "react";

let RecipeIngredientEdit = (props) => {
  return (
    <>
      <input className="recipe-edit__input" type="text" />
      <input className="recipe-edit__input" type="text" />
      <button className="btn btn--danger">&times;</button>
    </>
  );
};

export default RecipeIngredientEdit;
