import { useState } from "react";
import Expand from '../../shared/interface/Expand'

const Expandable = ({ children, maxChars = 100}: Expand) => {
  const [isExpandable, setExplandable] = useState(false);
  if (children.length <= maxChars) <p>{children}</p>;
  const text = isExpandable ? children : children.substring(0, maxChars);
  return (
    <p className="p-4">
      {text}...
      <button className="rounded-full border-stone-500 w-16 bg-yellow-600" onClick={() => setExplandable(!isExpandable)}>
        {isExpandable ? "Less" : "More"}
      </button>
    </p>
  );
};

export default Expandable;
