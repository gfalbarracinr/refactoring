export default class Organization {
  constructor(name, country) {
    this._name = name;
    this._country = country;
  }
  get name() {
    return this._name;
  }
  get country() {
    return this._country;
  }
  set name(aName) {
    this._name = aName;
  }

  set country(aCountry) {
    this._country = aCountry;
  }
}