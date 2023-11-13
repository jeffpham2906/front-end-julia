/* eslint-disable react/prop-types */
import Label from "../../ui/Label";
import Input from "../../ui/Input";
import FileInput from "../../ui/FileInput";
import ErrorMessage from "../../ui/ErrorMessage";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import Spinner from "../../ui/Spinner";
import Form3ColContainer from "../../ui/Form3ColContainer";

import { useForm } from "react-hook-form";
import useCreateProduct from "./useCreateProduct";
import useUpdateProduct from "./useUpdateProduct";

function CreateProductForm({ setShowModal, editProduct = {} }) {
  const { _id: editProductID, ...editValues } = editProduct;
  const isSessionEdit = Boolean(editProductID);
  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isSessionEdit ? editValues : {},
  });
  const { errors, isDirty, dirtyFields, defaultValues } = formState;

  const { isCreating, createProduct } = useCreateProduct({
    setShowModal,
    reset,
  });
  const { isUpdating, updateProduct } = useUpdateProduct({
    setShowModal,
    reset,
  });

  function onSubmit(data) {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("commission", data.commission);
    formData.append("price", data.price);
    if (isSessionEdit) {
      if (dirtyFields.image) {
        formData.append("image", data.image[0]);
      }
      updateProduct({ formData, editProductID });
    } else {
      formData.append("image", data.image[0]);
      createProduct(formData);
    }
  }
  const isWorking = isCreating || isUpdating;

  return (
    <Modal onCloseModal={() => setShowModal(false)}>
      {isWorking && (
        <Modal position="spinner">
          <Spinner />
        </Modal>
      )}
      <form
        className="w-fit"
        onSubmit={handleSubmit(onSubmit)}
        encType="multipart/form-data"
      >
        <Form3ColContainer>
          <Label name="Tên sản phẩm" />
          <Input
            type="text"
            register={{
              ...register("name", {
                required: "Dòng này là bắt buộc",
                minLength: {
                  value: 2,
                  message: "Tên sản phẩm tối thiểu 2 ký tự",
                },
              }),
            }}
          />
          <ErrorMessage>{errors?.name?.message}</ErrorMessage>
          <Label name="Giá sản phẩm" />
          <Input
            type="number"
            register={{
              ...register("price", {
                required: "Dòng này là bắt buộc",
                min: {
                  value: 1,
                  message: "Giá tiền phải lớn hơn 1",
                },
              }),
            }}
          />
          <ErrorMessage>{errors?.price?.message}</ErrorMessage>
          <Label name="Hoa hồng" />
          <Input
            type="number"
            register={{
              ...register("commission", {
                required: "Dòng này là bắt buộc",
                min: { value: 0, message: "Hoa hồng là số dương < giá tiền" },
                validate: (value) =>
                  value <= getValues().price ||
                  "Hoa hồng phải nhỏ hơn giá tiền",
              }),
            }}
          />
          <ErrorMessage>{errors?.revenue?.message}</ErrorMessage>
          <Label name="Ảnh sản phẩm" />
          <FileInput
            register={{
              ...register("image", {
                required: isSessionEdit ? false : "Dòng này là bắt buộc",
              }),
            }}
          />
          <ErrorMessage>{errors?.image?.message}</ErrorMessage>
          <div className="col-span-2 sm:hidden"></div>
          <div className="flex gap-2 sm:w-full sm:justify-end">
            <Button
              type="secondary"
              onClick={(e) => {
                e.preventDefault();
                setShowModal(false);
              }}
            >
              Hủy
            </Button>
            <Button disableBtn={!isDirty} type="primary">
              {isSessionEdit ? "Lưu" : "Tạo"}
            </Button>
          </div>
        </Form3ColContainer>
      </form>
    </Modal>
  );
}

export default CreateProductForm;
