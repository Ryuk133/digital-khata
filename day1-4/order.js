const customerOrder ={
    customerName:"Suresh",
    item:"Milk Packet",
    quantity:2,
    pricePerunit: 30
};
const totalBill = customerOrder.quantity*customerOrder.pricePerunit;
console.log("Customer:"+customerOrder.customerName);
console.log("Ordered:" + customerOrder.item);
console.log("TotalAmount:" + totalBill);
console.log(customerOrder);