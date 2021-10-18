// export function printOwing(invoice) {
//   let outstanding = 0;
//   console.log("***********************");
//   console.log("**** Customer Owes ****");
//   console.log("***********************");
//   for (const o of invoice.orders) {
//     outstanding += o.amount;
//   }

//   const today = new Date();
//   invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);

//   console.log(`name: ${invoice.customer}`); 
//   console.log(`amount: ${outstanding}`); 
//   console.log(`name: ${invoice.dueDate.toLocaleDateString()}`); 

//   return outstanding;
// }

export function printOwing(invoice) {
    const outstanding = calculateOutstanding(invoice);
    printBanner();
    invoice.dueDate = recordDueDate(invoice);
    printDetails(invoice, outstanding);
    return outstanding;
  }

function calculateOutstanding(invoice) {
  let result = 0;
  for (const o of invoice.orders) {
    result += o.amount;
  }
  return result;
}

function printBanner() {
  console.log("***********************");
  console.log("**** Customer Owes ****");
  console.log("***********************");
}

function printDetails(invoice, outstanding) {
  console.log(`name: ${invoice.customer}`); 
  console.log(`amount: ${outstanding}`); 
  console.log(`name: ${invoice.dueDate.toLocaleDateString()}`); 
}

function recordDueDate() {
  const today = new Date();
  return  new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
}