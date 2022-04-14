/* eslint-disable @next/next/no-img-element */
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";

import { setToggleSelectTheQuestionProblem } from "store";
import { useOnClickOutside } from "utils";
import { IConClose, IConHearFull, IConHearEmpty } from ".";

export const ComponentPopUpCoupon = () => {
  //page ref
  const ref = useRef<HTMLDivElement>(null);
  //page hooks
  const dispatch = useDispatch();
  //page state
  const [result, setResult] = useState<boolean>(false);

  const handleToggleResult = () => {
    setResult(!result);
  };

  const handleCloseSelectTheQuestionProblem = () => {
    dispatch(setToggleSelectTheQuestionProblem());
  };

  useOnClickOutside(ref, handleCloseSelectTheQuestionProblem);

  return (
    <div className="bg-popup flex justify-center z-20">
      <div
        className="py-4 bg-white w-[90%] h-fit absolute top-[40vh] -translate-y-2/4 rounded"
        ref={ref}
      >
        <div className="absolute top-3 right-3">
          <IConClose onClick={handleCloseSelectTheQuestionProblem} />
        </div>
        {!result ? (
          <>
            <div className="f-bold text-center mb-4">
              Chọn một danh mục yêu cầu
            </div>
            <div className="px-3">
              <button
                className="btn btn-sub-primary mb-3"
                onClick={handleToggleResult}
              >
                Về kích thước
              </button>
              <button
                className="btn btn-sub-primary mb-3"
                onClick={handleToggleResult}
              >
                Về chất liệu
              </button>
              <button
                className="btn btn-sub-primary mb-3"
                onClick={handleToggleResult}
              >
                Về âm thanh
              </button>
              <button
                className="btn btn-sub-primary"
                onClick={handleToggleResult}
              >
                Về các sản phẩm khác
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="f-bold text-base pl-4">
              Thêm sản phẩm vào yêu thích
            </div>
            <div className="p-4">
              <div className="flex">
                <img
                  src="/images/product/coupon.png"
                  alt=""
                  className="aspect-square object-cover"
                />
                <div className="p-3">
                  <div className="f-bold font-semibold text-black mb-1">
                    Sub Title
                  </div>
                  <div className="f-normal text-xs text-gray_1 mb-3">
                    Lorem Ipsum Lorem Ipsum
                  </div>
                  <div className="f-bold text-primary">200.000 đ</div>
                </div>
              </div>
              <div className="py-3 flex justify-between border-b border-solid border-gray_4 items-center">
                <div>
                  <div className="f-normal text-xs font-semibold mb-1">
                    22.0
                  </div>
                  <div className="f-normal text-xs text-gray_1">Còn ít</div>
                </div>
                <IConHearFull />
              </div>
              <div className="py-3 flex justify-between border-b border-solid border-gray_4 items-center">
                <div>
                  <div className="f-normal text-xs font-semibold mb-1">
                    22.0
                  </div>
                  <div className="f-normal text-xs text-gray_1">Còn ít</div>
                </div>
                <IConHearFull />
              </div>
              <div className="py-3 flex justify-between border-b border-solid border-gray_4 items-center">
                <div>
                  <div className="f-normal text-xs font-semibold mb-1">
                    22.0
                  </div>
                  <div className="f-normal text-xs text-gray_1">Còn ít</div>
                </div>
                <IConHearFull />
              </div>
              <div className="py-3 flex justify-between border-b border-solid border-gray_4 items-center">
                <div>
                  <div className="f-normal text-xs font-semibold mb-1">
                    22.0
                  </div>
                  <div className="f-normal text-xs text-gray_1">Còn ít</div>
                </div>
                <IConHearEmpty />
              </div>
              <div className="py-3 flex justify-between border-b border-solid border-gray_4 items-center">
                <div>
                  <div className="f-normal text-xs font-semibold mb-1">
                    22.0
                  </div>
                  <div className="f-normal text-xs text-gray_1">Còn ít</div>
                </div>
                <IConHearEmpty />
              </div>
              <div className="py-3 flex justify-between border-b border-solid border-gray_4 items-center">
                <div>
                  <div className="f-normal text-xs font-semibold mb-1">
                    22.0
                  </div>
                  <div className="f-normal text-xs text-gray_1">Còn ít</div>
                </div>
                <IConHearFull />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
