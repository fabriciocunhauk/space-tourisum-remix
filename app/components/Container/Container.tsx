import type { ReactNode } from "react";
import React from "react";
import { classNames } from "utils/appearance";

const Container = ({
  children,
  classes,
}: {
  children: ReactNode;
  classes?: { container: string };
}) => {
  return (
    <div
      className={classNames(
        "grid grid-cols-1 lg:grid-cols-2 p-5 w-screen mt-20",
        classes?.container
      )}
    >
      {children}
    </div>
  );
};

export default Container;
