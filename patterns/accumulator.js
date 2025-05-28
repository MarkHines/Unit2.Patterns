/**
 * You can assume that `n` is an integer.
 * @param {number} n
 * @returns {number} the sum of all integers from 1 to n, inclusive
 * @returns `0` if n is 0 or negative
 */
export function sumToN(n) {
  if (typeof n !== "number") return NaN;

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

/**
 * @param {number} n
 * @returns {number} the product of all integers from 1 to n, inclusive
 * @returns `NaN` if n is not a number
 * @returns `undefined` if n is negative
 * @returns `1` if n is 0
 */
export function factorial(n) {
  // TODO
  if(typeof n !== `number`) {
    return NaN;
  } else if(n < 0) {
    return undefined;
  } else if(n === 0){
    return 1;
  } else if(n > 0) {
    let factor = 1;
    for(let i = 1; i <=n; i++) {
      factor = factor * i;
    }
    return factor;
  }
}

/**
 * @param {number} n
 * @returns {number[]} an array of integers from 1 to n, inclusive
 * @returns `null` if n is not a number
 * @returns `[]` if n is 0 or negative
 */
export function buildNArray(n) {
  // TODO
  let newArray = [];
  if(typeof n !== `number`) {
    return null;
  } else if(n <= 0) {
    return newArray;
  } else if(n > 0) {
    let fullArray = []
    for(let i = 1; i <= n; i++) {
      fullArray.push(i);
    } return fullArray;
  } 
}

/**
 * @param {string[]} strings
 * @returns {string} the longest string in `strings`
 */
export function getLongestString(strings) {
  // TODO
  if(strings.length === 0) {
    return '';
  } else {
    let count = 0;
    for (let i = 0; i < strings.length; i++) {
      let stringLength = strings[i].length;
      if (stringLength > count) {
        count = stringLength;
      }
    }
    const singleString = strings.find((string) => {
      if(string.length === count) {
        return string;
      }
    })
    return singleString;
  }
}

/**
 * @param {boolean[]} attendance - `true` means a student is present, `false` means a student is absent
 * @returns {number} the number of students present
 */
export function countPresent(attendance) {
  // TODO
  if(attendance.length === 0) {
    return 0;
  }
  let counter = 0;
  for(let i = 0; i < attendance.length; i++){
    let currentElement = attendance[i];
    if(currentElement === true) {
      counter = counter + 1;
    } else{
      counter = counter + 0;
    }
  } return counter;
} 
  



/**
 * In DNA strings, the symbols `A` and `T` are complements of each other,
 * and the symbols `C` and `G` are complements of each other.
 * A complementary strand is a string formed by the complement
 * of each nucleobase in the original string.
 *
 * @param {string} dna - a string of the symbols `A`, `T`, `C`, or `G`
 * @returns {string} the complementary DNA strand
 * @returns `null` if `dna` is not a string
 */
export function complementDNA(dna) {
  // TODO
  if(typeof dna !== `string`){
    return null;
  }
  let newArray = dna.split(``);
  if(newArray.length === 0) {
    return ``;
  } 
  for (let i = 0; i < newArray.length; i++){
    if(newArray[i] === `A`){
      newArray[i] = `T`
    } else if (newArray[i] === `C`) {
      newArray[i] = `G`;
    } else if (newArray[i] === `G`) {
      newArray[i] = `C`;
    } else if (newArray[i] === 'T') {
      newArray[i] = `A`;
    } 
  } return newArray.join(``);
}

