import { FC, ReactNode } from "react";
import "../text/index.css";
interface TextProps {
  size: "small" | "medium" | "large";
  type: "default" | "link";
  children: ReactNode;
}

const Text: FC<TextProps> = ({ size, type, children }) => {
  return <span className={`text-size-${size} type-${type}`}>{children}</span>;
};

export default Text;
