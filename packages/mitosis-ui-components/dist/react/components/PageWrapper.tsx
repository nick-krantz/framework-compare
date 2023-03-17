import * as React from "react";

type PageWrapperProps = {
  children: any;
};

function PageWrapper(props: PageWrapperProps) {
  return (
    <div
      className="bg-gradient-to-br from-slate to-darkPurple text-white min-h-screen	w-full"
      {...props}
    >
      {props.children}
    </div>
  );
}

export default PageWrapper;
