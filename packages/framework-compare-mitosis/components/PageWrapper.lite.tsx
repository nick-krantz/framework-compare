type PageWrapperProps = {
  children: any;
};

export default function PageWrapper({ children, ...props }: PageWrapperProps) {
  return (
    <div
      {...props}
      class="min-h-screen bg-gradient-to-br from-slate to-darkPurple text-white min-h-screen	w-full px-6 py-8"
    >
      {children}
    </div>
  );
}
