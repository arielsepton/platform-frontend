/// <reference types="vite-plugin-svgr/client" />
import React from "react";
import Row from "@components/table/row/Row";

type DisplayListProps = {
  items: string[];
};

const DisplayList = React.memo(({ items }: DisplayListProps) => (
  <div className="flex flex-col h-full w-full">
    {items.map((proj, i) => (
      <Row item={proj} key={i}></Row>
    ))}
  </div>
));

export default DisplayList;
