import { useTranslation } from "next-i18next";
import resolveConfig from "tailwindcss/resolveConfig";
import Form, { Field } from "@atlaskit/form";
import {
  DatePicker,
  DateTimePicker,
  TimePicker,
} from "@atlaskit/datetime-picker";
import { RadioGroup } from "@atlaskit/radio";
import { Fragment } from "react";
import { OptionsPropType } from "@atlaskit/radio/dist/types/types";
import { Checkbox } from "@atlaskit/checkbox";
import Link from "next/link";
import { useRouter } from "next/router";

import {
  ComponentProductCard,
  IConArrowDownVector,
  IConArrowLeft,
  IConClock,
  IConCoupon,
  IConMap,
  IConSquareDouble,
  IConTickFull,
  IConTruck,
} from "component";
import tailwindConfig from "../../../tailwind.config";
import styles from "styles/customAtlaskit.module.scss";
import { IConCreditCard } from "component/icon/CreditCard";
import { PATH_ORDER_SUCCESS } from "constant";

const fullConfig: any = resolveConfig(tailwindConfig);
const options: OptionsPropType = [
  { name: "color", value: "visa", label: "Thanh toán bằng visa" },
  { name: "color", value: "card", label: "Thanh toán bằng thẻ" },
];

const PaymentScreen = () => {
  //page hooks
  const { t } = useTranslation();
  const route = useRouter();

  const handleBack = () => {
    route.back();
  };

  return (
    <>
      <div className="flex items-center layout-primary bg-white">
        <IConArrowLeft
          color={fullConfig.theme.colors.primary}
          onClick={handleBack}
        />
        <div className="f-bold text-center ml-2">{t("orderConfirmation")}</div>
      </div>
      {/* information paymrnt */}
      <div className="p-4 bg-[#FEF1F4]">
        <div className="flex mb-3">
          <IConCoupon />
          <span className="inline-block ml-1 f-normal">
            Sản phẩm này được giảm giá bằng phiếu giảm giá Sử dụng cupon
          </span>
        </div>
        <div className="p-2 bg-white flex mb-3">
          <IConTickFull className="mt-[3px]" />
          <div className="ml-1.5">
            <p className="f-bold text-base mb-0">25 % OFF</p>
            <p className="f-normal text-xs text-gray_1 mb-0">
              Lorem Ipsum Lorem Ipsum
            </p>
          </div>
        </div>
        <div className="f-normal text-gray_1">{t("usePointsAvailable")}</div>
      </div>
      {/* address payment */}
      <div className="p-4 bg-white">
        <div className="p-3 w-full border border-dashed rounded border-primary">
          <div className="flex">
            <IConMap className="mt-[3px] mr-1.5" />
            <span className="f-normal text-black font-medium">
              Số 17, ngõ 89, phạm Văn đồng, p. Khâm Thiên, Q. Bắc Từ Liêm
            </span>
          </div>
          <div className="flex justify-end">
            <button className="p-2 bg-[#ECEFF0] flex rounded items-center">
              <span className="f-normal font-medium text-primary inline-block mr-2">
                {t("change")}
              </span>
              <IConArrowDownVector />
            </button>
          </div>
          <div className="f-normal font-medium text-gray_1 flex justify-between py-3 border-b border-dashed rounded border-gray_3">
            <span>{t("totalAmount")}</span>
            <span>2.217.000 đ</span>
          </div>
          <div className="f-normal font-medium text-gray_1 flex justify-between py-3 border-b border-dashed rounded border-gray_3">
            <span>{t("earnPoints")}</span>
            <span>-100.000 đ</span>
          </div>
          <div className="f-normal font-medium text-gray_1 flex justify-between py-3 border-b border-dashed rounded border-gray_3">
            <span>{t("discountCode")}</span>
            <span>-117.000 đ</span>
          </div>
          <div className="f-normal font-medium text-gray_1 flex justify-between pt-3">
            <span>{t("totalPay")}</span>
            <span className="f-bold text-base text-primary">2.000.000 đ</span>
          </div>
        </div>
      </div>
      {/* Chọn ngày và giờ */}
      <div className="mt-4 p-4 bg-white">
        <div className="flex items-center mb-4">
          <IConClock className="mr-2" />
          <span className="f-normal">{t("selectDateAndTime")}</span>
        </div>
        <Form
          onSubmit={() => {
            //
          }}
        >
          {({ formProps }) => (
            <form {...formProps} className={styles.customForm}>
              <Field name="time-picker" label={t("hour")} isRequired={false}>
                {({ fieldProps }) => (
                  <>
                    <TimePicker {...fieldProps} />
                  </>
                )}
              </Field>
              <Field name="date-picker" label={t("day")} isRequired={false}>
                {({ fieldProps }) => (
                  <>
                    <DatePicker {...fieldProps} />
                  </>
                )}
              </Field>
            </form>
          )}
        </Form>
      </div>
      {/* Chọn đơn vị vận chuyển */}
      <div className="mt-4 p-4 bg-white">
        <div className="flex items-center mb-2">
          <IConTruck className="mr-2" />
          <span className="f-normal">{t("chooseShippingUnit")}</span>
        </div>
        <div className="flex items-center mb-4">
          <IConSquareDouble className="mr-2" width={18} height={18} />
          <span className="f-normal">{t("fastDelivery")}: 2022/04/01</span>
        </div>
        <div className="p-3 rounded bg-[#E0E0E0]">
          <Form
            onSubmit={() => {
              //
            }}
          >
            {({ formProps }) => (
              <form {...formProps} className={styles.customForm2}>
                <Field
                  name="datetime-picker"
                  label={t("chooseTime")}
                  isRequired={false}
                >
                  {({ fieldProps }) => (
                    <>
                      <DateTimePicker {...fieldProps} />
                    </>
                  )}
                </Field>
              </form>
            )}
          </Form>
        </div>
      </div>
      {/* Chọn phương thức thanh toán */}
      <div className="mt-4 p-4 bg-white">
        <div className="flex items-center mb-4">
          <IConCreditCard className="mr-2" />
          <span className="f-normal font-semibold">
            {t("selectPaymentMethod")}
          </span>
        </div>
        <Form
          onSubmit={() => {
            //
          }}
        >
          {({ formProps }) => (
            <form {...formProps} className={styles.custom3}>
              <Field name="radio-group" defaultValue="changeAddress">
                {({ fieldProps }) => (
                  <Fragment>
                    <RadioGroup {...fieldProps} options={options} />
                  </Fragment>
                )}
              </Field>
              <Checkbox
                label="Chọn cho lần thanh toán sau"
                name="checkbox-default"
                testId="cb-default"
              />
            </form>
          )}
        </Form>
      </div>
      <div className="mt-4 p-4 bg-white">
        <div className="flex items-center mb-4">
          <span className="f-normal font-semibold">{t("informationLine")}</span>
        </div>
        <div className="pb-4 border-b border-solid border_gray_3">
          <ComponentProductCard />
        </div>
        <div className="py-4">
          <ComponentProductCard />
        </div>
      </div>
      <div className="center bg-white p-4 pt-0">
        <Link href={PATH_ORDER_SUCCESS} passHref>
          <button className="btn btn-primary-full py-3  text-white f-bold bg-[#018D39]">
            {t("orderConfirmation")}
          </button>
        </Link>
      </div>
    </>
  );
};

export default PaymentScreen;
