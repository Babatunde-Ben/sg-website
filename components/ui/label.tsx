"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";

import { cn } from "@/lib/utils";

type LabelProps = React.ComponentProps<typeof LabelPrimitive.Root> & {
  floating?: boolean;
};

function Label({ className, floating, ...props }: LabelProps) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "flex items-center gap-2 text-tertiary-500 leading-none font-medium select-none md:text-lg group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        floating &&
          "text-tertiary-500 absolute left-0 top-3  transition-all pointer-events-none peer-focus:-top-4 peer-focus:text-sm  peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-sm",
        className,
      )}
      {...props}
    />
  );
}

export { Label };
