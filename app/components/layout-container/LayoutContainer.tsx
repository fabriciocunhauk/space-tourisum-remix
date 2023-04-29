import type { ReactNode } from "react";
import { Navbar } from "../navbar/Navbar";
import { classNames } from "utils/appearance";

const LayoutContainer = ({
  children,
  image,
  classes,
}: {
  children: ReactNode;
  image: string;
  classes?: { root: string };
}) => {
  return (
    <div
      className={classNames(
        "bg-cover bg-center bg-no-repeat flex flex-col items-center w-screen min-h-screen",
        classes?.root
      )}
      style={{ backgroundImage: `url(${image})` }}
    >
      <Navbar />
      {children}
    </div>
  );
};

export default LayoutContainer;
