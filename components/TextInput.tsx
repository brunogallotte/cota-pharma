import { cn } from "@/lib/utils";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export const TextInput = ({
  label,
  classNames,
  error,
  ...props
}: TextInputProps) => {
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
}
