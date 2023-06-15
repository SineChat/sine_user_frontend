import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import TextInput, { InputType } from "../Ui/TextInput";
import Button from "../Ui/Button";
import { useRegisterMutation, useRequestVerificationMutation } from "@/services/api/authSlice";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { ScaleSpinner } from "../Ui/Loaders";

const SignupForm = () => {
  const [isBusy, setIsBusy] = useState(false);
  const [signup] = useRegisterMutation();
  const [sendVerify] = useRequestVerificationMutation()
  const router = useRouter();
  const {
    control,
    watch,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      firstname: "",
      lastname: "",
      password: "",
      confirm_password: "",
      terms: false,
    },
  });

  const onSubmit = async (data:any) => {
    setIsBusy(true);
    await signup(data)
      .then((res:any) => {
        if (res.data.status === "success") {
          router.push(`/auth/signup-success?email=${data.email}`);
          const payload = {
            email: data.email,
            redirect_url: "http://localhost:3000/auth/verify-email"
          }
          sendVerify(payload)
          .then((res:any) => {
            if(res.data.status === "success"){
              // toast.success(res.data.message);
            }else{
              toast.error(res?.error?.data.message)
            }
          })
          .catch(() => {})
          toast.success(res.data.message);
          setIsBusy(false);
        }else {
          toast.error(res.error.data.message);
          setIsBusy(false);
        }
      })
      .catch((err) => {
        toast.error(err?.error?.data?.message);
        toast.error("Registration Failed");
        setIsBusy(false);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}  className="fs-600">
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
                label="Email Address"
                placeholder="victorchigozie@gmail.com"
                error={errors.email?.message}
                type={InputType.email}
                {...field}
              />
            )}
          />
        </div>
        <div className="mt-6">
          <Controller
            name="firstname"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Please enter your email",
              },
            }}
            render={({ field }) => (
              <TextInput
                label="First Name"
                placeholder="victor"
                error={errors.firstname?.message}
                type={InputType.text}
                {...field}
              />
            )}
          />
        </div>
        <div className="mt-6">
          <Controller
            name="lastname"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Please enter your email",
              },
            }}
            render={({ field }) => (
              <TextInput
                label="Last Name"
                placeholder="Smith"
                error={errors.lastname?.message}
                type={InputType.text}
                {...field}
              />
            )}
          />
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
                label="Password"
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
              required: {
                value: true,
                message: "Password is required",
              },
              minLength: {
                value: 5,
                message: "Password is too short",
              },
              validate: (value) =>
                value === watch("password") || "Passwords do not match",
            }}
            render={({ field }) => (
              <TextInput
                label="Confirm Password"
                placeholder="*********"
                error={errors.confirm_password?.message}
                type={InputType.password}
                {...field}
              />
            )}
          />
        </div>
        <div className="flex items-end justify-between mt-4 lg:mt-0">
          <div className="flex pb-2 gap-x-2 lg:items-end">
            <Controller
              name="terms"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "",
                },
              }}
              render={({ field }) => (
                <TextInput
                  type={InputType.checkbox}
                  altClassName=" border-0"
                  required
                  {...field}
                />
              )}
            />
            <p className="relative -bottom-[6px]">
              By creating account, you agree to SineChat Privacy Policy
            </p>
          </div>
        </div>
        <div className="mt-12">
          <Button
            title={isBusy ? <ScaleSpinner size={14} color="white"/> : "Complete Account Setup"}
            disabled={!isValid}
          />
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
