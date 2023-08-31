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
  test.each([
    /Errore 404/,
    /Ops!! LA pagina non è stata trovata/,
    /Ritorna alla Home/,
  ])("should render the ErrorPage if correct text", (textValue) => {
    renderErrorPage();

    expect(screen.getByText(textValue)).toBeInTheDocument();
  });
});
