/// <reference types="vite-plugin-svgr/client" />
import React from "react";
import Card from "@components/card/Card";

type DisplayGridProps = {
  items: string[];
};

const DisplayGrid = React.memo(({ items }: DisplayGridProps) => (
  <div id="scroll" className="flex justify-center overflow-y-auto grow-0">
    <div className="grow-0 grid grid-cols-3 sm:grid-col-1 gap-3 w-full">
      {items.map((_, i) => (
        <Card key={i} name="Project name" mador="mador name" anaf="anaf name" />
      ))}
    </div>
  </div>
));

export default DisplayGrid;
