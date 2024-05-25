"use client";
import React from "react";
import { useRouter } from "next/navigation";
import PropTypes from "prop-types";

const ShowMoreButton = ({ handleShowMore, isDisabled }) => {
  const router = useRouter();
  const handleClickShowMore = async () => {
    await handleShowMore();
    router.refresh();
  };

  return (
    <div className="col-12 hlp-text-center hlp-margintop-40">
      <button
        onClick={handleClickShowMore}
        className={`${!isDisabled && "--btn --secondary cursor-not-allowed"} `}
        disabled={isDisabled}
      >
        MÁS NOTAS DE ACUMULADO GRILLA
      </button>
    </div>
  );
};

ShowMoreButton.propTypes = {
  handleShowMore: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};

export default ShowMoreButton;
