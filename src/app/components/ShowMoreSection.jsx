"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/context";
import ShowMoreButton from "./ui/ShowMoreButton";
import PropTypes from "prop-types";

const ShowMoreSection = ({ isDisabled }) => {
  const { page, setPage } = useAppContext();
  const router = useRouter();
  const handleClickShowMore = () => {
    const currentPage = page ? page + 1 : 2;
    setPage(currentPage);
    router.push("/?page=" + currentPage, { scroll: false });
  };

  return (
    <ShowMoreButton
      handleClickShowMore={handleClickShowMore}
      isDisabled={isDisabled}
    />
  );
};

ShowMoreSection.propTypes = {
  isDisabled: PropTypes.bool.isRequired,
};

export default ShowMoreSection;
