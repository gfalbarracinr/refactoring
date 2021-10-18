export default class CustomerData {
  constructor(data) {
    this._data = data;
  }

  getUsage(customerID, year, month) {
    return this._data[customerID].usages[year][month];

  }

}