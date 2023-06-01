import React from "react";
import { classNames } from "@/shared/utils/format";


interface Props {
  title: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  capitalizeTitle?: boolean;
  secondary?: boolean;
  disabled?: boolean;
  className?: string;
  altClassName?: string;
  isBusy?: boolean;
}

const Button: React.FC<Props> = ({
  title,
  onClick,
  capitalizeTitle,
  secondary,
  disabled,
  className,
  altClassName,
  isBusy,
}) => {
  return (
    <div
      className={
        altClassName
          ? ""
          : classNames(
              secondary
                ? " fs-300 lg:fs-500 border-btn rounded fw-500"
                : " mt-10 lg:mt-10",
              className as string
            )
      }
    >
      <button
        onClick={onClick ? onClick : undefined}
        className={
          altClassName ||
          (secondary
            ? "w-full py-2 px-3"
            : disabled
            ? "btn-disabled fw-500 py-2 w-full"
            : "btn-primary fw-800 w-full py-2")
        }
        disabled={disabled || isBusy}
      >
        {isBusy ? (
          "Loading"
        ) : capitalizeTitle ? (
          title.toUpperCase()
        ) : (
          title
        )}
      </button>
    </div>
  );
};

export default Button;