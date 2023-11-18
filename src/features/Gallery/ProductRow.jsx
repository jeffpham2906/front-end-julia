import {
  HiOutlinePencil,
  HiOutlineTrash,
  HiOutlineEllipsisVertical,
} from "react-icons/hi2";

import ButtonAction from "../../ui/ButtonAction";
import Modal from "../../ui/Modal";
import Spinner from "../../ui/Spinner";
import CreateProductForm from "./CreateProductForm";
import DropDownMenu from "../../ui/DropDownMenu";

import { FormatVND } from "../../utils/FormatVND";
import { IMAGE_URL_API } from "../../Constants/IMAGE_URL_API";
import { useState } from "react";
import useDeleteProduct from "./useDeleteProduct";

function ProductRow({ product }) {
  const [showEditForm, setShowEditForm] = useState(false);
  const { isDeleting, deleteProduct } = useDeleteProduct();
  const { _id: productID, name, commission, price, image } = product;

  return (
    <>
      {isDeleting && (
        <Modal position="spinner">
          <Spinner />
        </Modal>
      )}
      {showEditForm && (
        <CreateProductForm
          setShowModal={setShowEditForm}
          editProduct={product}
        />
      )}
      <div className=" flex items-center justify-center">
        <img
          src={`${IMAGE_URL_API}/products/${image}`}
          alt="anh san pham"
          className="h-20 w-20 rounded-md sm:h-14 sm:w-14"
        />
      </div>
      <div>{name}</div>
      <div>{FormatVND.format(price)}</div>
      <div>{FormatVND.format(commission)}</div>
      <div className="flex justify-end text-base">
        <div className="p-1 sm:hidden">
          <ButtonAction
            onClick={() => setShowEditForm(true)}
            icon={<HiOutlinePencil />}
            name="Edit"
          />
          <ButtonAction
            onClick={() => deleteProduct(productID)}
            icon={<HiOutlineTrash />}
            name="Remove"
          />
        </div>
        <span className="hidden sm:block">
          <DropDownMenu
            listOptions={["Edit", "Remove"]}
            onClick={(label) => {
              if (label === "Edit") return (() => setShowEditForm(true))();
              if (label === "Remove") {
                deleteProduct(productID);
              }
            }}
            icon={<HiOutlineEllipsisVertical />}
          />
        </span>
      </div>
      {/* <div className="col-span-6 h-px bg-teal-100"></div> */}
    </>
  );
}

export default ProductRow;
