import { FC } from "react";
import Image from "../image";

interface ExpandableProps {
  title: string;
  status: string;
  image?: string;
}

const Course: FC<ExpandableProps> = ({ image, title, status }) => {
  return (
    <div>
      <div>
        <div>{image && <Image src={image} alt="string" />}</div>
        <div>
          <div>{title}</div>
          <div>{status}</div>
        </div>
      </div>
    </div>
  );
};

export default Course;
