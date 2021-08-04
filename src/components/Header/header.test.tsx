import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("renders react component", () => {
  render(<>Header</>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
