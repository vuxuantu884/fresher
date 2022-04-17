import { enumBreakPoint } from "constant";
import { useWindowDimensions } from "utils";
import { MainLayoutWeb, MainLayoutMobile } from ".";

interface Props {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: Props) => {
  //page hooks
  const { width } = useWindowDimensions();

  return (
    <>
      {width > enumBreakPoint.md ? (
        <MainLayoutWeb>{children}</MainLayoutWeb>
      ) : (
        <MainLayoutMobile>{children}</MainLayoutMobile>
      )}
    </>
  );
};
