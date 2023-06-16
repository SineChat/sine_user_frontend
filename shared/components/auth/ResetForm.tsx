import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import TextInput, { InputType } from "../Ui/TextInput";
import Button from "../Ui/Button";
import OTPInput from "react-otp-input";
import {   useFogetPasswordMutation, useLazyResetPasswordQuery } from "@/services/api/authSlice";
import { toast } from "react-toastify";
import { FadeSpinner, ScaleSpinner } from "../Ui/Loaders";
import { useRouter } from "next/router";

const ResetForm = () => {
  const [isBusy, setIsBusy] = useState(false);
  const [loading, setLoading ] = useState(false)
  const router = useRouter()
  const [ reset ] =   useLazyResetPasswordQuery()
  const [forgetPass] = useFogetPasswordMutation()
  const {
    control,
    handleSubmit,
    setError,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      token: "",
      password: "",
      confirm_password: "",
    },
  });

  const resendToken = async () => {
    const data = {
      email: watch('email')
    }
    setLoading(true)
    await forgetPass(data)
      .then((res:any) => {
        if (res.data.status === "success") {
          toast.success(res.data.message)
        }else {
          toast.error(res.error.data.message);
        }
      })
      .catch((err) => {
        toast.error(err?.error?.data?.message);
      });
    setLoading(false)
  }
  const onSubmit = async (data:any) => {
    setIsBusy(true);
    const payload = {
      email: data.email,
      password: data.password,
      token: Number(data.token)
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
      <div className="relative">
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
          <div className="absolute right-2 top-[54%]">
          {
            loading? <FadeSpinner size={4} color="#0BAD09"/> : <p className="fs-500 text-primary" onClick={resendToken}>Resend Token</p>
          }
          </div>
        </div>
        <div className="mt-6">
          <label className="block mb-2">Enter OTP</label>
          <Controller
            name="token"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Token is required",
              },
              minLength: {
                value: 5,
                message: "Enter a valid token",
              },
              maxLength: {
                value: 6,
                message: "Enter a valid token",
              },
            }}
            render={({ field }) => (
              <OTPInput
                numInputs={6}
                renderSeparator={<span className="px-1"></span>}
                renderInput={(props) => <input {...props} className="p-2 !w-12 rounded border"/>}
                {...field}
              />
            )}
          />
          <p className="text-red-500 fs-300">{errors.token?.message}</p>
        </div>
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
