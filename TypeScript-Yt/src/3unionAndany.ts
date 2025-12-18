//union

let subs: number | string = "1M";

let apiRequestStatus: "pending" | "success" | "error" = "pending";

apiRequestStatus = "success";

let airlineSeat: "aisle" | "middle" | "window" = "aisle";

console.log("Api request:", apiRequestStatus);

console.log("subs:", subs);
console.log("airline seat:", airlineSeat);

//Any

const orders = ["22", "12", "23", "2"];
let currentOrder: undefined | string;

for (let order in orders) {
  if (order === "23") {
    currentOrder = order;
    break;
  }
  currentOrder = "11"
}

console.log("current order", currentOrder);
