import { compareUsage } from './encapsulationRecord';
  describe('check uage comparation', () => {
    let expected = {};
    let result = {};
    beforeAll(()=> {
      expected = {laterAmount: 50, change: -20};
      result = compareUsage(1920, 2016, 1);
    });    
    it("check laterAmount", () => {
      expect(result.laterAmount).toEqual(expected.laterAmount);
    });
    it("check change", () => {
      expect(result.change).toEqual(expected.change);
    });
  });
 