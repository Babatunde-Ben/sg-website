"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";

import { cn } from "@/lib/utils";

type LabelProps = React.ComponentProps<typeof LabelPrimitive.Root> & {
  floating?: boolean;
  required?: boolean;
};

function Label({
  className,
  floating,
  children,
  required,
  ...props
}: LabelProps) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "flex items-center gap-2 text-tertiary-500 leading-none font-medium select-none md:text-lg group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        floating &&
          "text-tertiary-500 absolute left-0 top-3  transition-all pointer-events-none peer-focus:-top-4 peer-focus:text-sm peer-focus:text-tertiary-700  peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-tertiary-700 ",
        className,
      )}
      {...props}
    >
      {children}
      {required && (
        <span aria-hidden="true" className="text-tertiary-800">
          *
        </span>
      )}
    </LabelPrimitive.Root>
  );
}

export { Label };
