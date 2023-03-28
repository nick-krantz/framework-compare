type PlaylistLinkProps = {
  children: any;
  href: string;
};

function PlaylistLink(props: PlaylistLinkProps) {
  return (
    <a
      class="grid grid-cols-[min-content_auto_auto] gap-4 p-3 group"
      {...props}
      href={props.href}
    >
      {props.children}
      <div
        class={`
      pointer
      invisible group-focus:visible group-hover:visible
      flex mr-2  justify-self-end w-min relative
      before:bg-gradient-radial-white before:rounded-full before:animate-pulse
      before:content-[''] before:top-2/4 before:-translate-y-2/4 before:left-2/4
      before:-translate-x-2/4 before:absolute before:w-16 before:h-16
    `}
      >
        <svg class="w-8 self-center z-[2]" viewBox="0 0 24 24">
          <title></title>
          <g>
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
              class="fill-darkPurple"
              d="M20 3v14a4 4 0 1 1-2-3.465V6H9v11a4 4 0 1 1-2-3.465V3h13z"
            ></path>
          </g>
        </svg>
      </div>
    </a>
  );
}

export default PlaylistLink;