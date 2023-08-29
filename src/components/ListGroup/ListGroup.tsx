import { useState } from "react";
import ListGroup from '../../shared/interface/ListGroupInterface'

function ListGroup({ items, heading, onSelectItem }: ListGroup) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <div className="flex justify-items-center p-6">
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "group/item hover:bg-slate-100"
                : "group/item hover:bg-slate-100"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListGroup;