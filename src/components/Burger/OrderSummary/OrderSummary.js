import React, { Component } from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
  state = {};
  render() {
    const {
      ingredients,
      purchaseCanceled,
      purchaseContinued,
      price
    } = this.props;

    const ingredientSummary = Object.keys(ingredients).map(igKey => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: 'capitalize' }}>{igKey}</span> :
          {` ${ingredients[igKey]}`}
        </li>
      );
    });

    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients: </p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price : {price.toFixed(2)}</strong>
        </p>
        <p>Contunue to Checkout ? </p>
        <Button btnType="Danger" clicked={purchaseCanceled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={purchaseContinued}>
          CONTINUE
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;
