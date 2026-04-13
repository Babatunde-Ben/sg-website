import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({
  className,
  maxLength,
  value,
  defaultValue,
  ...props
}: React.ComponentProps<"textarea"> & { maxLength?: number }) {
  const charCount =
    typeof value === "string"
      ? value.length
      : typeof defaultValue === "string"
        ? defaultValue.length
        : 0;

  const isNearLimit = maxLength ? charCount >= maxLength * 0.9 : false;
  const isAtLimit = maxLength ? charCount >= maxLength : false;

  return (
    <>
      <textarea
        data-slot="textarea"
        className={cn(
          " border-secondary-500 placeholder:text-muted-foreground aria-invalid:ring-destructive/20 selection:bg-tertiary-500/60 selection:text-primary-500  dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full border-b bg-transparent peer px-2 py-6 resize-none text-base text-tertiary-500 shadow-xs transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        maxLength={maxLength}
        value={value}
        defaultValue={defaultValue}
        {...props}
      />
      {maxLength && (
        <span
          className={cn(
            "absolute right-0 -bottom-5 text-xs tabular-nums transition-colors",
            isAtLimit
              ? "text-destructive"
              : isNearLimit
                ? "text-tertiary-700"
                : "text-tertiary-800",
          )}
        >
          {charCount}/{maxLength}
        </span>
      )}
    </>
  );
}

export { Textarea };
