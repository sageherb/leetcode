/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 !== 0) return false;

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(s[i]);
    } else {
      const pop = stack.pop();

      if (!pop) return false;
      if (pop === "(" && s[i] !== ")") return false;
      if (pop === "{" && s[i] !== "}") return false;
      if (pop === "[" && s[i] !== "]") return false;
    }
  }

  if (stack.length !== 0) return false;

  return true;
};
