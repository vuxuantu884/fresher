import { enumBreakPoint } from "constant";
import { useWindowDimensions } from "utils";

interface IProps {
  mobile: React.ReactNode;
  web: React.ReactNode;
}

export const ComponentSwitch = (props: IProps) => {
  //page props
  const { mobile, web } = props;
  //page hooks
  const { width } = useWindowDimensions();

  return <> {width > enumBreakPoint.md ? web : mobile} </>;
};
