import { render, screen } from "@testing-library/react";

test("renders react component", () => {
  render(<>Header</>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
