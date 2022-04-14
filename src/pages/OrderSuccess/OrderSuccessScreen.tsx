/* eslint-disable @next/next/no-img-element */
import { useTranslation } from "next-i18next";
import { Fragment } from "react";
import Form, { ErrorMessage, Field, ValidMessage } from "@atlaskit/form";

import TextArea from "@atlaskit/textarea";

import { IConEdit, IConInformationSub } from "component";

const OrderSuccessScreen = () => {
  //page hooks
  const { t } = useTranslation();

  const handleSubmit = () => {
    //
  };
  return (
    <>
      <div className="center bg-white p-4 flex-col">
        <img src="/images/paymentSuccess.png" alt="" />
        <div className="f-normal font-medium mt-3">
          2 mặt hàng đã được đặt thành công
        </div>
      </div>
      <div className="mt-4 p-4 bg-white">
        <div className="flex items-center mb-3">
          <IConInformationSub className="mr-2" />
          <span>{t("informationLine")}</span>
        </div>
        <div className="p-4 bg-gray_3 rounded">
          <div className="mb-1">
            <span className="f-normal">{t("product'sName")}</span>:
            <span className="f-bold font-semibold inline-block ml-1">
              Áo Thun
            </span>
          </div>
          <div className="mb-1">
            <span className="f-normal">{t("deliveryTime")}</span>:
            <span className="f-bold font-semibold inline-block ml-1">
              30/03/2022
            </span>
          </div>
          <div className="">
            <span className="f-normal">{t("paymentMethods")}</span>:
            <span className="f-bold font-semibold inline-block ml-1">
              thanh toán trực tuyến
            </span>
          </div>
        </div>
        <div className="flex items-center my-3">
          <IConEdit className="mr-2" />
          <span>{t("note")}</span>
        </div>
        <Form onSubmit={handleSubmit}>
          {({ formProps }) => (
            <form {...formProps} name="textArea-example">
              <Field isRequired name="command" defaultValue="">
                {({ fieldProps, error, meta: { valid } }: any) => (
                  <Fragment>
                    <TextArea {...fieldProps} rows={4} maxHeight={100} />
                  </Fragment>
                )}
              </Field>
              <button className="btn btn-primary-full mt-10">
                Mã đơn hàng: 20220401_028661
              </button>
            </form>
          )}
        </Form>
      </div>
    </>
  );
};

export default OrderSuccessScreen;
