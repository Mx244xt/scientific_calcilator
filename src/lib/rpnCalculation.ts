import operateTable from "./operateTable";

const rpnCalculation = (rpn: string) => {
  if (typeof rpn !== "string") { throw new Error("引数が無効です。(Invalid argument.)"); }

  const fnSplitOperator = (val: any, stack: any) => {
    if (val === "") return;

    if (operateTable[val] != null) {
      stack.push({ value: val, type: operateTable[val].Type });
      return;
    };

    for (let op in operateTable) {
      let piv = val.indexOf(op);
      if (piv != -1) {
        fnSplitOperator(val.substring(0, piv), stack);
        fnSplitOperator(val.substring(piv, piv + op.length), stack);
        fnSplitOperator(val.substring(piv + op.length), stack);
        return;
      };
    };

    if (!isNaN(val)) {
      stack.push({ value: val, type: "num" });
    } else {
      stack.push({ value: val, type: "str" });
    };
  };
  let rpn_stack: any = [];
  for (let i = 0, rpn_array = rpn.split(/\s+|,/); i < rpn_array.length; i++) {
    fnSplitOperator(rpn_array[i], rpn_stack);
  }
  let calc_stack: any[] = [];
  while (rpn_stack.length > 0) {
    let elem: any = rpn_stack.shift();
    switch (elem.type) {
      case "num":
        calc_stack.push(
          elem.value.indexOf("0x") != -1 ? parseInt(elem.value, 16) : parseFloat(elem.value)
        );
        break;

      case "str":
        calc_stack.push(elem.value);
        break;

      case "state":
        console.warn("inclute statement: " + elem.value);
        break;

      case "op": case "fn":
        let operate = operateTable[elem.value];
        if (operate == null) throw new Error("not exit operate: " + elem.value);

        let args: any = [];
        for (let i = 0; i < operate.Arity; i++) {
          if (calc_stack.length > 0) {
            args.unshift(calc_stack.pop());
          } else {
            throw new Error("not enough operand");
          }
        }

        let res: any = operate.fn.apply(null, args);
        if (res != null) calc_stack.push(res);
        break;
    }
  }

  if (rpn_stack.length > 0 || calc_stack.length !== 1) {
    console.warn({ message: "calculate unfinished", rest_rpn: rpn_stack, result_value: calc_stack });
    return null;
  }

  return calc_stack[0];
};

export default rpnCalculation;