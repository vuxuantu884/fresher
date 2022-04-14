import { useTranslation } from "next-i18next";
import React, { Fragment } from "react";
import Form, { ErrorMessage, Field } from "@atlaskit/form";
import Textfield from "@atlaskit/textfield";
import { OptionsPropType } from "@atlaskit/radio/dist/types/types";
import { RadioGroup } from "@atlaskit/radio";
import { DatePicker } from "@atlaskit/datetime-picker";
import Link from "next/link";

import { HeaderTitle } from "layouts/HeaderLayout/Title";
import { HeaderMenu } from "layouts/HeaderLayout/Menu";
import styles from "styles/customAtlaskit.module.scss";
import { validate, validateEmail } from "utils";
import { enumValidate, PATH_CHANGE_PASSWORD } from "constant";
import { ShareInput } from "component";

const PersonalInformationScreen = () => {
  //page hooks
  const { t } = useTranslation();

  //page variable
  const options: OptionsPropType = [
    {
      name: "radio-group",
      value: "male",
      label: t("male"),
    },
    {
      name: "radio-group",
      value: "female",
      label: t("female"),
    },
  ];

  const handleSubmit = (formState: { command: string }) => {
    //
    console.log(formState);
  };

  return (
    <>
      <HeaderTitle />
      <HeaderMenu />
      <div className="p-4 bg-white border-t border-solid border-gray_4">
        <div className="f-bold text-base mb-4">
          {t("info.customerInformation")}
        </div>
        <Form onSubmit={handleSubmit}>
          {({ formProps, setFieldValue }) => (
            <form
              {...formProps}
              name="validation-example"
              className={styles.customAtlaskit}
            >
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
                  setFieldValue={setFieldValue}
                  placeholder={t("enterLastName")}
                />
              </div>
              <ShareInput
                label={t("mail")}
                name="mail"
                validate={validateEmail}
                valueError={t("validate.email")}
                setFieldValue={setFieldValue}
                placeholder={t("enterEmail")}
              />
              {/* radio */}
              <Field name="radio-group" defaultValue="male" label={t("sex")}>
                {({ fieldProps }) => (
                  <Fragment>
                    <RadioGroup {...fieldProps} options={options} />
                  </Fragment>
                )}
              </Field>
              <Field
                name="datetime-picker"
                label={t("dateOfBirth")}
                validate={validate}
                defaultValue=""
              >
                {({ fieldProps, error }) => (
                  <>
                    <DatePicker {...fieldProps} />
                    {error === enumValidate.REQUIRED && (
                      <ErrorMessage>
                        {t("validate.required", {
                          variable: t("dateOfBirth"),
                        })}
                      </ErrorMessage>
                    )}
                  </>
                )}
              </Field>
              <button type="submit" className="btn btn-sub-full  mt-6">
                {t("update")}
              </button>
              <Link href={PATH_CHANGE_PASSWORD} passHref>
                <button className="btn btn-sub-primary  mt-3">
                  {t("changePassword")}
                </button>
              </Link>
            </form>
          )}
        </Form>
      </div>
    </>
  );
};

export default PersonalInformationScreen;
