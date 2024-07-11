function bodmas(exp) {
  nums = exp.match(/[0-9]+/g);
  op = exp.match(/[+*-/]/g);
  if(op==null){
    return exp
  }
  if(op!=null && nums.length==1){
    return exp
  }
  while (op.indexOf("/") != -1) {
    res = Number(nums[op.indexOf("/")]) / Number(nums[op.indexOf("/") + 1]);
    nums[op.indexOf("/")] = res;
    nums.splice(op.indexOf("/") + 1, 1);
    op.splice(op.indexOf("/"), 1);
  }
  while (op.indexOf("*") != -1) {
    res = Number(nums[op.indexOf("*")]) * Number(nums[op.indexOf("*") + 1]);
    nums[op.indexOf("*")] = res;
    nums.splice(op.indexOf("*") + 1, 1);
    op.splice(op.indexOf("*"), 1);
  }
  while (op.indexOf("+") != -1) {
    res = Number(nums[op.indexOf("+")]) + Number(nums[op.indexOf("+") + 1]);
    nums[op.indexOf("+")] = res;
    nums.splice(op.indexOf("+") + 1, 1);
    op.splice(op.indexOf("+"), 1);
  }
  while (op.indexOf("-") != -1) {
    res = Number(nums[op.indexOf("-")]) - Number(nums[op.indexOf("-") + 1]);
    nums[op.indexOf("-")] = res;
    nums.splice(op.indexOf("-") + 1, 1);
    op.splice(op.indexOf("-"), 1);
  }
  return nums[0];
}

function solve(exp) {
    const re = /\([^\(\)]+\)/
    while(exp.match(re)!=null){
        sol = bodmas(exp.match(re)[0].substring(1,exp.match(re)[0].length-1))
        exp=exp.replace(exp.match(re)[0],sol)
        console.log(exp)
    }
    return bodmas(exp)
}
console.log(solve("-1"));
