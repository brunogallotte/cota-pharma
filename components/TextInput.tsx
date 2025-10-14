"use client";

import { cn } from "@/lib/utils";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { ChangeEvent } from "react";

export const TextInput = ({
  label,
  classNames,
  error,
  mask,
  onChange,
  ...props
}: TextInputProps) => {
  const handleMaskedInput = (
    event: ChangeEvent<HTMLInputElement>,
    maskPattern: string
  ) => {
    const { value } = event.target;
    let newValue = "";
    let valueIndex = 0;
    let maskIndex = 0;
    let digitCount = 0;
    const maxDigits = maskPattern.replace(/[^#0]/g, "").length;

    while (
      maskIndex < maskPattern.length &&
      valueIndex < value.length &&
      digitCount < maxDigits
    ) {
      const maskChar = maskPattern[maskIndex];
      const valueChar = value[valueIndex];

      if (maskChar === "#" || maskChar === "0") {
        if (/\d/.test(valueChar)) {
          newValue += valueChar;
          valueIndex++;
          digitCount++;
        } else {
          valueIndex++;
        }
        maskIndex++;
      } else {
        newValue += maskChar;
        if (maskChar === valueChar) {
          valueIndex++;
        }
        maskIndex++;
      }
    }

    event.target.value = newValue;

    const selectionStart = event.target.selectionStart;
    if (selectionStart !== null) {
      const newCursorPos = Math.min(selectionStart, newValue.length);
      requestAnimationFrame(() => {
        event.target.setSelectionRange(newCursorPos, newCursorPos);
      });
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (mask) {
      handleMaskedInput(event, mask);
    }

    if (onChange) {
      onChange(event);
    }
  };

  return (
    <div className={cn("space-y-1", classNames?.container)}>
      {label && (
        <Label className={cn("text-sm font-bold", classNames?.label)}>
          {label}
        </Label>
      )}
      <Input
        placeholder="João Silva"
        type="text"
        className={cn("w-full", classNames?.input)}
        onChange={handleChange}
        {...props}
      />
      {error && (
        <p className={cn("text-[12px] text-destructive", classNames?.error)}>
          {error}
        </p>
      )}
    </div>
  );
};

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  classNames?: Partial<
    Record<"input" | "label" | "container" | "error", string>
  >;
  error?: string;
  mask?: string;
}
