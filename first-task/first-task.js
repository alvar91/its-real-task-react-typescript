const parantesisPairs = {
  "{": "}",
  "[": "]",
  "(": ")",
};

const openingParenthesis = new Set(Object.keys(parantesisPairs));
const closingParenthesis = new Set(Object.values(parantesisPairs));

function validateparenthesis(text) {
  const bracketsString = [...text].filter(
    (character) =>
      openingParenthesis.has(character) || closingParenthesis.has(character)
  );

  const stack = [];

  let pushedChars = 0;

  for (const character of bracketsString) {
    if (openingParenthesis.has(character)) {
      stack.push(character);
      pushedChars++;
    }

    if (closingParenthesis.has(character)) {
      if (!stack.length) {
        if (pushedChars !== 0) {
          return bracketsString.length - pushedChars - 1;
        }

        return bracketsString.length - pushedChars;
      }

      const parenthesis = stack.pop();

      if (character !== parantesisPairs[parenthesis]) {
        // Если наша скобка — не закрывающая текущей открывающей
        return bracketsString.length - pushedChars;
      }
    }
  }

  return bracketsString.length;
}

console.log(validateparenthesis("([]{})[]") === 8);
console.log(validateparenthesis("([]]") === 2);
console.log(validateparenthesis("(((())()))") === 10);
console.log(validateparenthesis("())") === 1);
console.log(validateparenthesis(")(") === 2);
console.log(validateparenthesis("([])") === 4);
console.log(validateparenthesis("([)]") === 2);
console.log(validateparenthesis("([a])") === 4);
console.log(validateparenthesis("(1[2)3]") === 2);
