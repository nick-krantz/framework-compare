type LoginLinkProps = {
  href: string;
};

export default function LoginLink({ ...props }: LoginLinkProps) {
  return (
    <a
      {...props}
      class="block w-full rounded-full border border-solid border-white p-2 text-center text-white"
    >
      Login
    </a>
  );
}
