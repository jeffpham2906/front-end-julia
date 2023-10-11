import Form3ColContainer from "../../ui/Form3ColContainer";
import Label from "../../ui/Label";
import Input from "../../ui/Input";
import ErrorMessage from "../../ui/ErrorMessage";
import Button from "../../ui/Button";

import { HiOutlinePlus } from "react-icons/hi2";
import { useForm } from "react-hook-form";

import useCreateStaffAccount from "./useCreateStaffAccount";
import Modal from "../../ui/Modal";
import Spinner from "../../ui/Spinner";
function CreateNewUserForBusinessForm({ onCloseModal }) {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  const { createStaffAccount, isLoading, error } = useCreateStaffAccount();

  const onSubmit = (data) => {
    createStaffAccount({ data });
    if (error) return;
    onCloseModal();
  };

  return (
    <>
      {isLoading && (
        <Modal>
          <Spinner />
        </Modal>
      )}
      <form className="px-10" onSubmit={handleSubmit(onSubmit)}>
        <Form3ColContainer>
          <Label name="Display name" />
          <Input
            type="text"
            register={{
              ...register("displayName", {
                required: "Vui lòng nhập tên",
                minLength: {
                  value: 4,
                  message: "Tối thiểu 4 ký tự",
                },
              }),
            }}
          />
          <ErrorMessage>{errors?.displayName?.message}</ErrorMessage>
          <Label name="Username" />
          <Input
            type="text"
            register={{
              ...register("username", {
                required: "Nhập tên đăng nhập",
                minLength: {
                  value: 4,
                  message: "Tối thiểu 4 ký tự",
                },
              }),
            }}
          />
          <ErrorMessage>{errors?.username?.message}</ErrorMessage>
          <Label name="Password" />
          <Input
            type="text"
            register={{
              ...register("password", {
                required: "Vui lòng nhập mật khẩu",
                minLength: {
                  value: 4,
                  message: "Tối thiểu 4 ký tự",
                },
              }),
            }}
          />
          <ErrorMessage>{errors?.password?.message}</ErrorMessage>
          <Label name="Repeat Password" />
          <Input
            type="text"
            register={{
              ...register("passwordConfirm", {
                required: "Xác minh mật khẩu",
                minLength: {
                  value: 4,
                  message: "Tối thiểu 4 ký tự",
                },
                validate: (value) =>
                  getValues("password") === value || "Xác minh mật khẩu sai",
              }),
            }}
          />
          <ErrorMessage>{errors?.passwordConfirm?.message}</ErrorMessage>
          <div className="col-span-2"></div>
          <div className="flex justify-center">
            <Button
              onClick={(e) => {
                e.preventDefault();
                onCloseModal();
              }}
            >
              Cancel
            </Button>
            <Button type="primary">
              Create <HiOutlinePlus size={20} stroke="#f0fdfa" />
            </Button>
          </div>
        </Form3ColContainer>
      </form>
    </>
  );
}

export default CreateNewUserForBusinessForm;
