/* eslint-disable @next/next/no-img-element */
import { HeaderTitle } from ".";

export const HeaderLayoutWeb = () => {
  return (
    <>
      <div className="">
        <div className="flex w-full">
          <div className="w-1/2">
            <img
              className="object-cover w-full"
              src="./images/headerWeb/Rectangle 1.png"
              alt=""
            />
          </div>
          <div className="w-1/2">
            <img
              className="object-cover w-full"
              src="./images/headerWeb/Rectangle 2.png"
              alt=""
            />
          </div>
        </div>
        <HeaderTitle />
        <div className="flex w-full">
          <div className="w-1/2">
            <img
              className="object-cover w-full"
              src="./images/headerWeb/Rectangle 3.png"
              alt=""
            />
          </div>
          <div className="w-1/2">
            <img
              className="object-cover w-full"
              src="./images/headerWeb/Rectangle 4.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};
