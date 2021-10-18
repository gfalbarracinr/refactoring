const DEFAULT_DISCOUNT = 0.98;
const PRICE_TRESHOLD = 1000;
export default class Order {

  constructor(quantity, item) {
    this._quantity = quantity;
    this._item = item;
  }

  // get price() {
  //   let basePrice = this._quantity * this._item.price;
  //   let discountFactor = 0.98;
  //   if (basePrice > 1000) discountFactor -= 0.03;
  //   return basePrice * discountFactor;
  // }

  get price() {
    return this.basePrice * this.discountFactor;
  }

  get basePrice() {
    return this._quantity * this._item.price;
  }

  get discountFactor() {
    let discountFactor = DEFAULT_DISCOUNT;
    if (this.basePrice > PRICE_TRESHOLD) discountFactor -= 0.03;
    return discountFactor;
  }
}