import Organization  from "./Organization";
import * as customerData from './customers.json';
import CustomerData from "./CustomerData";

// const organization = {name: "Acme", country: "CO" }

// export function compareUsage(customerId, lastYear, month) {
//   const later = customerData[customerId].usages[lastYear][month];
//   const earlier = customerData[customerId].usages[lastYear - 1][month];
//   return {laterAmount: later, change: later - earlier}
// }
const organization = new Organization("Acme", "CO");
const customerInfo = new CustomerData(customerData);

export function getOrganizationName() {
  return organization.name();
}

export function getOrganization() {
  return organization; 
}


function getCustomerRowData() {
  return customerInfo._data;
}
function getCustomerData() {
  return customerInfo;
}

export function compareUsage(customerId, lastYear, month) {
  const later = getCustomerData().getUsage(customerId, lastYear, month);
  const earlier = getCustomerData().getUsage(customerId, lastYear - 1, month);
  return {laterAmount: later, change: later - earlier}
}