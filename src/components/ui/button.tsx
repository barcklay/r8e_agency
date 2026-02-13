import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/helpers/lib";

const buttonVariants = cva(
  "font-geist-mono border-1 border-solid border-white text-white inline-flex items-center justify-center gap-2 rounded-button break-words md:text-xl text-sm tracking-[0.64px] transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-80 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "",
        outline: "border focus:border-secondary active:bg-muted active:border-primary active:text-primary",
      },
      color: {
        default: "focus:border focus:border-secondary bg-primary text-primary-foreground active:bg-primary/90",
        transparent:
          "bg-transparent",
        "transparent-white":
          "bg-transparent border-white text-white",
      },
      size: {
        default: "rounded-button px-[30px] py-1 md:py-[5px] text-base",
        sm: "h-8 rounded-button px-[25px] pb-[6px] pt-[8px]",
        lg: "h-[65px] rounded-button px-[30px] pb-[20px] pt-[22px]",
        icon: "h-8 w-8",
      },
      isDisabled: {
        default: "",
        true: "pointer-events-none opacity-80",
      },
    },
    defaultVariants: {
      variant: "default",
      color: "default",
      size: "default",
      isDisabled: "default",
    },
  },
);

type ButtonVariants = VariantProps<typeof buttonVariants>;
export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color">,
    ButtonVariants {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, color, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          buttonVariants({
            color: color as ButtonVariants["color"],
            variant,
            size,
            className,
          }),
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
