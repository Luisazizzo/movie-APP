import { render, screen } from "@testing-library/react";
import ModalChange from "./ModalChange";

jest.mock("antd", () => ({
  ...jest.requireActual("antd"),
  Modal: jest.fn(({ title }) => <div>{title}</div>),
}));

const mockProps = {
  closeModal: jest.fn(),
  isModalOpen: true,
  children: <div>Form</div>,
};

const renderModalchange = () => render(<ModalChange {...mockProps} />);

describe("ModalChange component", () => {
  test("Should renders the ModalChange component", () => {
    renderModalchange();
    expect(screen.getByText("Change Password")).toBeInTheDocument();
  });
});
