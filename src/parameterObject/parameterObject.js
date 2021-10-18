// function readingOutsideRange(station, min, max) {
//   return station.readings
//          .filter(r => r.temp < min || r.temp > max);
// }



export function readingOutsideRange(station, range) {
  return station.readings.filter(r => !range.contains(r.temp));
}