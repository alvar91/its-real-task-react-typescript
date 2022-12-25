const validateParenthesis = require('./validateParenthesis')

describe("Check validateParenthesis", () => {
  it("Should return correct sequence 1", () => {
    const testStr = "([]{})[]";
    const result = validateParenthesis(testStr);
    expect(result).toStrictEqual(`${testStr}: Правильно расставлено: 8; Неправильно расставлено: 0`);
  });
  it("Should return correct sequence 2", () => {
    const testStr = "([]]";
    const result = validateParenthesis(testStr);
    expect(result).toStrictEqual(`${testStr}: Правильно расставлено: 2; Неправильно расставлено: 2`);
  });
  it("Should return correct sequence 3", () => {
    const testStr = "(((())()))";
    const result = validateParenthesis(testStr);
    expect(result).toStrictEqual(`${testStr}: Правильно расставлено: 10; Неправильно расставлено: 0`);
  });
  it("Should return correct sequence 4", () => {
    const testStr = "())";
    const result = validateParenthesis(testStr);
    expect(result).toStrictEqual(`${testStr}: Правильно расставлено: 2; Неправильно расставлено: 1`);
  });
  it("Should return correct sequence 5", () => {
    const testStr = ")(";
    const result = validateParenthesis(testStr);
    expect(result).toStrictEqual(`${testStr}: Правильно расставлено: 0; Неправильно расставлено: 2`);
  });
  it("Should return correct sequence 6", () => {
    const testStr = "([])";
    const result = validateParenthesis(testStr);
    expect(result).toStrictEqual(`${testStr}: Правильно расставлено: 4; Неправильно расставлено: 0`);
  });
  it("Should return correct sequence 7", () => {
    const testStr = "([)]";
    const result = validateParenthesis(testStr);
    expect(result).toStrictEqual(`${testStr}: Правильно расставлено: 0; Неправильно расставлено: 4`);
  });
  it("Should return correct sequence 8", () => {
    const testStr = "([a])";
    const result = validateParenthesis(testStr);
    expect(result).toStrictEqual(`${testStr}: Правильно расставлено: 4; Неправильно расставлено: 0`);
  });
  it("Should return correct sequence 9", () => {
    const testStr = "(1[2)3]";
    const result = validateParenthesis(testStr);
    expect(result).toStrictEqual(`${testStr}: Правильно расставлено: 0; Неправильно расставлено: 4`);
  });
});

