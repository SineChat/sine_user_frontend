import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import TextInput, { InputType } from "../Ui/TextInput";
import Button from "../Ui/Button";
import { useFogetPasswordMutation } from "@/services/api/authSlice";
import { toast } from "react-toastify";
import { ScaleSpinner } from "../Ui/Loaders";

const ForgetForm = () => {
  const [isBusy, setIsBusy] = useState(false);
  const [forgetPass] = useFogetPasswordMutation()
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
    },
  });
  const onSubmit = async (data:any) => {
    setIsBusy(true);
    await forgetPass(data)
      .then((res:any) => {
        if (res.data.status === "success") {
          toast.success(res.data.message)
        }else {
          toast.error(res.error.data.message);
          setIsBusy(false);
        }
      })
      .catch((err) => {
        toast.error(err?.error?.data?.message);
        setIsBusy(false);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="fs-600">
        <div>
          <Controller
            name="email"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Please enter your email",
              },
            }}
            render={({ field }) => (
              <TextInput
                label="Registered Email Address"
                placeholder="victorchigozie@gmail.com"
                error={errors.email?.message}
                type={InputType.email}
                {...field}
              />
            )}
          />
        </div>
        <div className="mt-12">
          <Button title={isBusy ? <ScaleSpinner size={14} color="white"/> : "Continue"} disabled={!isValid} />
        </div>
      </form>
    </div>
  );
};

export default ForgetForm;
