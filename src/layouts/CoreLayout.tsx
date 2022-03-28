import styles from "./styles/main.module.scss";

interface Props {
  children: React.ReactNode;
}

export const CoreLayout = ({ children }: Props) => {
  return (
    <div className="max-w-sm min-h-screen my-0 mx-auto bg-gray_4 relative">
      <main className={styles.main}>{children}</main>
    </div>
  );
};
