import * as React from "react";
import "./button.css";

const Button = React.forwardRef(
  (
    {
      variant = "default",
      size = "default",
      className = "",
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = "button";
    const variantClass = `button--${variant}`;
    const sizeClass = `button--${size}`;

    return (
      <Comp
        ref={ref}
        className={`button ${variantClass} ${sizeClass} ${className}`}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
