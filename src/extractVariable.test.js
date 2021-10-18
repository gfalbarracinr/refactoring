import { price } from "./extractVariable";

describe("Price testing", () => {
  it('price is correct', () => {
    const order = {
      quantity: 3,
      itemPrice: 10
    };
    expect(price(order)).toEqual(33);
  });
});