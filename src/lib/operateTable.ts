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
  //ビットぼ反転
  '~': {
    Priority: 15, Type: "op", Arity: 1, Associative_law: "R",
    fn: (L: number) => { return ~L; }
  },
  //べき乗
  '**': {
    Priority: 14, Type: "op", Arity: 2, Associative_law: "R",
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
  //
  //ビット単位 XOR
  '^': {
    Priority: 7, Type: "op", Arity: 2, Associative_law: "L",
    fn: (L: number, R: number) => { return L ^ R; }
  },
  //
  //ビット単位 OR
  '|': {
    Priority: 6, Type: "op", Arity: 2, Associative_law: "L",
    fn: (L: number, R: number) => { return L | R; }
  },
  //正弦
  'sin': {
    Priority: 18, Type: "op", Arity: 1, Associative_law: "L",
    fn: (L: number, R: number) => { return Math.sin(L * (Math.PI / 180)); }
  },
  //余弦
  'cos': {
    Priority: 18, Type: "op", Arity: 1, Associative_law: "L",
    fn: (L: number, R: number) => { return Math.cos(L * (Math.PI / 180)); }
  },
  //正接
  'tan': {
    Priority: 18, Type: "op", Arity: 1, Associative_law: "L",
    fn: (L: number, R: number) => { return Math.tan(L * (Math.PI / 180)); }
  },
  //正割
  'asin': {
    Priority: 18, Type: "op", Arity: 1, Associative_law: "L",
    fn: (L: number, R: number) => { return Math.asin(L * (180 / Math.PI)); }
  },
  //余割
  'acos': {
    Priority: 18, Type: "op", Arity: 1, Associative_law: "L",
    fn: (L: number, R: number) => { return Math.acos(L * (180 / Math.PI)); }
  },
  //余接
  'atan': {
    Priority: 18, Type: "op", Arity: 1, Associative_law: "L",
    fn: (L: number, R: number) => { return Math.atan(L * (180 / Math.PI)); }
  },
};

export default operateTable;