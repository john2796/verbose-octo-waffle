import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import styled from 'styled-components';

const BurgerWrapper = styled.div`
  .Burger {
    width: 100%;
    margin: auto;
    height: 250px;
    overflow: scroll;
    text-align: center;
    font-weight: bold;
    font-size: 1.2rem;
  }

  @media (min-width: 500px) and (min-height: 400px) {
    .Burger {
      width: 350px;
      height: 300px;
    }
  }

  @media (min-width: 500px) and (min-height: 401) {
    .Burger {
      width: 450px;
      height: 400px;
    }
  }

  @media (min-width: 1000px) and (min-height: 700px) {
    .Burger {
      width: 700px;
      height: 600px;
    }
  }
`;

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
    <BurgerWrapper>
      <div className="Burger">
        <BurgerIngredient type="bread-top" />
        {tranformedIngredients}
        <BurgerIngredient type="bread-bottom" />
      </div>
    </BurgerWrapper>
  );
};

export default burger;
