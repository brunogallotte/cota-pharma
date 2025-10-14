import { HTMLAttributes } from "react";

import { twMerge } from "tailwind-merge";

export default function ContentWrapper({
  componentRef,
  ...props
}: TContentWrapper) {
  return (
    <props.element
      {...props}
      ref={componentRef}
      className={twMerge(
        "mx-auto w-full  max-w-[1269px] px-4 lg:px-6",
        props.className
      )}
    >
      {props.children}
    </props.element>
  );
}

export type TContentWrapper = {
  element: "div" | "section";
  componentRef?: any;
} & HTMLAttributes<HTMLDivElement>;
