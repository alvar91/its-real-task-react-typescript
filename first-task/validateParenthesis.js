const parantesisPairs = {
  "}": "{",
  "]": "[",
  ")": "(",
};

const closingParenthesis = new Set(Object.keys(parantesisPairs));
const openingParenthesis = new Set(Object.values(parantesisPairs));

module.exports = function validateParenthesis(text) {
  const bracketsString = [...text].filter(
    (character) =>
      openingParenthesis.has(character) || closingParenthesis.has(character)
  );

  const stack = [];

  let correctBracketsCount = 0;

  for (const character of bracketsString) {
    if (closingParenthesis.has(character)) {
      if (parantesisPairs[character] === stack.pop()) correctBracketsCount += 2;
    } else {
      stack.push(character);
    }
  }

  return `${text}: Правильно расставлено: ${correctBracketsCount}; Неправильно расставлено: ${
    bracketsString.length - correctBracketsCount
  }`;
};
