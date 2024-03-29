import React, { FC, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import TextInput, { InputType } from "../Ui/TextInput";
import Button from "../Ui/Button";
import OTPInput from "react-otp-input";
import {   useFogetPasswordMutation, useLazyResetPasswordQuery } from "@/services/api/authSlice";
import { toast } from "react-toastify";
import { FadeSpinner, ScaleSpinner } from "../Ui/Loaders";
import { useRouter } from "next/router";

interface Props {
  token: string | string[] | undefined
}
const ResetForm:FC<Props> = ({token}) => {
  const [isBusy, setIsBusy] = useState(false);
  const router = useRouter()
  const [ reset ] =   useLazyResetPasswordQuery()
  
  const {
    control,
    handleSubmit,
    setError,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      password: "",
      confirm_password: "",
    },
  });

  const onSubmit = async (data:any) => {
    setIsBusy(true);
    const payload = {
      email: data.email,
      password: data.password,
      token: Number(token)
    }
    await reset(payload)
      .then((res:any) => {
        if (res.isSuccess) {
          toast.success(res.data.message)
          setIsBusy(false);
          router.push("/auth/login")
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
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-6">
          <Controller
            name="password"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Password is required",
              },
              minLength: {
                value: 5,
                message: "Password is too short",
              },
            }}
            render={({ field }) => (
              <TextInput
                label="New Password"
                placeholder="*********"
                error={errors.password?.message}
                type={InputType.password}
                {...field}
              />
            )}
          />
        </div>
        <div className="mt-6">
          <Controller
            name="confirm_password"
            control={control}
            rules={{
              validate: (value) =>
                value === watch("password") || "Passwords do not match",
            }}
            render={({ field }) => (
              <TextInput
                label="Re-enter Password"
                placeholder="*********"
                error={errors.confirm_password?.message}
                type={InputType.password}
                {...field}
              />
            )}
          />
        </div>
        <div className="mt-12">
          <Button
            title={isBusy ?  <ScaleSpinner size={14} color="white"/> : "Reset Password"}
            disabled={!isValid}
          />
        </div>
      </form>
    </div>
  );
};

export default ResetForm;
