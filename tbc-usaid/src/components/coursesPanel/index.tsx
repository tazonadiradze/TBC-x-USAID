import Course from "../common/course/course";
import img from "../../assets/backgroundimage.png";
import secimage from "../../assets/sssdad.png";
const dummydata = [
  {
    title: "iOS Development",
    status: "რეგისტრაცია დასრულებულია",
    img: `${img}`,
  },
  {
    title: "React",
    status: "რეგისტრაცია დასრულებულია",
    img: `${secimage}`,
  },
  {
    title: "Intro to Python",
    status: "რეგისტრაცია დასრულებულია",
    img: `${img}`,
  },
  {
    title: "Advanced Python",
    status: "რეგისტრაცია დასრულებულია",
    img: `${img}`,
  },
  {
    title: " Advanced Cybersecurity Course",
    status: "რეგისტრაცია დასრულებულია",
    img: `${img}`,
  },
  {
    title: "ToT - Training of Trainers",
    status: "რეგისტრაცია დასრულებულია",
    img: `${img}`,
  },
  {
    title: "Blockchain",
    status: "რეგისტრაცია დასრულებულია",
    img: `${img}`,
  },
  {
    title: "DevOps",
    status: "რეგისტრაცია დასრულებულია",
    img: `${img}`,
  },
  {
    title: "Information Security Governance",
    status: "რეგისტრაცია დასრულებულია",
    img: `${img}`,
  },
];

function CoursesPanel() {
  return (
    <div>
      {dummydata.map(({ title, status, img }) => {
        return <Course title={title} status={status} image={img} />;
      })}
    </div>
  );
}

export default CoursesPanel;
