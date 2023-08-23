import { LogInSchema } from "./validationSchema";

describe("Login validation schema", () => {
  const validation = {
    username: "username",
    password: "password",
  };
  test("Valid Login", () => {
    const schema = LogInSchema("username", "password");
    expect(schema.isValidSync(validation)).toBe(true);
  });
  test("Not valid Login", () => {
    const schema = LogInSchema("username", "password");
    expect(schema.isValidSync({ username: "", password: "" })).toBe(false);
  });
});
