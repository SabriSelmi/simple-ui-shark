import { render } from "@testing-library/react";
import { Button } from ".";

describe(`Component: Button`, () => {
  it(`should render`, () => {
    const { container } = render(<Button size="sm">Click me</Button>);
    expect(container).toMatchInlineSnapshot(`
      <div>
        <button
          class="w-full rounded-md font-semibold focus:outline-none disabled:cursor-not-allowed text-sm px-4 py-2 text-white bg-primary-500 hover:bg-primary-600"
        >
          Click me
        </button>
      </div>
    `);
  });
});
