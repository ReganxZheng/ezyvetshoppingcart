export const mockAPIReturnProducts = () => {
  return new Promise((resolve) =>
    resolve([
      {
        id: 1,
        name: 'Sledgehammer',
        price: 125.75,
      },
      {
        id: 2,
        name: 'Axe',
        price: 190.5,
      },
      {
        id: 3,
        name: 'Bandsaw',
        price: 562.13,
      },
      {
        id: 4,
        name: 'Chisel',
        price: 12.9,
      },
      {
        id: 5,
        name: 'Hacksaw',
        price: 18.45,
      },
    ])
  ).catch((error) => {
    console.log(error);
  });
};
