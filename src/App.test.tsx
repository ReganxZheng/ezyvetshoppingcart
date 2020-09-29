import React from 'react';
import { render, screen } from './test-utils';
import App from './App';

let initialState = {};

beforeEach(() => {
  initialState = {
    products: {
      productList: [
        {
          id: 1,
          name: 'test',
          price: 1.5,
        },
      ],
    },
    carts: {
      cartList: [],
    },
  };
});

it('Renders the connected app with initialState and render App with products', () => {
  render(<App />, {
    initialState,
  });

  expect(screen.getByTestId(/App/i)).toBeInTheDocument();
  expect(screen.getByTestId(/Product/i)).toBeInTheDocument();
});
