type PageWrapperProps = {
  children: any;
}

export default function PageWrapper({children, ...props}: PageWrapperProps) {
  return (
    <div {...props} class="bg-gradient-to-br from-slate to-darkPurple text-white min-h-screen	w-full">
      {children}
    </div>
  );
}
