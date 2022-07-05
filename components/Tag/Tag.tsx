import { TagProps } from "./Tag.props";
import styles from "./Tag.module.css";
import cn from "../../node_modules/classnames/index";

export const Tag = ({
  size = "s",
  children,
  color = "ghost",
  href,
  className,
  ...props
}: TagProps): JSX.Element => {
  console.log(size);
  return (
    <div
      className={cn(styles.tag, styles.s, className, {
        [styles.small]: size == "s",
        [styles.medium]: size == "m",
        [styles.ghost]: color == "ghost",
        [styles.red]: color == "red",
        [styles.gray]: color == "gray",
        [styles.green]: color == "green",
        [styles.primary]: color == "primary",
      })}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};
