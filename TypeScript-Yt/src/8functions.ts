function makeChai(type: string, cups: number) {
  console.log(`Makinf ${type} of ${cups}cups`);
}

makeChai("adrak",2)
//define return value dt

function getPrice(): number {
  return 2;
}
getPrice()

//void

function logChai(): void {
  console.log("hi");
}
logChai()
//option param

function t(type?: string) {
  console.log(type);
}
t("normal")
function teaType(type: string | "masala") {
  console.log(type);
}

teaType("ginger")
//more params

function teaOrder(order: {
  type: string;
  sugar: number;
  size: "medium" | "large";
}) {
  return 2;
}

teaOrder({
  type: "simple",
  sugar: 2,
  size: "medium",
});
