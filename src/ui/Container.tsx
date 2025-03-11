import React from "react";
import { twMerge } from "tailwind-merge";

export type DivProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export const InputWrapper = (props: DivProps) => {
  return <div {...props} className={twMerge("div col", props?.className)} />;
};
