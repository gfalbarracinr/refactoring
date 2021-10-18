
import { rating } from './inlineFunction';
import { reportLines } from './inlineFunction';
describe("Rating testing", () => {
  it('More than 5 late deliveries false', () => {
    const aDriver = {
      numberOfLateDeliveries: 3
    }
    expect(rating(aDriver)).toEqual(1);
  });

  it('More than 5 late deliveries true', () => {
    const aDriver = {
      numberOfLateDeliveries: 6
    };
    expect(rating(aDriver)).toEqual(2);
  });
});

describe("Report lines testing", () => {
  it('Printing correctly', () => {
    const aCustomer = {
      name: "Giovanny",
      location: "Colombia"
    };

    const result = [["name", "Giovanny"], ["location", "Colombia"]]
    expect(reportLines(aCustomer)).toEqual(result);
  });
});
