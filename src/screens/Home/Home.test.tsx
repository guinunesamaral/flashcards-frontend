import renderer from "react-test-renderer";
import Home from "./Home";

test("Random number generator", () => {
  const home = renderer.create(<Home></Home>);
  let tree = home.toJson();
  expect(tree).toMatchSnapshot();
});
