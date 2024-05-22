/// <reference types="vite-plugin-svgr/client" />
import { useForm } from "react-hook-form";
import AppIcon from "../../assets/app-icon.svg?react";
import Modal from "components/Modal/Modal";
import React from "react";
import Typography from "components/Typography/Typography";
import Button from "components/Button/Button";
import { APP_NAME } from "src/common/consts";
import Input from "components/Form/Input/Input";

const Login: React.FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data: any) => {
    // TODO: perhaps create "useAuth" hook and call it here.
    // const { login } = useAuth();
    console.log(data);
    console.log(errors);
  };

  return (
    <div className="h-screen bg-mono/basic-15">
      <div className="h-screen bg-cover bg-no-repeat bg-login-pattern opacity-30">
        <Modal>
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center pb-4">
              <Typography>
                <AppIcon />
              </Typography>
              <Typography
                variant="headline-md"
                className="text-mono/basic-4 pl-3"
              >
                {APP_NAME}
              </Typography>
            </div>
            <div className="bg-mono/basic-12 border border-mono/basic-10 h-85 w-150 flex flex-col py-8 px-10 rounded-lg">
              <Typography
                variant="headline-lg"
                className="text-mono/basic-1 gap-2 mb-5 h-8"
              >{`Login to ${APP_NAME}`}</Typography>

              <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                  type="text"
                  {...register("username", {
                    required: "username is required",
                  })}
                  error={errors.username?.message as string}
                  label="Username"
                  placeholder="Insert username..."
                />
                <Input
                  type="password"
                  {...register("password", {
                    required: "password is required",
                    minLength: {
                      value: 6,
                      message: "password should be longer than 6 characters",
                    },
                  })}
                  error={errors.password?.message as string}
                  label="Password"
                  placeholder="Insert password..."
                />

                <div className="flex items-center justify-center pt-3 h-13">
                  <Button
                    variant="primary"
                    onClick={handleSubmit(onSubmit)}
                    children="Login"
                    className="w-[140px]"
                  />
                </div>
              </form>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Login;
