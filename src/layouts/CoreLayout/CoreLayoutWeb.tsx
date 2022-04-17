interface Props {
  children: React.ReactNode;
}

export const CoreLayoutWeb = ({ children }: Props) => {
  return <main>{children}</main>;
};
