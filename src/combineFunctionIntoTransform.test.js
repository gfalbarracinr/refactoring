import { enrichReading } from './combineFunctionIntoTransform';
import _ from 'lodash';
  it('check rading has not changed', () => {
    const baseReading = {customer: "Giovanny", quantity: 15, month: 5, year: 2017};
    const oracle = _.cloneDeep(baseReading);
    enrichReading(baseReading);
    expect(baseReading).toStrictEqual(oracle);
  });
 