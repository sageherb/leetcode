/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const lowerCaseStr = s.toLowerCase();
  const a = "a".charCodeAt(0);
  const z = "z".charCodeAt(0);
  const zero = "0".charCodeAt(0);
  const nine = "9".charCodeAt(0);
  let str = "";

  for (let i = 0; i < lowerCaseStr.length; i++) {
    const charCode = lowerCaseStr.charCodeAt(i);
    
    if ((a <= charCode && charCode <= z) || (zero <= charCode && charCode <= nine)) {
      str += lowerCaseStr[i];
    }
  }

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - (i + 1)]) return false;
  }

  return true;
};