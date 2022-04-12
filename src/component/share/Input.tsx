import { ErrorMessage, Field } from "@atlaskit/form";
import { Meta } from "@atlaskit/form/dist/types/field";
import Textfield from "@atlaskit/textfield";
import { ReactNode } from "react";
interface IProps {
  name: string;
  label?: string;
  validate?: (
    value: string | undefined,
    formState?: Object,
    fieldState?: Meta
  ) => void;
  type?: string | undefined;
  elemAfterInput?: ReactNode;
  elemBeforeInput?: ReactNode;
  valueError?: string;
  middleware?: (error?: string) => void;
  onChange?: () => void;
  onClick?: () => void;
  setFieldValue?: (name: string, value: any) => void;
  defaultValue?: string;
  isDisabled?: boolean;
  placeholder?: string;
  className?: string;
  value?: string;
}

export const ShareInput = (props: IProps) => {
  //page state
  const {
    name,
    label,
    validate,
    type = "text",
    elemAfterInput,
    valueError,
    middleware,
    onChange,
    setFieldValue,
    defaultValue,
    isDisabled,
    placeholder,
    className,
    elemBeforeInput,
    value,
    onClick,
  } = props;

  return (
    <Field
      name={name}
      label={label}
      validate={validate}
      defaultValue={defaultValue}
      isDisabled={isDisabled}
    >
      {({ fieldProps, error }) => {
        middleware && middleware(error);
        return (
          <div onClick={onClick}>
            <Textfield
              {...fieldProps}
              type={type}
              elemAfterInput={elemAfterInput}
              elemBeforeInput={elemBeforeInput}
              onChange={(e) => {
                //@ts-ignore
                setFieldValue(name, (e.target as HTMLInputElement).value || "");
                onChange && onChange();
              }}
              placeholder={placeholder}
              className={className}
              value={value}
            />
            {error && valueError && <ErrorMessage>{valueError}</ErrorMessage>}
          </div>
        );
      }}
    </Field>
  );
};
