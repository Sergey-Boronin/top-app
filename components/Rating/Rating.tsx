import { RatingProps } from "./Rating.props";
import styles from "./Text.module.css";
import cn from "classnames";

export const Rating = ({
  size = "m",
  children,
  className,
  ...props
}: RatingProps): JSX.Element => {
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
