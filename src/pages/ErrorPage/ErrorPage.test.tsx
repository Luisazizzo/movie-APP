import { render, screen } from "@testing-library/react";
import ErrorPage from "./ErrorPage";
import { MemoryRouter } from "react-router-dom";

const renderErrorPage = () =>
  render(
    <MemoryRouter>
      <ErrorPage />
    </MemoryRouter>
  );

describe("ErrorPage", () => {
  test("should renders ErrorPage component", () => {
    renderErrorPage();
    expect(screen.getByAltText("error")).toBeInTheDocument();
    expect(screen.getByText(/Errore 404/)).toBeInTheDocument();
    expect(
      screen.getByText(/Ops!! LA pagina non è stata trovata/)
    ).toBeInTheDocument();
    expect(screen.getByText(/Ritorna alla Home/)).toBeInTheDocument();
  });
});
