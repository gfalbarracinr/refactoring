import Order from './replaceTempWithQuery';

it('price is lower than 1000', () => {
  const order = new Order(2, {name: "pencil", price: 20});
  expect(order.price).toEqual(39.2);
});

it('price is higher than 1000', () => {
  const order = new Order(5, {name: "pencil", price: 250});
  expect(order.price).toEqual(1187.5);
});