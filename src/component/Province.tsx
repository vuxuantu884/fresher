import { useTranslation } from "next-i18next";
import resolveConfig from "tailwindcss/resolveConfig";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { IConArrowLeft, IConSquare, ShareInput, IConSquareDouble } from ".";
import tailwindConfig from "../../tailwind.config";
import styles from "styles/customAtlaskit.module.scss";
import { IDistricts, IProvince, IWards } from "types";
import { enumAddressType } from "constant";
import {
  resetProvince,
  selectProvince,
  setDistrict,
  setProvince,
  setWard,
} from "store";

const provinceJson = require("utils/nested-divisions.json").sort(
  (a: IProvince, b: IProvince) => {
    return a.name.localeCompare(b.name);
  }
) as IProvince[];
const fullConfig: any = resolveConfig(tailwindConfig);

interface IProps {
  handleChangeProvince: () => void;
}

export const ComponentProvince = (props: IProps) => {
  //page props
  const { handleChangeProvince } = props;
  //page hooks
  const { t } = useTranslation();
  const dispatch = useDispatch();
  //redux state
  const { province, district, ward } = useSelector(selectProvince);
  //page state
  const [districts, setDistricts] = useState<Array<IDistricts>>([]);
  const [wards, setWards] = useState<Array<IWards>>([]);
  const [addressType, setAddressType] = useState<enumAddressType | null>(
    district
      ? enumAddressType.WARDS
      : province
      ? enumAddressType.DISTRICTS
      : enumAddressType.PROVINCE
  );

  useEffect(() => {
    if (addressType === enumAddressType.DISTRICTS && province) {
      const index = provinceJson.findIndex(
        (data) => data.code === province?.code
      );
      if (index >= 0) {
        setDistricts(provinceJson[index].districts);
      }
    }
    if (addressType === enumAddressType.WARDS && district) {
      const indexDistricts = provinceJson.findIndex(
        (data) => data.code === province?.code
      );
      const index = provinceJson[indexDistricts].districts.findIndex(
        (data) => data.code === district.code
      );
      if (index >= 0) {
        //@ts-ignore
        setWards(provinceJson[indexDistricts].districts[index].wards);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleProvince = (value: IProvince) => {
    const index = provinceJson.findIndex((data) => data.code === value.code);
    if (index >= 0) {
      setDistricts(provinceJson[index].districts);
      setAddressType(enumAddressType.DISTRICTS);
      dispatch(setProvince(provinceJson[index]));
    }
  };

  const handleDistricts = (value: IDistricts) => {
    const index = districts.findIndex((data) => data.code === value.code);
    if (index >= 0) {
      setWards(districts[index].wards);
      setAddressType(enumAddressType.WARDS);
      dispatch(setDistrict(districts[index]));
    }
  };

  const handleWard = (value: IWards) => {
    const index = wards.findIndex((data) => data.code === value.code);
    if (index >= 0) {
      setAddressType(null);
      dispatch(setWard(wards[index]));
    }
  };

  const handleSelectAddress = (value: enumAddressType) => {
    setAddressType(value);
    switch (value) {
      case enumAddressType.PROVINCE:
        dispatch(setDistrict(undefined));
        dispatch(setWard(undefined));
        break;
      case enumAddressType.DISTRICTS:
        dispatch(setWard(undefined));
        break;

      default:
        <></>;
    }
  };

  const handleResetAddress = () => {
    dispatch(resetProvince());
    setAddressType(enumAddressType.PROVINCE);
  };

  const render = () => {
    switch (addressType) {
      case enumAddressType.PROVINCE:
        return provinceJson.map((province, index) => {
          return (
            <div
              className="flex pl-4 cursor-pointer"
              key={index}
              onClick={() => {
                handleProvince(province);
              }}
            >
              {/* <div className="py-3 mr-5 f-normal text-gray_2">
              {!province.name.includes("Thành phố") && "A"}
            </div> */}
              <div className="py-3 h-full flex-1 border-y border-solid border-gray_4 f-normal">
                {province.name}
              </div>
            </div>
          );
        });
      case enumAddressType.DISTRICTS:
        return districts.map((district, index) => {
          return (
            <div
              className="flex pl-4 cursor-pointer"
              key={index}
              onClick={() => {
                handleDistricts(district);
              }}
            >
              {/* <div className="py-3 mr-5 f-normal text-gray_2">
                {!province.name.includes("Thành phố") && "A"}
              </div> */}
              <div className="py-3 h-full flex-1 border-y border-solid border-gray_4 f-normal">
                {district.name}
              </div>
            </div>
          );
        });
      case enumAddressType.WARDS:
        return wards.map((wards, index) => {
          return (
            <div
              className="flex pl-4 cursor-pointer"
              key={index}
              onClick={() => {
                handleWard(wards);
              }}
            >
              {/* <div className="py-3 mr-5 f-normal text-gray_2">
                  {!province.name.includes("Thành phố") && "A"}
                </div> */}
              <div className="py-3 h-full flex-1 border-y border-solid border-gray_4 f-normal">
                {wards.name}
              </div>
            </div>
          );
        });
      default:
        <></>;
    }
  };

  return (
    <>
      {" "}
      <div className="p-4 flex">
        <IConArrowLeft
          color={fullConfig.theme.colors.primary}
          onClick={handleChangeProvince}
        />
        <div className="flex-1 text-center f-bold text-base">
          {t("selectRegion")}
        </div>
      </div>
      <div className="p-4 bg-white">
        <div className="flex justify-between mb-4">
          <div className="f-normal">{t("selectedArea")}</div>
          <div
            className="f-normal text-primary cursor-pointer"
            onClick={handleResetAddress}
          >
            {t("reset")}
          </div>
        </div>
        <div className="ml-3">
          {/* thanh pho */}
          {province && (
            <div className="flex items-center relative before:content-[''] before:w-[1px] before:h-[16px] before:bg-gray_4 before:-bottom-2 before:left-[3.3px] before:absolute before:-translate-x-[60%]">
              <IConSquare
                width={6.6}
                height={6.6}
                color={fullConfig.theme.colors.gray_3}
              />
              <span
                className="inline-block ml-2 cursor-pointer"
                onClick={() => {
                  handleSelectAddress(enumAddressType.PROVINCE);
                }}
              >
                {province.name}
              </span>
            </div>
          )}
          {district && (
            <div className="flex items-center relative mt-0.5 before:content-[''] before:w-[1px] before:h-[16px] before:bg-gray_4 before:-bottom-2 before:left-[3.3px] before:absolute before:-translate-x-[60%]">
              <IConSquare
                width={6.6}
                height={6.6}
                color={fullConfig.theme.colors.gray_3}
              />
              <span
                className="inline-block ml-2 cursor-pointer"
                onClick={() => {
                  handleSelectAddress(enumAddressType.DISTRICTS);
                }}
              >
                {district.name}
              </span>
            </div>
          )}
          {ward && (
            <div className="flex items-center relative mt-0.5 before:content-[''] ">
              <IConSquare
                width={6.6}
                height={6.6}
                color={fullConfig.theme.colors.gray_3}
              />
              <span
                className="inline-block ml-2 cursor-pointer"
                onClick={() => {
                  handleSelectAddress(enumAddressType.WARDS);
                }}
              >
                {ward.name}
              </span>
            </div>
          )}
        </div>
        {addressType && !(ward && province && district) && (
          <ShareInput
            name="province"
            isDisabled
            className={`cursor-pointer ${styles.customeInut}`}
            elemBeforeInput={<IConSquareDouble className="ml-3" />}
            value={addressType}
          />
        )}
      </div>
      {(!(ward && province && district) || addressType) && (
        <>
          <div className="layout-primary f-normal text-gray_1">
            {addressType}
          </div>
          <div className="bg-white">{render()}</div>
        </>
      )}
    </>
  );
};
