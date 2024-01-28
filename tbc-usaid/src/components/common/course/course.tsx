import { FC } from "react";
import Image from "../image";
import "./course.css";
interface ExpandableProps {
  title: string;
  status: string;
  image?: string;
}

const Course: FC<ExpandableProps> = ({ image, title, status }) => {
  return (
    <div className="course-wrapper">
      <div className="image-text-wrapper">
        <div>{image && <Image src={image} alt="string" />}</div>
        <div className="text-button-wrapper">
          <div className="text-wrapper">
            <div>{title}</div>
            <div>{status}</div>
          </div>
          <div className="course-details">
            <span>&#8594;</span>კურსის დეტალები
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
