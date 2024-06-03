import { ReactNode } from "@tanstack/react-router";
import React from "react";

interface ContainerProps {
  children?: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }: ContainerProps) => (
  <div className="grow h-full min-w-0 bg-cover bg-no-repeat bg-login-pattern">
    <div className="h-full bg-mono/basic-15 bg-opacity-90">
      <div className="flex">{children}</div>
    </div>
  </div>
);

export default React.memo(Container);
