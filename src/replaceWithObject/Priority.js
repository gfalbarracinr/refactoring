export default class Priority {
  constructor(value) {
    if (value instanceof Priority) return value;
    this._value = value;
  }

  toString() {
    return this._value;
  }

  get _index() {
    return Priority.legalValues().findIndex(s => s === this._value);
  }

  equals(other) {
    return this._index === other._index;
  }

  higherThan(other) {
    return this._index > other._index;
  }

  lowerThan(other) {
    return this._index < other._index;
  }

  static legalValues() {
    return ['low', 'normal', 'high', 'rush'];
  }

}