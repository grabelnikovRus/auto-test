import { PropsWithChildren } from "react";
import { ButtonProps } from "./types";
import cn from "classnames";

import s from "./Button.module.css";

export const Button = ({
  children,
  className,
  theme = 'primary',
  ...props
}: PropsWithChildren<ButtonProps>) => (
  <button
    className={cn(s.root, className, s[theme])}
    {...props}
  >
    {children}
  </button>
);
