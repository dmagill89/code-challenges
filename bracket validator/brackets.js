/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  let length = s?.length;

  stack.push('0');

  for (let i = 0; i < length; i++) {
    let c = s[i];
    let popped = stack.pop();

    if (isRight(c) && (popped === inverse(c))) {
      continue;
    } else if (isRight(c) && (popped !== inverse(c))) {
      return false;
    } else if (isLeft(c)) {
      stack.push(popped);
      leftStack.push(c);
    }
  }

  return true;
};

var inverse = function (c) {
  switch (c) {
    case ')':
      return '(';
    case '}':
      return '{';
    case ']':
      return '[';
  }
};

var isLeft = function (c) {
  return (c === '(' || c === '{' || c === '[');
};

var isRight = function (c) {
  return (c === ')' || c === '}' || c === '}');
};