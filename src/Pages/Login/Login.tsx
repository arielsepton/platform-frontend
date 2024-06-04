/// <reference types="vite-plugin-svgr/client" />
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import AppIcon from "../../assets/app-icon.svg?react";
import Modal from "components/Modal/Modal";
import React, { useState } from "react";
import Typography from "components/Typography/Typography";
import Button from "components/Button/Button";
import { APP_NAME } from "../../common/consts";
import Input from "components/Form/Input/Input";
import { useRouter } from "@tanstack/react-router";
import { useAuth } from "../../hooks/useAuth";
import { useDataMutation } from "../../hooks/useDataMutation";
import { User } from "../../models/user/user";
import { AuthData } from "../../models/auth/authData";

const Login: React.FC = () => {
  const router = useRouter();
  const { signIn } = useAuth();
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { mutateInstance: mutate } = useDataMutation<User>("/auth", undefined, {
    onSuccess: async (response, user) => {
      const authData: AuthData = AuthData.fromJson(
        response.body as { token: string; user: string }
      );
      if (authData && authData.token) {
        signIn(authData.token, user.username);
        router.invalidate();
      }
    },
    onError: (error) => setError(error.message),
  });

  const onSubmit: SubmitHandler<FieldValues> = async ({
    username,
    password,
  }) => {
    await mutate.post.mutateAsync(User.fromJson({ username, password }));
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
                  autoComplete="username"
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
                    className="w-[140px]"
                  >
                    Login
                  </Button>
                </div>
              </form>
            </div>
            <Typography
              variant="body-sm"
              className={`text-velvet/basic-5 mb-1 pt-0.75 h-5 ${error ? "" : "opacity-0"}`}
            >
              {error}
            </Typography>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Login;
