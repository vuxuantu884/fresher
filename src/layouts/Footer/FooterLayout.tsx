import { ComponentSwitch } from "component";
import { FooterLayoutMobile, FooterLayoutWeb } from ".";

export const FooterLayout = () => {
  return (
    <>
      <ComponentSwitch
        web={<FooterLayoutWeb />}
        mobile={<FooterLayoutMobile />}
      />
    </>
  );
};
