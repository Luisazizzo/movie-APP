import { SignUpSchema } from "./validationSchema";

describe("Signup validation schema", () => {
  test("Valid Signup", () => {
    const validationSignup = {
      username: "pippo",
      email: "pippo@pippo",
      password: "Pippo1234!",
      confirmPassword: "Pippo1234!",
    };
    const valid = SignUpSchema.isValidSync(validationSignup);
    expect(valid).toBe(true);
  });
  test("Not valid Signup", () => {
    const invalidationSigup = {
      username: "pippo",
      email: "pippo@pippo",
      password: "Pippo1234!",
      confirmPassword: "Pippo",
    };
    const notValid = SignUpSchema.isValidSync(invalidationSigup);
    expect(notValid).toBe(false);
  });
});
