import React, { FC, useState } from "react";
import { ScaleSpinner } from "../../Ui/Loaders";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import TextInput, { InputType } from "../../Ui/TextInput";
import Button from "../../Ui/Button";
import { useLazyChangePasswordQuery } from "@/services/api/authSlice";

interface Props {
  close: () => void
}
const ChangePassword:FC<Props> = ({close}) => {
  const [isBusy, setIsBusy] = useState(false);
  const [ changePassword ] =   useLazyChangePasswordQuery()
  
  const {
    control,
    handleSubmit,
    setError,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
        old_password: "",
        new_password: "",
      confirm_password: "",
    },
  });

  const onSubmit = async (data:any) => {
    setIsBusy(true)
    await changePassword(data)
      .then((res:any) => {
        if (res.isSuccess) {
          toast.success(res.data.message)
          setIsBusy(false);
          close()
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
            name="old_password"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Password is required",
              },
            }}
            render={({ field }) => (
              <TextInput
                label="New Password"
                placeholder="*********"
                error={errors.old_password?.message}
                type={InputType.password}
                {...field}
              />
            )}
          />
        </div>
        <div className="mt-6">
          <Controller
            name="new_password"
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
                error={errors.new_password?.message}
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
                value === watch("new_password") || "Passwords do not match",
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
            title={isBusy ?  <ScaleSpinner size={14} color="white"/> : "Change Password"}
            disabled={!isValid}
          />
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
