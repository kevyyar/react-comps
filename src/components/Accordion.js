import { useState } from "react";

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const onExpandItem = (nextIndex) => {
    setExpandedIndex(nextIndex);
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const content = <div>{item.content}</div>;

    return (
      <div key={item.id}>
        <div onClick={() => onExpandItem(index)}>{item.heading}</div>
        {isExpanded && content}
      </div>
    );
  });
  return <div>{renderedItems}</div>;
}

export default Accordion;
