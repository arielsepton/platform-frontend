/// <reference types="vite-plugin-svgr/client" />
import React from "react";
import Card from "@components/card/Card";

type DisplayGridProps = {
  items: string[];
};

const DisplayGrid = React.memo(({ items }: DisplayGridProps) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-1.5 h-full w-full">
    {items.map((_, i) => (
      <Card key={i} name="Project name" mador="mador name" anaf="anaf name" />
    ))}
  </div>
));

export default DisplayGrid;
