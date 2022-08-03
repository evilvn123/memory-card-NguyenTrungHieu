import { render, screen, waitFor } from "@testing-library/react";
import Board from "../components/Board";
import cards from "../data/cards";
import { mount, shallow } from "enzyme";
import Card from "../components/Card";

import * as enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

enzyme.configure({ adapter: new Adapter() });
it("Render Board", () => {
  render(<Board cards={cards} />);
  const cardComponent = screen.getAllByTestId("card");
  expect(cardComponent.length).toEqual(cards.length);
});

it("Render Card components in Board", () => {
  const wrapper = shallow(<Board cards={cards} />);
  expect(wrapper.find(Card)).toHaveLength(cards.length);
  const sampleCard = wrapper.find(Card).at(0);
  sampleCard.simulate("click");
});
