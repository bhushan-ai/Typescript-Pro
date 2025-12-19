function getChai(kind: string | number) {
  if (typeof kind === "string") {
    return `Making ${kind} tea`;
    //showing string methods here
  }
  return `Making ${kind} tea`;
  //showing number methods here
}

console.log(getChai(2));
//truthiness check
function serveChai(msg?: string) {
  if (msg) {
    return `Serving ${msg}`;
  }
  return `Serving default masala chai`;
}

console.log(serveChai("ginger tea"));

// ============

//exhaustive check

function orderChai(size: "small" | "medium" | "large" | number) {
  if (size === "small") {
    return `Small cutting chai`;
  }
  if (size === "medium" || size === "large") {
    return `Make extra chai`;
  }
  return `Chai order ${size}`;
}

console.log(orderChai(2));

// ============
//Guardrails

class KulhadChai {
  serve() {
    return `Serving kulhad chai `;
  }
}

class CuttingChai {
  serve() {
    return `Serving Cutting chai `;
  }
}

function serve(chai: KulhadChai | CuttingChai) {
  if (chai instanceof KulhadChai) {
    return chai.serve();
  }
}

//superpower of type check
type ChaiOrder = {
  type: string;
  sugar: number;
};

function isChaiOrder(obj: any): obj is ChaiOrder {
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.type === "string" &&
    typeof obj.type === "number"
  );
}

function serveOrder(item: ChaiOrder | string) {
  if (isChaiOrder(item)) {
    return `Serving ${item.type} chai with ${item.sugar}`;
  }
  return `Serving custom chai:${item}`;
}

console.log(serveOrder("new chai"));

//defining type intrestingly

type MasalaChai = { type: "masala"; spiceLevel: number };
type GingerChai = { type: "ginger"; amount: number };
type ElaichiChai = { type: "ilaichi"; aroma: number };

type Chai = MasalaChai | GingerChai | ElaichiChai;

function makeChai(order: Chai) {
  //type narrowing
  switch (order.type) {
    case "masala":
      return `Masala`;
      break;

    case "ilaichi":
      return `ilaichi`;
      break;

    case "ginger":
      return `ginger`;
      break;
  }
}
console.log(makeChai({ type: "ginger", amount: 2 }));
