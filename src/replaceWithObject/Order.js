import Priority from "./Priority";

export default class Order {
  constructor(data) {
    this._priority = new Priority(data.priority);
  }

  get priorityString() {
    return this._priority.toString();
  }

  get priority() {
    return this._priority;
  }

  set priority(aString) {
    this._priority = new Priority(aString);
  }

}