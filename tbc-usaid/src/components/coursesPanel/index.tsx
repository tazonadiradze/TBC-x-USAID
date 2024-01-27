import Course from "../common/course/course";
import "./index.css";
import FirstImage from "../../assets/courseImages/firstImage.png";
import SecondImage from "../../assets/courseImages/secondImage.png";
import ThirdImage from "../../assets//courseImages/thirdImage.png";
import FourthImage from "../../assets//courseImages/fourthImage.png";
import FifthImage from "../../assets//courseImages/fifthImage.png";
import SixthImage from "../../assets//courseImages/sixthImage.png";
import SeventhImage from "../../assets//courseImages/seventhImage.png";
import EighthImage from "../../assets//courseImages/eighthImage.png";
import NinethImage from "../../assets/courseImages/ninethImage.png";
const Courses = [
  {
    title: "iOS Development",
    status: "რეგისტრაცია დასრულებულია",
    img: `${FirstImage}`,
  },
  {
    title: "React",
    status: "რეგისტრაცია დასრულებულია",
    img: `${SecondImage}`,
  },
  {
    title: "Intro to Python",
    status: "რეგისტრაცია დასრულებულია",
    img: `${ThirdImage}`,
  },
  {
    title: "Advanced Python",
    status: "რეგისტრაცია დასრულებულია",
    img: `${FourthImage}`,
  },
  {
    title: " Advanced Cybersecurity Course",
    status: "რეგისტრაცია დასრულებულია",
    img: `${FifthImage}`,
  },
  {
    title: "ToT - Training of Trainers",
    status: "რეგისტრაცია დასრულებულია",
    img: `${SixthImage}`,
  },
  {
    title: "Blockchain",
    status: "რეგისტრაცია დასრულებულია",
    img: `${SeventhImage}`,
  },
  {
    title: "DevOps",
    status: "რეგისტრაცია დასრულებულია",
    img: `${EighthImage}`,
  },
  {
    title: "Information Security Governance",
    status: "რეგისტრაცია დასრულებულია",
    img: `${NinethImage}`,
  },
];

function CoursesPanel() {
  {
    return (
      <div className="courses-panel-wrapper">
        <div className="courses-wrapper">
          {Courses.map(({ title, status, img }) => {
            return <Course title={title} status={status} image={img} />;
          })}
        </div>
      </div>
    );
  }
}

export default CoursesPanel;
