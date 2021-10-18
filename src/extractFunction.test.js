import * as invoice from '../data/invoice.json';
import { printOwing } from './extractFunction';
describe("Invoice testing", () => {
  it('outstanding test', () => {
    expect(printOwing(invoice)).toEqual(150);
  })
});
