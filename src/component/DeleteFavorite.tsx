import { IConPackage } from ".";

interface IProps {
  handleToggleClose: () => void;
}

export const ComponentPoUpDeleteFavorite = (props: IProps) => {
  //page props
  const { handleToggleClose } = props;
  return (
    <div className="bg-popup flex justify-center z-20">
      <div className="py-4 bg-white w-[90%] h-fit absolute top-[40vh] -translate-y-2/4 rounded ">
        <div className="text-center f-bold text-base w-3/4 mx-auto">
          Bạn có chắc muốn xóa sản phẩm khỏi danh sách yêu thích
        </div>
        <div className="w-full center my-7">
          <IConPackage />
        </div>
        <div className="px-4">
          <button className="btn btn-primary-full py-3">Xóa</button>
          <button
            className="btn btn-primary-full bg-white text-gray_1"
            onClick={handleToggleClose}
          >
            Hủy
          </button>
        </div>
      </div>
    </div>
  );
};
