import { useTranslation } from "next-i18next";

export default function HomeSignUp() {
  const { t } = useTranslation();

  return (
    <div className="mt-4 bg-white px-4 pt-4 pb-3">
      <button className="btn btn-primary-full">{t("home.signUp")}</button>
      <div className="flex justify-center mt-3">
        <button className="btn btn-second">{t("home.signMember")}</button>
      </div>
    </div>
  );
}
