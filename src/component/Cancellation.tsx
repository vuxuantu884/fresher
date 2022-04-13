import { useTranslation } from "next-i18next";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import React, { Fragment } from "react";
import Form, { Field } from "@atlaskit/form";
import { RadioGroup } from "@atlaskit/radio";
import { OptionsPropType } from "@atlaskit/radio/types";
import Button from "@atlaskit/button";
import Link from "next/link";

import { setTogglePopupCancellation } from "store";
import { useOnClickOutside } from "utils";
import { IConClose } from ".";
import { PATH_ORDER_CANCELED } from "constant";

interface FormData {
  [key: string]: string;
  "radio-group": string;
}

export const ComponentCancellation = () => {
  //page hooks
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const ref = useRef<HTMLDivElement>(null);

  const handleCloseCancellation = () => {
    dispatch(setTogglePopupCancellation());
  };

  //page variable
  const options: OptionsPropType = [
    { name: "radio-group", value: "changeAddress", label: t("changeAddress") },
    {
      name: "radio-group",
      value: "notRespondMessages",
      label: t("notRespondMessages"),
    },
    {
      name: "radio-group",
      value: "wantToBuyAnymore/Other",
      label: t("wantToBuyAnymore/Other"),
    },
  ];

  useOnClickOutside(ref, handleCloseCancellation);

  const handleSubmit = (data: FormData) => {
    //
  };

  return (
    <div className="bg-popup flex justify-center">
      <div
        className="py-4 bg-white w-[90%] h-fit absolute top-[30vh] -translate-y-2/4 rounded"
        ref={ref}
      >
        <div
          className="absolute top-3 right-3"
          onClick={handleCloseCancellation}
        >
          <IConClose />
        </div>
        <div className="f-bold text-center mb-4">
          {t("reasonForCancellation")}
        </div>
        {/* form */}
        <div className="px-3 f-normal">
          <Form<FormData> onSubmit={handleSubmit}>
            {({ formProps }) => (
              <form {...formProps}>
                <Field name="radio-group" defaultValue="changeAddress">
                  {({ fieldProps }) => (
                    <Fragment>
                      <RadioGroup {...fieldProps} options={options} />
                    </Fragment>
                  )}
                </Field>
                <Link href={PATH_ORDER_CANCELED} passHref>
                  <Button
                    type="submit"
                    className="btn btn-sub-full !h-[initial] mt-6"
                    onClick={handleCloseCancellation}
                  >
                    <span className="!text-white">{t("confirm")}</span>
                  </Button>
                </Link>
              </form>
            )}
          </Form>
        </div>
      </div>
    </div>
  );
};
