import { useTranslation } from "next-i18next";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import React from "react";

import { setToggleSelectTheQuestionProblem } from "store";
import { useOnClickOutside } from "utils";
import { IConClose } from ".";
import Link from "next/link";
import { PATH_MESSAGE } from "constant";

interface IProps {
  handleSelectTheQuestionProblem: () => void;
}

export const ComponentSelectTheQuestionProblem = (props: IProps) => {
  //page props
  const { handleSelectTheQuestionProblem } = props;
  //page hooks
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const ref = useRef<HTMLDivElement>(null);

  const handleCloseSelectTheQuestionProblem = () => {
    dispatch(setToggleSelectTheQuestionProblem());
  };

  useOnClickOutside(ref, handleCloseSelectTheQuestionProblem);

  return (
    <div className="bg-popup flex justify-center z-20">
      <div
        className="py-4 bg-white w-[90%] h-fit absolute top-[30vh] -translate-y-2/4 rounded"
        ref={ref}
      >
        <div
          className="absolute top-3 right-3"
          onClick={handleCloseSelectTheQuestionProblem}
        >
          <IConClose />
        </div>
        <div className="f-bold text-center mb-4">
          {t("selectTheQuestionProblem")}
        </div>
        <div className="px-3">
          <Link href={PATH_MESSAGE} passHref>
            <button
              className="btn btn-sub-primary mb-3"
              onClick={handleSelectTheQuestionProblem}
            >
              VD1
            </button>
          </Link>
          <Link href={PATH_MESSAGE} passHref>
            <button
              className="btn btn-sub-primary mb-3"
              onClick={handleSelectTheQuestionProblem}
            >
              VD2
            </button>
          </Link>
          <Link href={PATH_MESSAGE} passHref>
            <button
              className="btn btn-sub-primary mb-3"
              onClick={handleSelectTheQuestionProblem}
            >
              VD3
            </button>
          </Link>
          <button
            className="btn btn-sub-primary"
            onClick={handleSelectTheQuestionProblem}
          >
            Khác (về đặt hàng)
          </button>
        </div>
      </div>
    </div>
  );
};
