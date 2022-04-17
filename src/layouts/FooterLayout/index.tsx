import { enumBreakPoint } from "constant";
import { useWindowDimensions } from "utils";
import { FooterLayoutWeb } from "./FooterLayoutWeb";

export const FooterLayout = () => {
  const { width } = useWindowDimensions();
  return (
    <>{width > enumBreakPoint.md ? <FooterLayoutWeb /> : <FooterLayout />}</>
  );
};
