import { PreloadedState } from "@reduxjs/toolkit";
import Profile from "./Profile";
import { RootState, setupStore } from "../../store/store";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

const mockCloseModal = jest.fn();
const mockShowModal = jest.fn();
const mockShowPopupConfirm = jest.fn();
const mockHandleCancelPopup = jest.fn();
const mockHandleConfirmPopup = jest.fn();

jest.mock("./hooks/useLogOut/useLogOut");

jest.mock("./hooks/useModal/useModal", () => () => ({
  closeModal: () => mockCloseModal,
  showModal: () => mockShowModal,
}));
jest.mock("./hooks/usePopup/usePopup", () => () => ({
  showPopconfirm: () => mockShowPopupConfirm,
  handleCancelPopup: () => mockHandleCancelPopup,
  handleConfirmPopup: () => mockHandleConfirmPopup,
}));

jest.mock("../../components/ModalChange/ModalChange", () => () => (
  <div data-testid="modal" />
));

jest.mock("../../components/Form/ChangePassword/ChangePassword", () => () => (
  <div data-testid="form" />
));

jest.mock("antd", () => ({
  ...jest.requireActual("antd"),
  Button: jest.fn(() => <div>Disconnetti</div>),
  Popconfirm: jest.fn(({ title }) => <div>{title}</div>),
  Space: jest.fn(() => <div data-testid="space" />),
}));

const preloadedState: PreloadedState<RootState> = {
  usersSlice: {
    username: "username",
    password: "password",
    email: "email",
    isLogged: true,
  },
};

const renderProfile = (preloadedState?: PreloadedState<RootState>) => {
  render(
    <Provider store={setupStore(preloadedState)}>
      <Profile />
    </Provider>
  );
};

describe("Profile", () => {
  test("should render profile page if the ID's space it's present", () => {
    renderProfile(preloadedState);
    expect(screen.getByTestId("space")).toBeInTheDocument();
  });
});
