/* eslint-disable react/prop-types */
import Button from "../../ui/Button";
import Label from "../../ui/Label";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Modal from "../../ui/Modal";
import Spinner from "../../ui/Spinner";
import {
  HiOutlineEye,
  HiOutlineEyeSlash,
  HiOutlineArrowSmallRight,
} from "react-icons/hi2";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useLogin from "./useLogin";
import { IMAGE_URL_API } from "../../Constants/IMAGE_URL_API";
function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit } = useForm();
  const { isLoading, login, onSuccess } = useLogin();
  const navigate = useNavigate();
  const onSubmit = (data) => login(data);
  useEffect(() => {
    if (onSuccess) navigate("/home");
    if (JSON.parse(sessionStorage.getItem("user"))) navigate("/home");
  }, [onSuccess, navigate]);
  return (
    <>
      {isLoading && (
        <Modal>
          <Spinner />
        </Modal>
      )}
      <h1 className="mb-10 text-4xl">Welcome to Julia Nailbox</h1>
      <form className="text-base" onSubmit={handleSubmit(onSubmit)}>
        <FormRow>
          <Label name="Username" />
          <Input
            type="text"
            register={{
              ...register("username", {
                required: "Username is required",
              }),
            }}
          />
        </FormRow>
        <FormRow>
          <Label name="Password" />
          <div className="relative">
            <Input
              type={`${showPassword ? "text" : "password"}`}
              register={{
                ...register("password", {
                  required: "Password is required",
                }),
              }}
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
            >
              {showPassword ? (
                <HiOutlineEye size={20} />
              ) : (
                <HiOutlineEyeSlash size={20} />
              )}
            </span>
          </div>
        </FormRow>

        <Button type="primary" width="full">
          Submit
        </Button>
        <div className="mt-4 flex justify-end">
          <Link to="/signup" className="flex items-center gap-1 underline">
            <span className="text-gray-600"> Đăng ký</span>
            <HiOutlineArrowSmallRight />
          </Link>
        </div>
      </form>
    </>
  );
}

export default LoginForm;
