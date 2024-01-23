import { FC } from "react";

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

const Image: FC<ImageProps> = ({ src, alt, className }) => {
  return (
    <div>
      <img src={src} alt={alt} className={className} />
    </div>
  );
};

export default Image;
