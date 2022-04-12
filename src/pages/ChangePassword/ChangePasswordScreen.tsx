import Form, { ErrorMessage, Field } from "@atlaskit/form";
import Textfield from "@atlaskit/textfield";
import { DatePicker } from "@atlaskit/datetime-picker";
import { useTranslation } from "next-i18next";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { useState } from "react";

import { enumPassword, enumValidate } from "constant";
import { HeaderLayout } from "layouts";
import { validate, validatePassword } from "utils";
import { ShareInput } from "component";

interface IPassword {
  currentPassword: boolean;
  newPassword: boolean;
  enterNewPassword: boolean;
  confirmPasswordNotMatch: boolean;
}

const ChangePasswordScreen = () => {
  //page hooks
  const { t } = useTranslation();
  //page state
  const [showPassword, setShowPassword] = useState<IPassword>({
    currentPassword: false,
    newPassword: false,
    enterNewPassword: false,
    confirmPasswordNotMatch: false,
  });

  const handleChangShowPassword = (type: enumPassword) => {
    switch (type) {
      case enumPassword.CURRENT_PASSWORD:
        setShowPassword({
          ...showPassword,
          currentPassword: !showPassword.currentPassword,
        });
        break;
      case enumPassword.NEW_PASSWORD:
        setShowPassword({
          ...showPassword,
          newPassword: !showPassword.newPassword,
        });
        break;
      case enumPassword.ENTER_PASSWORD_PASSWORD:
        setShowPassword({
          ...showPassword,
          enterNewPassword: !showPassword.enterNewPassword,
        });
        break;
    }
  };

  const handleSubmit = (formState: any) => {
    const { newPassword, enterNewPassword } = formState;
    if (newPassword !== enterNewPassword) {
      setShowPassword({
        ...showPassword,
        confirmPasswordNotMatch: true,
      });
      return;
    }
  };

  return (
    <>
      <HeaderLayout />
      <div className="p-4 bg-white">
        <div className="f-bold text-base mb-3">{t("changePassword")}</div>
        <Form onSubmit={handleSubmit}>
          {({ formProps, setFieldValue }) => {
            return (
              <form {...formProps} name="validation">
                <ShareInput
                  name="currentPassword"
                  label={t("currentPassword")}
                  validate={validatePassword}
                  type={showPassword.currentPassword ? "password" : "text"}
                  elemAfterInput={
                    <ElemAfterInput
                      onClick={() => {
                        handleChangShowPassword(enumPassword.CURRENT_PASSWORD);
                      }}
                      type={showPassword.currentPassword}
                    />
                  }
                  setFieldValue={setFieldValue}
                  placeholder={t("enterPassword")}
                />

                <ShareInput
                  name="newPassword"
                  label={t("newPassword")}
                  validate={validatePassword}
                  type={showPassword.newPassword ? "password" : "text"}
                  elemAfterInput={
                    <ElemAfterInput
                      onClick={() => {
                        handleChangShowPassword(enumPassword.NEW_PASSWORD);
                      }}
                      type={showPassword.newPassword}
                    />
                  }
                  setFieldValue={setFieldValue}
                  placeholder={t("enterANewPassword")}
                />
                <ShareInput
                  name="enterNewPassword"
                  label={t("enterNewPassword")}
                  validate={validatePassword}
                  type={showPassword.enterNewPassword ? "password" : "text"}
                  elemAfterInput={
                    <ElemAfterInput
                      onClick={() => {
                        handleChangShowPassword(
                          enumPassword.ENTER_PASSWORD_PASSWORD
                        );
                      }}
                      type={showPassword.enterNewPassword}
                    />
                  }
                  setFieldValue={setFieldValue}
                  onChange={() => {
                    setShowPassword({
                      ...showPassword,
                      confirmPasswordNotMatch: false,
                    });
                  }}
                  placeholder={t("enterNewPassword")}
                />
                {showPassword.confirmPasswordNotMatch && (
                  <ErrorMessage>{t("validate.passowrdNotMatch")}</ErrorMessage>
                )}
                <div className="f-normal text-gray_2 text-xs mt-3">
                  {t("passwordDes")}
                </div>
                <button type="submit" className="btn btn-sub-full  mt-6">
                  {t("update")}
                </button>
              </form>
            );
          }}
        </Form>
      </div>
    </>
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

export default ChangePasswordScreen;
