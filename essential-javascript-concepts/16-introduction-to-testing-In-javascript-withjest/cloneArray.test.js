const cloneArray = require("./cloneArray");

test("properly clones array", () => {
  const arr = [1, 2, 3];
  expect(cloneArray(arr)).toEqual(arr); // test if same value [1, 2, 3]
  expect(cloneArray(arr)).not.toBe(arr); // check if its clone array
});
