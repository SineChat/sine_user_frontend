import React, { FC, useState } from "react";
import { ScaleSpinner } from "../../Ui/Loaders";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import TextInput, { InputType } from "../../Ui/TextInput";
import Button from "../../Ui/Button";
import { useLazyUpdateUserQuery } from "@/services/api/authSlice";
import { authUser } from "@/shared/contracts/auth-types";
import { saveUser } from "@/shared/redux/reducers/userSlice";
import { store, useAppDispatch } from "@/shared/redux/store";

interface Props {
  close: () => void,
  user: authUser
}
const UpdateProfile:FC<Props> = ({close, user}) => {
  const [isBusy, setIsBusy] = useState(false);
  const [ update ] =   useLazyUpdateUserQuery()
  const dispatch = useAppDispatch()

  const {
    control,
    handleSubmit,
    setError,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
        firstname: user.firstname,
        lastname: user.lastname,
        phone: user.phone,
        country: user.country,
    },
  });

  const onSubmit = async (data:any) => {
    setIsBusy(true)
    await update(data)
      .then((res:any) => {
        if (res.isSuccess) {
            dispatch(
                saveUser({
                    ...store.getState().user.user,
                    firstname: data.firstname,
                    lastname: data.lastname,
                    phone: data.phone,
                    country: data.country
              }))
          toast.success(res.data.message)
          setIsBusy(false);
          close()
        }else {
          toast.error(res.error.data.message);
          setIsBusy(false);
          close()
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
        <div className="grid lg:grid-cols-2 gap-4">
        <div className="">
          <Controller
            name="firstname"
            control={control}
            rules={{
              required: {
                value: true,
                message: "First Name is required",
              },
            }}
            render={({ field }) => (
              <TextInput
                label="First Name"
                error={errors.firstname?.message}
                type={InputType.text}
                {...field}
              />
            )}
          />
        </div>
        <div className="">
          <Controller
            name="lastname"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Last Name is required",
              },
            }}
            render={({ field }) => (
              <TextInput
                label="Last Name"
                placeholder=""
                error={errors.lastname?.message}
                type={InputType.text}
                {...field}
              />
            )}
          />
        </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-4 mt-4">
        <div className="">
          <Controller
            name="phone"
            control={control}
            rules={{
              required: {
                value: false,
                message: "",
              },
            }}
            render={({ field }) => (
              <TextInput
                label="Phone Number"
                error={errors.phone?.message}
                type={InputType.text}
                {...field}
              />
            )}
          />
        </div>
        <div className="">
          <Controller
            name="country"
            control={control}
            rules={{
              required: {
                value: false,
                message: ""
              },
            }}
            render={({ field }) => (
              <TextInput
                label="Country"
                placeholder=""
                error={errors.lastname?.message}
                type={InputType.text}
                {...field}
              />
            )}
          />
        </div>
        </div>
        <div className="mt-12">
          <Button
            title={isBusy ?  <ScaleSpinner size={14} color="white"/> : "Update Profile"}
            disabled={!isValid}
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
