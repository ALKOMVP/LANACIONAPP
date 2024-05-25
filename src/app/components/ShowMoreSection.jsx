"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/context";
import { ITEMS_PER_PAGE } from "@/constants";
import ShowMoreButton from "./ui/ShowMoreButton";
import PropTypes from "prop-types";

const ShowMoreSection = ({ handleShowMore, isDisabled }) => {
  const { page, setPage } = useAppContext();
  const router = useRouter();
  const handleClickShowMore = () => {
    const currentPage = page + 1;
    handleShowMore(currentPage * ITEMS_PER_PAGE);
    setPage(currentPage);
    router.refresh();
  };

  return (
    <ShowMoreButton handleClickShowMore={handleClickShowMore} isDisabled={isDisabled} />
  );
};

ShowMoreSection.propTypes = {
  handleShowMore: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};

export default ShowMoreSection;
