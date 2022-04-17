import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { DatePicker } from "@atlaskit/datetime-picker";
import Form, { ErrorMessage, Field } from "@atlaskit/form";
import { RadioGroup } from "@atlaskit/radio";
import { OptionsPropType } from "@atlaskit/radio/dist/types/types";
import { enumValidate } from "constant";
import { useTranslation } from "next-i18next";
import { Fragment, useState } from "react";

import styles from "styles/customAtlaskit.module.scss";
import { validate, validateEmail, validatePassword } from "utils";
import { IConTick, IConTickNotFull, ShareInput } from ".";

// interface IPassword {
//   password: boolean;
// }

export const ComponentRegister = () => {
  //page hooks
  const { t } = useTranslation();

  //page state
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [confirmPolicy, setConfirmPolicy] = useState<boolean>(false);

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

  const handleChangShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleConfirmPolicyClick = () => {
    setConfirmPolicy(!confirmPolicy);
  };

  const handleSubmit = (formState: { command: string }) => {
    //
    console.log(formState);
  };
  return (
    <div className="font-sans">
      <h5 className="text-4 font-bold my-3 ml-4">Đăng ký thành viên</h5>
      <div className="p-4 bg-white">
        <Form onSubmit={handleSubmit}>
          {({ formProps, setFieldValue }) => (
            <form
              {...formProps}
              name="validation-example"
              className={styles.customAtlaskit}
            >
              <div className="flex gap-x-4">
                {/* subname */}
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
              </div>
              {/* email */}
              <ShareInput
                label={t("mail")}
                name="mail"
                validate={validateEmail}
                valueError={t("validate.email")}
                setFieldValue={setFieldValue}
                placeholder={t("enterEmail")}
              />
              {/* password */}
              <ShareInput
                name="password"
                label={t("password")}
                validate={validatePassword}
                type={showPassword ? "text" : "password"}
                elemAfterInput={
                  <ElemAfterInput
                    onClick={() => {
                      handleChangShowPassword();
                    }}
                    type={showPassword}
                  />
                }
                setFieldValue={setFieldValue}
                placeholder={t("enterPassword")}
              />
              <div className="f-normal text-gray_2 text-xs mt-3">
                {t("passwordDes")}
              </div>
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
              <div
                className="mt-8 mb-4 flex items-center justify-center"
                onClick={handleConfirmPolicyClick}
              >
                {confirmPolicy ? <IConTick /> : <IConTickNotFull />}
                <span className="ml-2">{t("confirmPolicy")}</span>
              </div>
              <button
                disabled={!confirmPolicy}
                type="submit"
                className="btn btn-sub-full"
              >
                {t("register")}
              </button>
            </form>
          )}
        </Form>
      </div>
    </div>
  );
};

interface IPropsElemAfterInput {
  onClick: () => void;
  type: boolean;
}

const ElemAfterInput = (props: IPropsElemAfterInput) => {
  const { onClick, type } = props;
  return (
    <div
      className="cursor-pointer mr-3 text-base text-[#AAB0C7] relative -top-[3px]"
      onClick={onClick}
    >
      {type ? <EyeInvisibleOutlined /> : <EyeOutlined />}
    </div>
  );
};
