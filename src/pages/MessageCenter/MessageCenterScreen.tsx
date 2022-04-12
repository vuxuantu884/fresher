import { useTranslation } from "next-i18next";

import { ComponentInformation } from "component";

const MessageCenterScreen = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* Trung tâm tin nhắn */}
      <div className="border-solid border-t border-gray_4 p-4 bg-white">
        <div className="f-bold text-base mb-2">{t("messageCenter")}</div>
        <div className="f-normal">{t("noNewMessages")}</div>
      </div>
      {/* Lịch sử hội thoại */}
      <div className="layout-primary f-bold bg-gray_4">
        {t("conversationHistory")}
      </div>
      {/* Vấn đề  */}
      <div className="layout-primary pb-4 bg-white">
        {/* Vấn đề 1 */}
        <div className="w-full border-solid border-b border-gray_4 pb-3">
          <div className="flex justify-between mb-2">
            <span className="f-normal font-semibold">Vấn dề 1 </span>
            <span className="f-normal text-xs text-gray_2">31/03 16:31</span>
          </div>
          <div className="f-normal text-gray_2 font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus
            mauris sed lorem tristique odio id.
          </div>
        </div>
        {/* Vấn đề 2 */}
        <div className="w-full mt-3">
          <div className="flex justify-between mb-2">
            <span className="f-normal font-semibold">Vấn dề 1 </span>
            <span className="f-normal text-xs text-gray_2">31/03 16:31</span>
          </div>
          <div className="f-normal text-gray_2 font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus
            mauris sed lorem tristique odio id.
          </div>
        </div>
      </div>
      <ComponentInformation />
    </>
  );
};

export default MessageCenterScreen;
