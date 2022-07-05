import { TextProps } from "./Text.props";
import styles from "./Text.module.css";
import cn from "../../node_modules/classnames/index";

export const Text = ({
  size = "m",
  children,
  className,
  ...props
}: TextProps): JSX.Element => {
  console.log(size);
  return (
    <p
      className={cn(styles.p, styles.s, className, {
        [styles.small]: size == "s",
        [styles.medium]: size == "m",
        [styles.large]: size == "l",
      })}
      {...props}
    >
      {children}
    </p>
  );
};
