import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = ({ ingredients }) => {
  // convert object to array by getting object key and map through with the type of igKey
  let tranformedIngredients = Object.keys(ingredients)
    .map(igKey => {
      return [...Array(ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      }); // array of two elements
    })
    .reduce((arr, el) => {
      // use reduce to convert 4 empty array
      return arr.concat(el);
    }, []);
  // check if ingredient is empty and render a message
  if (tranformedIngredients.length === 0) {
    tranformedIngredients = <p>Please start adding ingredients!</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {tranformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
