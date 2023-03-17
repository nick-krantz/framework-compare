type LoginLinkProps = {
  href: string;
};

function LoginLink(props: LoginLinkProps) {
  return (
    <a
      class="block w-full rounded-full border border-solid border-white p-2 text-center text-white"
      {...props}
    >
      Login
    </a>
  );
}

export default LoginLink;
