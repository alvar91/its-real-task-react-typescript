const parantesisPairs = {
  "{": "}",
  "[": "]",
  "(": ")",
};

const openingParenthesis = new Set(Object.keys(parantesisPairs));
const closingParenthesis = new Set(Object.values(parantesisPairs));

function validateparenthesis(text) {
  const stack = [];

  let pushedChars = 0;

  for (const character of text) {
    if (openingParenthesis.has(character)) {
      stack.push(character);
      pushedChars++;
    }

    if (closingParenthesis.has(character)) {
      if (!stack.length) {
        if (pushedChars !== 0) {
          return text.length - pushedChars - 1;
        }

        return text.length - pushedChars;
      }

      const parenthesis = stack.pop();

      if (character !== parantesisPairs[parenthesis]) {
        // Если наша скобка — не закрывающая текущей открывающей
        return text.length - pushedChars;
      }
    }
  }

  return text.length;
}

console.log(validateparenthesis("([]{})[]") === 8);
console.log(validateparenthesis("([]]") === 2);
console.log(validateparenthesis("(((())()))") === 10);
console.log(validateparenthesis("())") === 1);
console.log(validateparenthesis(")(") === 2);
console.log(validateparenthesis("([])") === 4);
console.log(validateparenthesis("([)]") === 2);
