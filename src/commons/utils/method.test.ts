import { invertDate, invertMinutes, formatValue } from "./method";

describe("Method", () => {
  describe("Inver date", () => {
    test("should invert the date format", () => {
      const inputDate = "2023/08/24";
      expect(invertDate(inputDate)).toBe("24/08/2023");
    });
  });
  describe("Inver minutes", () => {
    test("should invert minutes to hours and minutes", () => {
      const totalMinutes = 145;
      expect(invertMinutes(totalMinutes)).toBe("2:25");
    });
    test("should return In arrivo for undefined minutes", () => {
      expect(invertMinutes()).toBe("In arrivo");
    });
  });
  describe("Format value", () => {
    test("should format a value as USD currency", () => {
      const value = 43630225;

      expect(formatValue(value)).toEqual(
        `43.630.225,00${String.fromCharCode(160)}USD`
      );
    });
  });
});
