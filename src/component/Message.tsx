import { useTranslation } from "next-i18next";
import Avatar from "@atlaskit/avatar";
import TextArea from "@atlaskit/textarea";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

import { IConArrowLeft, IConImageAdd, IConInformation, IConSend } from ".";
import styles from "styles/customAtlaskit.module.scss";

export const ComponentMessage = () => {
  //page state
  const [message, setMessage] = useState<string>();
  //page hooks
  const { t } = useTranslation();
  const route = useRouter();

  const ref = useRef();
  const refScroll = useRef<HTMLDivElement>(null);

  useEffect(() => {
    //@ts-ignore
    ref.current.style.height = "20px";
    //@ts-ignore
    refScroll.current?.scrollIntoView();
  }, [ref, refScroll]);

  const handleChangeMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length < 38) {
      //@ts-ignore
      ref.current.style.height = "20px";
    }
    setMessage(message);
  };

  const handleBack = () => {
    route.back();
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="layout-primary flex bg-white items-center">
        <IConArrowLeft className="mr-4" onClick={handleBack} />
        <div className="flex-1 f-normal text-semibold flex items-center">
          <Avatar
            appearance="circle"
            src="https://pbs.twimg.com/profile_images/803832195970433027/aaoG6PJI_400x400.jpg"
            size="medium"
            name="John Doe"
          />
          <span className="inline-block ml-2"> Reika Fashion</span>
        </div>
      </div>
      <div className="py-2 px-4 bg-bodyText flex justify-between items-center">
        <span className="f-bold text-white">
          Mã đơn hàng: 31032022_3248723897
        </span>
        <IConInformation />
      </div>
      <div className="flex-1 w-full max-h-full">
        <div className="w-full p-4 pt-6 font-normal max-h-[82vh] overflow-y-scroll">
          <div className="flex items-end w-3/4">
            <Avatar
              appearance="circle"
              src="https://pbs.twimg.com/profile_images/803832195970433027/aaoG6PJI_400x400.jpg"
              size="small"
              name="John Doe"
            />
            <div className="ml-2">
              <div
                className="p-2 bg-white text-black"
                style={{ borderRadius: "8px 8px 8px 0" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Consectetur fringilla neque, porttitor vitae lacus, nunc. Vitae
                ipsum, tristique sagittis elit senectus gravida justo amet.
                Maecenas aliquet vulputate imperdiet aliquam malesuada in.
                Varius placerat nunc, mattis risus vivamus aliquam.
              </div>
              <div
                className="p-2 bg-white text-black mt-2"
                style={{ borderRadius: "0 8px 8px 8px" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
          </div>
          <div className="w-full flex justify-end mt-4">
            <div className="w-3/4">
              <div
                className="p-2  text-white bg-primary"
                style={{ borderRadius: "8px 8px 8px 0" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Consectetur fringilla neque, porttitor vitae lacus, nunc. Vitae
                ipsum, tristique sagittis elit senectus gravida justo amet.
                Maecenas aliquet vulputate imperdiet aliquam malesuada in.
                Varius placerat nunc, mattis risus vivamus aliquam.
              </div>
              <div
                className="p-2 bg-primary text-white mt-2"
                style={{ borderRadius: "0 8px 8px 8px" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
          </div>
          <div className="flex items-end w-3/4">
            <Avatar
              appearance="circle"
              src="https://pbs.twimg.com/profile_images/803832195970433027/aaoG6PJI_400x400.jpg"
              size="small"
              name="John Doe"
            />
            <div className="ml-2">
              <div
                className="p-2 bg-white text-black mt-4"
                style={{ borderRadius: "8px 8px 8px 0" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Consectetur fringilla neque, porttitor vitae lacus, nunc. Vitae
                ipsum, tristique sagittis elit senectus gravida justo amet.
                Maecenas aliquet vulputate imperdiet aliquam malesuada in.
                Varius placerat nunc, mattis risus vivamus aliquam.
              </div>
              <div
                className="p-2 bg-white text-black mt-2"
                style={{ borderRadius: "0 8px 8px 8px" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
          </div>
          <div className="w-full flex justify-end mt-4">
            <div className="w-3/4">
              <div
                className="p-2  text-white bg-primary"
                style={{ borderRadius: "8px 8px 8px 0" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Consectetur fringilla neque, porttitor vitae lacus, nunc. Vitae
                ipsum, tristique sagittis elit senectus gravida justo amet.
                Maecenas aliquet vulputate imperdiet aliquam malesuada in.
                Varius placerat nunc, mattis risus vivamus aliquam.
              </div>
              <div
                className="p-2 bg-primary text-white mt-2"
                style={{ borderRadius: "0 8px 8px 8px" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
          </div>
          <div className="flex items-end w-3/4">
            <Avatar
              appearance="circle"
              src="https://pbs.twimg.com/profile_images/803832195970433027/aaoG6PJI_400x400.jpg"
              size="small"
              name="John Doe"
            />
            <div className="ml-2">
              <div
                className="p-2 bg-white text-black mt-4"
                style={{ borderRadius: "8px 8px 8px 0" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Consectetur fringilla neque, porttitor vitae lacus, nunc. Vitae
                ipsum, tristique sagittis elit senectus gravida justo amet.
                Maecenas aliquet vulputate imperdiet aliquam malesuada in.
                Varius placerat nunc, mattis risus vivamus aliquam.
              </div>
              <div
                className="p-2 bg-white text-black mt-2"
                style={{ borderRadius: "0 8px 8px 8px" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
          </div>
          <div className="w-full flex justify-end mt-4">
            <div className="w-3/4">
              <div
                className="p-2  text-white bg-primary"
                style={{ borderRadius: "8px 8px 8px 0" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Consectetur fringilla neque, porttitor vitae lacus, nunc. Vitae
                ipsum, tristique sagittis elit senectus gravida justo amet.
                Maecenas aliquet vulputate imperdiet aliquam malesuada in.
                Varius placerat nunc, mattis risus vivamus aliquam.
              </div>
              <div
                className="p-2 bg-primary text-white mt-2"
                style={{ borderRadius: "0 8px 8px 8px" }}
                ref={refScroll}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="layout-primary bg-white flex items-end pt-1">
        <IConImageAdd />
        <div className="w-[1px] h-[24px] bg-gray_4 mx-3"></div>
        <div className={`flex-1 ${styles.customArea}`}>
          <TextArea
            placeholder="Gửi tin nhắn"
            className="!max-h-[10vh]"
            value={message}
            onChange={handleChangeMessage}
            //@ts-ignore
            ref={ref}
          />
        </div>
        <IConSend className="ml-2" />
      </div>
    </div>
  );
};
