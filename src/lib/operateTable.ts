import { OperateKeyType } from "../types/operater";


const operateTable: OperateKeyType = {
  //グループ化
  '(': {
    Priority: 19, Type: "state", Arity: 0, Associative_law: "",
    fn: () => { }
  },
  //グループ化
  ')': {
    Priority: 19, Type: "state", Arity: 0, Associative_law: "",
    fn: () => { }
  },
  //正弦
  'sin': {
    Priority: 18, Type: "op", Arity: 1, Associative_law: "L",
    fn: (L: number) => { return Math.sin(L * (Math.PI / 180)); }
  },
  //正割
  'asin': {
    Priority: 18, Type: "op", Arity: 2, Associative_law: "L",
    fn: (L: number, R: number) => { return Math.asin(L / R) * (180 / Math.PI); }
  },
  //余弦
  'cos': {
    Priority: 18, Type: "op", Arity: 1, Associative_law: "L",
    fn: (L: number) => { return cosDegCV(L); }
  },
  //余割
  'acos': {
    Priority: 18, Type: "op", Arity: 2, Associative_law: "L",
    fn: (L: number, R: number) => { return Math.acos(L / R) * (180 / Math.PI); }
  },
  //正接
  'tan': {
    Priority: 18, Type: "op", Arity: 1, Associative_law: "L",
    fn: (L: number) => { return Math.tan(L * (Math.PI / 180)); }
  },
  //余接
  'atan': {
    Priority: 18, Type: "op", Arity: 2, Associative_law: "L",
    fn: (L: number, R: number) => { return Math.atan(L / R) * (180 / Math.PI); }
  },
  //対数
  'log': {
    Priority: 18, Type: "op", Arity: 1, Associative_law: "L",
    fn: (L: number) => { return Math.log10(L); }
  },
  //ネイピア数 
  'e': {
    Priority: 18, Type: "op", Arity: 1, Associative_law: "L",
    fn: (L: number) => { return Math.exp(L); }
  },
  //自然対数
  'in': {
    Priority: 18, Type: "op", Arity: 1, Associative_law: "L",
    fn: (L: number) => { return Math.log(L); }
  },
  //平方根
  '√': {
    Priority: 18, Type: "op", Arity: 1, Associative_law: "L",
    fn: (L: number) => { return Math.sqrt(L); }
  },
  //3の平方根
  '3√': {
    Priority: 18, Type: "op", Arity: 1, Associative_law: "L",
    fn: (R: number) => { return Math.cbrt(R); }
  },
  //pi
  'π': {
    Priority: 18, Type: "op", Arity: 0, Associative_law: "",
    fn: () => { return Math.PI; }
  },
  //階乗
  '!': {
    Priority: 18, Type: "op", Arity: 1, Associative_law: "L",
    fn: (L: number) => { return factorial(L); }
  },
  //+符合の代替
  '#': {
    Priority: 15, Type: "op", Arity: 1, Associative_law: "R",
    fn: (L: any) => { return L; }
  },
  //-符合の代替
  '_': {
    Priority: 15, Type: "op", Arity: 1, Associative_law: "R",
    fn: (L: number) => { return -L; }
  },
  //ビット反転
  '~': {
    Priority: 15, Type: "op", Arity: 1, Associative_law: "R",
    fn: (L: number) => { return ~L; }
  },
  //べき乗 10x
  '10**': {
    Priority: 14, Type: "op", Arity: 1, Associative_law: "L",
    fn: (R: number) => { return 10 ** R; }
  },
  //べき乗 -()
  '**-1': {
    Priority: 14, Type: "op", Arity: 1, Associative_law: "L",
    fn: (L: number) => { return L ** -1; }
  },
  //べき乗 ^(
  '**': {
    Priority: 14, Type: "op", Arity: 2, Associative_law: "L",
    fn: (L: number, R: number) => { return L ** R; }
  },
  //乗算
  '*': {
    Priority: 13, Type: "op", Arity: 2, Associative_law: "L",
    fn: (L: number, R: number) => { return L * R; }
  },
  //除算
  '/': {
    Priority: 13, Type: "op", Arity: 2, Associative_law: "L",
    fn: (L: number, R: number) => { return L / R; }
  },
  //剰余
  '%': {
    Priority: 13, Type: "op", Arity: 2, Associative_law: "L",
    fn: (L: number, R: number) => { return L % R; }
  },
  //加算
  '+': {
    Priority: 12, Type: "op", Arity: 2, Associative_law: "L",
    fn: (L: any, R: any) => { return L + R; }
  },
  //減算
  '-': {
    Priority: 12, Type: "op", Arity: 2, Associative_law: "L",
    fn: (L: number, R: number) => { return L - R; }
  },
  //左ビットシプト
  '<<': {
    Priority: 11, Type: "op", Arity: 2, Associative_law: "L",
    fn: (L: number, R: number) => { return L << R; }
  },
  //右ビットシプト
  '>>': {
    Priority: 11, Type: "op", Arity: 2, Associative_law: "L",
    fn: (L: number, R: number) => { return L >> R; }
  },
  //ビット単位 AND
  '&': {
    Priority: 8, Type: "op", Arity: 2, Associative_law: "L",
    fn: (L: number, R: number) => { return L & R; }
  },
  //ビット単位 XOR
  '^': {
    Priority: 7, Type: "op", Arity: 2, Associative_law: "L",
    fn: (L: number, R: number) => { return L ^ R; }
  },
  //ビット単位 OR
  '|': {
    Priority: 6, Type: "op", Arity: 2, Associative_law: "L",
    fn: (L: number, R: number) => { return L | R; }
  },
};

export const factorial: (e: number) => number = (e: number) => {
  if (e === 0) return 1;
  return e * factorial(e - 1);
};

export const cosDegCV = (e: number) => {
  let cos = Math.cos(e * (Math.PI / 180));
  if (cos.toString().match("e")) return cos = 0
  return cos
};

export default operateTable;