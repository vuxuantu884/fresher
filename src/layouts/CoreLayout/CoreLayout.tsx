import { ComponentSwitch } from "component";
import { CoreLayoutMobile, CoreLayoutWeb } from ".";

interface Props {
  children: React.ReactNode;
}

export const CoreLayout = ({ children }: Props) => {
  return (
    <>
      <ComponentSwitch
        web={<CoreLayoutWeb>{children}</CoreLayoutWeb>}
        mobile={<CoreLayoutMobile>{children}</CoreLayoutMobile>}
      />
    </>
  );
};
