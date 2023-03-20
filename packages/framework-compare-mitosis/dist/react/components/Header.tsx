import * as React from "react";

export type HeaderProps = {
  children: any;
};

function Header(props: HeaderProps) {
  return (
    <header className="flex w-full px-6 py-8 justify-between items-center">
      <nav>{props.children}</nav>

      <div>
        <img
          className="w-12 h-12 md:w-14 md:h-14 rounded-full ring-2 ring-[#f4f4f4]"
          src="https://i.scdn.co/image/ab6775700000ee850e0f669f4d297b951d26f771"
          alt="user avatar"
        />
      </div>
    </header>
  );
}

export default Header;
