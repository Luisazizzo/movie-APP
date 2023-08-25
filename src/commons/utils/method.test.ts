import { invertDate, invertMinutes, formatValue } from "./method";

describe("Method", () => {
  test("should invert the date format", () => {
    const inputDate = "2023/08/24";
    const invertedDate = invertDate(inputDate);
    expect(invertedDate).toBe("24/08/2023");
  });
  test("should invert minutes to hours and minutes", () => {
    const totalMinutes = 145;
    const invertedTime = invertMinutes(totalMinutes);
    expect(invertedTime).toBe("2:25");
  });
  test("should return In arrivo for undefined minutes", () => {
    const invertedTime = invertMinutes();
    expect(invertedTime).toBe("In arrivo");
  });
  //   test("should format a value as USD currency", () => {
  //     const value = 1234567;
  //     const formattedValue = formatValue(value);
  //     expect(formattedValue).toBe("12.345,67");
  //   });
});
