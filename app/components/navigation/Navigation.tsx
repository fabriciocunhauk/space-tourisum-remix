import React from "react";

export default function Navigation({
  navText,
  className,
}: {
  navText?: any;
  className?: string;
}) {
  return (
    <ul className="flex justify-around text-white gap-4">
      {navText.map((item: any, index: any) => {
        console.log(item);

        return <li key={index}>{item.name.toUpperCase()}</li>;
      })}
    </ul>
  );
}
