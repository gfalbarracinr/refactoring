// // eslint-disable-next-line no-unused-vars
// function baseRate(month, year) {
//   return 1
// }

// function taxThreshold(year) {
//   return year/100;
// }
// export function calculateReading(aReading) {
//   const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity;
//   const taxableCharge = Math.max(0, baseCharge - taxThreshold(aReading.year));
// }

import _ from 'lodash';

// eslint-disable-next-line no-unused-vars
function baseRate(month, year) {
  return 1
}

function taxThreshold(year) {
  return year/100;
}
export function calculateReading(aReading) {
  const reading = enrichReading(aReading);
  // eslint-disable-next-line no-unused-vars
  const baseCharge = reading.baseCharge;
  // eslint-disable-next-line no-unused-vars
  const taxableCharge = reading.taxableCharge;
}
export function enrichReading(aReading) {
  const result = _.cloneDeep(aReading);
  result.baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity;
  result.taxableCharge = Math.max(0, result.baseCharge - taxThreshold(aReading.year));
}