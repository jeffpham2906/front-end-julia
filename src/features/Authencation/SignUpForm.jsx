import Label from "../../ui/Label";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import ErrorMessage from "../../ui/ErrorMessage";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import useSignUp from "./useSignUp";
import Modal from "../../ui/Modal";
import Spinner from "../../ui/Spinner";
function SignUpForm() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    reset,
  } = useForm();
  const { signUp, isLoading } = useSignUp();
  const onSubmit = (data) => {
    signUp(data);
    reset();
  };
  return (
    <>
      {isLoading && (
        <Modal>
          <Spinner />
        </Modal>
      )}
      <h1 className="mb-10 text-4xl">Đăng ký tài khoản</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormRow>
          <Label name="Tên đăng nhập" />
          <Input
            type="text"
            register={{
              ...register("username", {
                required: "Vui lòng nhập tên đăng nhập",
                minLength: {
                  value: 3,
                  message: "Tối thiểu 3 ký tự",
                },
              }),
            }}
          />
          {errors["username"]?.message && (
            <ErrorMessage>{errors["password"]?.message}</ErrorMessage>
          )}
        </FormRow>
        <FormRow>
          <Label name="Mật khẩu" />
          <Input
            type="password"
            register={{
              ...register("password", {
                required: "Vui lòng nhập mật khẩu",
                minLength: {
                  value: 3,
                  message: "Tối thiểu 3 ký tự",
                },
              }),
            }}
          />
          {errors["password"]?.message && (
            <ErrorMessage>{errors["password"]?.message}</ErrorMessage>
          )}
        </FormRow>
        <FormRow>
          <Label name="Xác nhận mật khẩu" />
          <Input
            type="password"
            register={{
              ...register("passwordConfirm", {
                required: true,
                validate: (value) =>
                  value === getValues("password") || "Xác minh mật khẩu sai",
              }),
            }}
          />
          {errors["passwordConfirm"]?.message && (
            <ErrorMessage>{errors["passwordConfirm"]?.message}</ErrorMessage>
          )}
        </FormRow>
        <div className="mt-10">
          <Button type="primary" width="full">
            Đăng ký
          </Button>
        </div>
        <Link to="/login" className="mt-4 block">
          <Button type="secondary" width="full">
            Đã có tài khoản?
          </Button>
        </Link>
      </form>
    </>
  );
}

export default SignUpForm;
