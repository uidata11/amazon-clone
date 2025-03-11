import React from "react";
import { twMerge } from "tailwind-merge";

export type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const Input = (props: Props) => {
  return (
    <div>
      <input {...props} className={twMerge("input", props?.className)} />
      <select name="" id="">
        <option value="">hello</option>
      </select>
    </div>
  );
};
