type PageWrapperProps = {
  children: any;
};

function PageWrapper(props: PageWrapperProps) {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate to-darkPurple text-white min-h-screen	w-full px-6 py-8"
      {...props}
    >
      {props.children}
    </div>
  );
}

export default PageWrapper;
