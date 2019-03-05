interface chenhao {
  color: string;
  tall: number;
}

let a = {} as chenhao;
a.color = "black";
a.tall = 12;

let list: number[] = [1, 2, 3];
let listtwo: [number, string] = [21, "1"];

type C = { a: string; b?: number };
function f({ a, b }: C): void {
  // ...
}

interface Point {
  readonly color: string;
}

let s: Point = {
  color: "123"
};
