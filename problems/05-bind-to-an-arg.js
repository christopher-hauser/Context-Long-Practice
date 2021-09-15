function bindToAnArg(func, arg) {
  let result = func.bind(this, arg);
  return result;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = bindToAnArg;
