type PageWrapperProps = {
  children: any;
};

function PageWrapper(props: PageWrapperProps) {
  return (
    <div
      class="bg-gradient-to-br from-slate to-darkPurple text-white min-h-screen	w-full"
      {...props}
    >
      {props.children}
    </div>
  );
}

export default PageWrapper;
