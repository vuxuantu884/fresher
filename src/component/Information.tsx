import { IConArrowRight } from ".";

export const ComponentInformation = () => {
  return (
    <div className="mt-4 not-italic font-sans font-normal text-sm text-bodyText">
      <div className="py-3 px-4 flex justify-between bg-[#4F4F4F] items-center">
        <div className="text-white">Trang cá nhân của tôi</div>
        <IConArrowRight />
      </div>

      <div className="py-3 px-4 flex justify-between bg-gray_4 items-center">
        <div className="">Lịch sử đặt hàng</div>
      </div>
      <div className="py-3 px-4 flex justify-between bg-white items-center">
        <div className="">Lịch sử và trạng thái xuất hàng</div>
      </div>
      <div className="py-3 px-4 flex justify-between bg-white items-center border-b border-solid border-gray_4">
        <div className="">Thư mục yêu thích</div>
      </div>
      <div className="py-3 px-4 flex justify-between bg-white items-center border-b border-solid border-gray_4">
        <div className="">Thông tin khách hàng</div>
      </div>
      <div className="py-3 px-4 flex justify-between bg-white items-center border-b border-solid border-gray_4">
        <div className="">Địa chỉ gửi hàng</div>
      </div>
    </div>
  );
};
