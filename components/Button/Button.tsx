import { ButtonProps } from "./Button.props";
import styles from "./Button.module.css";
import cn from "../../node_modules/classnames/index";

export const Button = ({
  appearance,
  children,
  className,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appearance == "primary",
        [styles.ghost]: appearance == "ghost",
      })}
      {...props}
    >
      {children}
    </button>
  );
};
