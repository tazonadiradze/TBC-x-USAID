import { FC, useState } from "react";

interface ExpandableProps {
  title: string;
  description: string;
}
const Expandable: FC<ExpandableProps> = ({ title, description }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div>
      <div>
        {title}
        <button onClick={() => setExpanded(!expanded)} />
      </div>
      {!!expanded && description}
    </div>
  );
};

export default Expandable;
