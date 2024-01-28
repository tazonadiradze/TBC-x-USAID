import { FC, useState } from "react";
import "./index.css";
import ARROW from "../../../assets/FAQ/arrow.png";
interface ExpandableProps {
  title: string;
  description: string;
}
const Expandable: FC<ExpandableProps> = ({ title, description }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div>
      <div onClick={() => setExpanded(!expanded)} className="FAQ-expandable">
        {title}
        <button className="expandable-button">
          <img src={ARROW} className="arrow" />
        </button>
      </div>

      {!!expanded && description}
    </div>
  );
};

export default Expandable;
