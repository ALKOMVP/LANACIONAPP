import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ShowMoreSection from "./ShowMoreSection";
import { useAppContext } from "@/context";
import { useRouter } from "next/navigation";
import { ITEMS_PER_PAGE } from "@/constants";

// Mock the context and router
jest.mock("@/context", () => ({
  useAppContext: jest.fn(),
}));

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("ShowMoreSection", () => {
  const handleShowMore = jest.fn();
  const setPage = jest.fn();
  const refresh = jest.fn();
  const page = 1;

  beforeEach(() => {
    useAppContext.mockReturnValue({ page, setPage });
    useRouter.mockReturnValue({ refresh });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the ShowMoreButton", () => {
    const { getByRole } = render(
      <ShowMoreSection handleShowMore={handleShowMore} isDisabled={false} />
    );

    const button = getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("calls handleShowMore and updates page on button click", () => {
    const { getByRole } = render(
      <ShowMoreSection handleShowMore={handleShowMore} isDisabled={false} />
    );

    const button = getByRole("button");
    fireEvent.click(button);

    expect(handleShowMore).toHaveBeenCalledWith((page + 1) * ITEMS_PER_PAGE);
    expect(setPage).toHaveBeenCalledWith(page + 1);
    expect(refresh).toHaveBeenCalled();
  });

  it("disables the button when isDisabled is true", () => {
    const { getByRole } = render(
      <ShowMoreSection handleShowMore={handleShowMore} isDisabled={true} />
    );

    const button = getByRole("button");
    expect(button).toBeDisabled();
  });
});