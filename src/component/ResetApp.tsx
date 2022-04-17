import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetApp } from "store";

export const ComponentResetApp = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetApp());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <></>;
};
