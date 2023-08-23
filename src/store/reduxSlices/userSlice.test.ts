import reducer, {
  retrieveUser,
  logUser,
  removeUser,
  changePass,
} from "./usersSlice";

const initialState = {
  email: "",
  password: "",
  username: "",
  isLogged: false,
};

describe("usersSlice", () => {
  test("Should handle retrieveUser reducer", () => {
    const user = {
      username: "pippo",
      email: "lui@lui",
      password: "Luisa1234",
      isLogged: true,
    };

    expect(reducer(initialState, retrieveUser(user))).toEqual(user);
  });
  test("Should handle logUser reducer", () => {
    expect(reducer(initialState, logUser(true))).toEqual({
      ...initialState,
      isLogged: true,
    });
  });
  test("Should handle removeUser reducer", () => {
    expect(reducer(initialState, removeUser())).toEqual(initialState);
  });
  test("Should handle changePass reducer", () => {
    expect(reducer(initialState, changePass("newPassword1234"))).toEqual({
      ...initialState,
      password: "newPassword1234",
    });
  });
});
