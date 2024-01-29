import { Heading } from "@/components";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

vi.mock("@/config/env", () => ({
  env: {
    WELCOME_MESSAGE: "We are here to help you with your Next.js project 🥳",
  },
}));

describe("Heading Component", () => {
  test("should render Heading Component properly", () => {
    render(<Heading />);

    expect(
      screen.getByText(/Hey, let’s build something together?/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /We are here to help you configure easily your react.js project/i
      )
    ).toBeInTheDocument();
  });
});
