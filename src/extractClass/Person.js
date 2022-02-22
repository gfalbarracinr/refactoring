import TelephoneNumber from "./TelephoneNumber";

export default class Person {
  constructor(areaCode, officeNumber) {
    this._telephoneNumber = new TelephoneNumber(areaCode, officeNumber);
  }
  get name() {
    return this._name;
  }
  set name(arg) {
    this._name = arg;
  }
  
  get telephoneNumberString() {
    return this._telephoneNumber.toString();
  }

  get telephoneNumber() {
    return this._telephoneNumber;
  }

  set telephoneNumber(arg) {
    this._telephoneNumber = arg;
  }
}