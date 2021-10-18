
import { main } from './encapsulateVariable';
describe("Invoice testing", () => {
  it('outstanding test', () => {
    const result = {firstName: "Giovanny", lastName: "Albarracin"}
    expect(main().owner).toEqual(result);
  })
});
