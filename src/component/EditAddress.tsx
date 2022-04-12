import { useTranslation } from "next-i18next";
import resolveConfig from "tailwindcss/resolveConfig";
import React, { Fragment, useState } from "react";
import Form, { Field } from "@atlaskit/form";
import TextArea from "@atlaskit/textarea";

import {
  IConArrowLeft,
  ShareInput,
  IConSquare,
  IConArrowRight,
  ComponentProvince,
} from ".";
import tailwindConfig from "../../tailwind.config";
import { validate, validateEmail } from "utils";
import { useSelector } from "react-redux";
import { selectProvince } from "store";

const fullConfig: any = resolveConfig(tailwindConfig);

interface IProps {
  handleToggleEditAddress: () => void;
}

export const ComponentEditAddress = (props: IProps) => {
  //page props
  const { handleToggleEditAddress } = props;
  //page hooks
  const { t } = useTranslation();
  //page state
  const [checkBox, setCheckBox] = useState<boolean>(true);
  const [provinceState, setProvince] = useState<boolean>(false);
  //redux state
  const { province, district, ward } = useSelector(selectProvince);

  const handleToggleCheckBox = () => {
    setCheckBox(!checkBox);
  };

  const handleChangeProvince = () => {
    setProvince(!provinceState);
  };

  const handleSubmit = (formState: { command: string }) => {
    //
  };

  return (
    <>
      {provinceState ? (
        <ComponentProvince handleChangeProvince={handleChangeProvince} />
      ) : (
        <>
          {" "}
          <div className="p-4 flex">
            <IConArrowLeft
              color={fullConfig.theme.colors.primary}
              onClick={handleToggleEditAddress}
            />
            <div className="flex-1 text-center f-bold text-base">
              {t("editAddress")}
            </div>
          </div>
          <div className="p-4 bg-white border-t border-solid border-gray_4">
            <div className="f-bold text-base mb-4 text-primary">
              {t("contact")}
            </div>
            <Form onSubmit={handleSubmit}>
              {({ formProps, setFieldValue }) => (
                <form {...formProps} name="validation-example">
                  <div className="flex gap-x-4">
                    {/* name */}
                    <ShareInput
                      label={t("name")}
                      name="name"
                      validate={validate}
                      valueError={t("validate.required", {
                        variable: t("name"),
                      })}
                      setFieldValue={setFieldValue}
                      placeholder={t("enterName")}
                    />
                    {/* surname */}
                    <ShareInput
                      label={t("surname")}
                      name="surname"
                      validate={validate}
                      valueError={t("validate.required", {
                        variable: t("surname"),
                      })}
                      placeholder={t("enterLastName")}
                      setFieldValue={setFieldValue}
                    />
                  </div>
                  <ShareInput
                    label={t("telephone")}
                    name="telephone"
                    validate={validateEmail}
                    valueError={t("validate.email")}
                    placeholder={t("enterSDT")}
                    setFieldValue={setFieldValue}
                  />
                  <div className="f-bold text-base my-4 text-primary font-semibold">
                    {t("address")}
                  </div>
                  <ShareInput
                    label={t("area")}
                    name="area"
                    validate={validateEmail}
                    setFieldValue={setFieldValue}
                    placeholder={t("selectRegion")}
                    isDisabled
                    elemAfterInput={<IConArrowRight className="mr-2" />}
                    className="cursor-pointer"
                    onClick={handleChangeProvince}
                    value={
                      (province || district || ward) &&
                      `${province?.name} ${
                        (district?.name || "") && ", " + district?.name
                      } ${(ward?.name || "") && ", " + ward?.name}`
                    }
                  />
                  <Field label={t("detailedAddress")} name="example-text">
                    {({ fieldProps }: any) => (
                      <Fragment>
                        <TextArea
                          placeholder={t("enterDetailedAddress")}
                          minimumRows={4}
                          {...fieldProps}
                        />
                      </Fragment>
                    )}
                  </Field>
                  <div className="flex mt-4">
                    <div className="f-bold font-semibold">
                      {t("setAsDefaultAddress")}
                    </div>
                    <div
                      className={`p-1 w-[44px] rounded-full ${
                        checkBox ? "bg-[#029B11]" : "bg-gray_4 flex justify-end"
                      } ml-2 cursor-pointer`}
                      onClick={handleToggleCheckBox}
                    >
                      <IConSquare />
                    </div>
                  </div>
                  <button type="submit" className="btn btn-sub-full  mt-6">
                    {t("update")}
                  </button>
                  <button
                    type="submit"
                    className="btn btn-address-full text-primary mt-4"
                  >
                    {t("deleteAddress")}
                  </button>
                </form>
              )}
            </Form>
          </div>
        </>
      )}
    </>
  );
};
