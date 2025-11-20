import React from "react";

export default function EmptyLayout({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="min-h-screen w-full bg-[#415b4e]">
      {children}
    </div>
  );
}
