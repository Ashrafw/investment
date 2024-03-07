import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function Wrapper({ children }: Props) {
  return <div className="max-w-7xl m-auto py-2">{children}</div>;
}
