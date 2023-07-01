import React from "react";

function Container({ children }: { children: React.ReactNode }) {
  return <div className="w-[92%] mx-auto">{children}</div>;
}

export default Container;
