/// <reference types="vite-plugin-svgr/client" />
import Close from "@/assets/x-close.svg?react";

import React, { useState } from "react";
import Typography from "@/components/typography/Typography";
import Modal from "@components/modal/Modal";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "@components/form/input/Input";
import Select from "@components/form/select/Select";
import Button from "@components/button/Button";

type AddProjectModalProps = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddProjectModal = React.memo(({ setShowModal }: AddProjectModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = async () => {
    console.log("hi");
  };

  const [error, _] = useState("hi");
  return (
    <Modal
      setShowModal={setShowModal}
      closeOnEscape={true}
      darkenBackground={true}
    >
      <div className="flex flex-col items-center justify-center relative">
        <Close
          className="absolute top-4 right-4 cursor-pointer"
          onClick={() => setShowModal((prev) => !prev)}
        />
        <div className="bg-mono/basic-12 border border-mono/basic-10 h-85 w-150 flex flex-col py-8 px-10 rounded-md">
          <Typography
            variant="headline-lg"
            className="text-mono/basic-1 gap-2 mb-5 h-8"
          >
            Create a new project
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              type="text"
              {...register("username", {
                required: "username is required",
              })}
              error={errors.username?.message as string}
              label="Project name*"
              autoComplete="username"
              placeholder="Insert username..."
            />
            <Select
              {...register("password")}
              label="Hierarchy*"
              options={["a", "b", "c"]}
              placeholder="Insert"
            />

            <div className="flex items-center justify-between pt-3 h-13">
              <Button variant="primary" className="w-[140px]">
                Create project
              </Button>
              <Button
                variant="secondary"
                onClick={() => setShowModal((prev) => !prev)}
              >
                Close
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
  );
});

export default AddProjectModal;
