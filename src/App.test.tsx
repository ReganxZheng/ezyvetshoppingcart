import React from 'react';
import { render, fireEvent, screen } from './test-utils';
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

it('Render the app and add one product into cart', () => {
  const { getByText } = render(<App />, {
    initialState,
  });

  fireEvent.click(getByText('Add to Cart'));

  expect(screen.getByTestId(/Cart/i)).toHaveTextContent('1');
});
