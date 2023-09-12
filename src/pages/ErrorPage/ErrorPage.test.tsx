import { render, screen } from "@testing-library/react";
import ErrorPage from "./ErrorPage";
import { BrowserRouter } from "react-router-dom";

const renderErrorPage = () =>
  render(
    <BrowserRouter>
      <ErrorPage />
    </BrowserRouter>
  );

describe("ErrorPage", () => {
  test.each([/Error 404/, /Ops!! The page was not found/, /Return to Home/])(
    "should render the ErrorPage if correct text",
    (textValue) => {
      renderErrorPage();

      expect(screen.getByText(textValue)).toBeInTheDocument();
    }
  );
});
