import { useState } from "react";
import { IMAGE_URL_API } from "../../Constants/IMAGE_URL_API";
import { FormatVND } from "../../utils/FormatVND";
import { HiOutlinePlusCircle } from "react-icons/hi2";

import SearchForm from "../../ui/SearchForm";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";

import useGetAllProducts from "../Gallery/useGetAllProducts";
import toast from "react-hot-toast";

function ModalSearchProduct({ onCloseModal, updateProduct }) {
  const { products, isLoading, error } = useGetAllProducts();
  const [idProductChoosen, setIdProductChoosen] = useState();

  const handleAddProduct = (idProductChoosen) => {
    const productAdded = products?.find((pro) => pro._id === idProductChoosen);
    if (!productAdded) return toast.error("Lỗi khi thêm sản phẩm");
    updateProduct({
      data: { image: productAdded.image, name: productAdded.name },
    });
    onCloseModal();
  };

  return (
    <Modal onCloseModal={onCloseModal}>
      <div className="min-h-[20rem]">
        <SearchForm placeholder="Nhập tên sản phẩm" />
        <ul className="mt-6 h-80 overflow-y-scroll">
          {isLoading && <p>Loading ...</p>}
          {error && <p>{error}</p>}
          {products?.map((pro) => (
            <li
              key={pro._id}
              onClick={() => setIdProductChoosen(pro._id)}
              className={`${"grid cursor-pointer grid-cols-[1fr,auto,auto] items-center gap-4 rounded-md p-2 hover:bg-teal-100"} ${
                pro._id === idProductChoosen && "bg-teal-100"
              }`}
            >
              <span className="flex items-center gap-2">
                <img
                  src={`${IMAGE_URL_API}/${pro.image}`}
                  alt="anh sp"
                  className="h-12 w-14 rounded-md"
                />
                <p>{pro.name}</p>
              </span>
              <p>{FormatVND.format(pro.price)}</p>
              <p>{FormatVND.format(pro.commission)}</p>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex items-center justify-center">
          <Button
            width="full"
            type="primary"
            icon={<HiOutlinePlusCircle stroke="#f0fdfa" size={20} />}
            disableBtn={!idProductChoosen}
            onClick={() => handleAddProduct(idProductChoosen)}
          >
            Thêm
          </Button>
        </div>
      </div>
    </Modal>
  );
}
export default ModalSearchProduct;
