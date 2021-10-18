
// let spaceship = {};
// export function main() {
//   let defaultOwner = {firstName: "Giovanny", lastName: "Albarracin"}
//   spaceship.owner = defaultOwner;
//   return spaceship;
// }
let spaceship = {};
let defaultOwnerData = {firstName: "Giovanny", lastName: "Albarracin"}

function defaultOwner() {
  return Object.assign({}, defaultOwnerData);
}
// eslint-disable-next-line no-unused-vars
function setDefaultOwner(args) {
  defaultOwnerData = args;
} 

export function main() {
  spaceship.owner = defaultOwner();
  const owner2 = defaultOwner();
  owner2.lastName = "Riveros";
  return spaceship;
}