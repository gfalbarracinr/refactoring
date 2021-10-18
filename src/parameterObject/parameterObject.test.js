import * as station from '../../data/temperature.json';
import { readingOutsideRange } from './parameterObject';
import NumberRange from './NumberRange';
describe("Invoice testing", () => {
  it('outstanding test', () => {
    const range = new NumberRange(51, 53);
    const result = [{"temp": 47, "time": "2016-11-10 09:10"}, {"temp": 58, "time": "2016-11-10 09:30"}];
    expect(readingOutsideRange(station, range)).toEqual(result);
  })
});
 