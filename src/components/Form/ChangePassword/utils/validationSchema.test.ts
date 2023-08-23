import { changePasswordSchema } from "./validationSchema";

const validData = {
  oldPassword: "oldPassword",
  newPassword: "Luisa1234",
  confirmPassword: "Luisa1234",
};
describe("Change password schema", () => {
  test("Should validate input values", () => {
    const schema = changePasswordSchema(validData.oldPassword);

    expect(schema.isValidSync(validData)).toBe(true);
  });
});
