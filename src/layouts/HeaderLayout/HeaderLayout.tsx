import { ComponentSwitch } from "component";
import { HeaderLayoutMobile, HeaderLayoutWeb } from ".";

export const HeaderLayout = () => {
  return (
    <>
      <ComponentSwitch
        web={<HeaderLayoutWeb />}
        mobile={<HeaderLayoutMobile />}
      />
    </>
  );
};
