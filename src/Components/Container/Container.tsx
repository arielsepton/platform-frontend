import { ReactNode } from "@tanstack/react-router";

interface ContainerProps {
  children?: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => (
  <div className="grow h-full min-w-0 bg-cover bg-no-repeat bg-login-pattern">
    <div className="h-full bg-mono/basic-15 bg-opacity-90">
      <div className="flex">{children}</div>
    </div>
  </div>
);

export default Container;
