import { Input } from "antd";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

import { useLogin } from "handlers/auth/auth.hooks";
import { CoreLayout, FooterLayout } from "layouts";
import styles from "./styles/login.module.scss";

const LoginPage = () => {
  const { onChangePhone, onChangePassword, onLogin } = useLogin();

  return (
    <>
      <div className="font-normal text-sm font-sans not-italic text-black mb-4">
        <div className="p-4">Khách hàng truy cập lần đầu tiên</div>
        <div className="bg-white p-4 ">
          <div className="w-3/4 text-center mx-auto mb-4">
            Bạn có thẻ sử dụng dịch vụ bằng cách đăng ký thành viên hoàn toàn
            miễn phí
          </div>
          <button className="btn btn-primary-full">Đăng ký thành viên</button>
        </div>
        <div className="p-4">Bạn đã có tài khoản, vui lòng đăng nhập</div>
        <div className="p-4 bg-white">
          <div className="text-textBody mb-2">Địa chỉ email</div>
          <div className={`w-full ${styles.login} mb-3`}>
            <Input size="large" placeholder="Email" />
          </div>
          <div className="text-textBody mb-2">Mật khẩu</div>
          <div className={`w-full ${styles.login} mb-3`}>
            <Input.Password
              size="large"
              placeholder="Password"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </div>
          <div className="w-full flex justify-center mb-3.5">
            <button className="btn btn-login">Đăng nhập</button>
          </div>
          <div className="text-right">
            <span className="text-gray_1">Không thể đăng nhập?</span>{" "}
            <span className="text-primary cursor-pointer">Ấn vào</span>
          </div>
        </div>
      </div>
      <FooterLayout />
    </>
  );
};

LoginPage.Layout = CoreLayout;

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}

export default LoginPage;
