import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ShowMoreSection from "./ShowMoreSection";
import { useAppContext } from "@/context";
import { useRouter } from "next/navigation";

// Mock the context and router
jest.mock("@/context", () => ({
  useAppContext: jest.fn(),
}));

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("ShowMoreSection", () => {
  const setPage = jest.fn();
  const push = jest.fn();
  const page = 1;

  beforeEach(() => {
    useAppContext.mockReturnValue({ page, setPage });
    useRouter.mockReturnValue({ push });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the ShowMoreButton", () => {
    const { getByRole } = render(
      <ShowMoreSection isDisabled={false} />
    );

    const button = getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("updates page and router push on button click", () => {
    const { getByRole } = render(
      <ShowMoreSection isDisabled={false} />
    );

    const button = getByRole("button");
    fireEvent.click(button);

    expect(setPage).toHaveBeenCalledWith(page + 1);
    expect(push).toHaveBeenCalledWith("/?page=2", { scroll: false });
  });

  it("disables the button when isDisabled is true", () => {
    const { getByRole } = render(
      <ShowMoreSection isDisabled={true} />
    );

    const button = getByRole("button");
    expect(button).toBeDisabled();
  });
});
