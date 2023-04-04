// GENERATED BY MITOSIS

import { Slot, component$ } from "@builder.io/qwik";

export const Header = component$(() => {
  return (
    <header
      class={`
        flex w-full justify-between items-center pb-8 relative mb-14
        before:contents-[''] before:w-full before:absolute before:bottom-0 before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-white before:to-transparent
      `}
    >
      <nav>
        <Slot></Slot>
      </nav>
      <div>
        <img
          class="w-12 h-12 md:w-14 md:h-14 rounded-full ring-2 ring-[#f4f4f4]"
          src="https://i.scdn.co/image/ab6775700000ee850e0f669f4d297b951d26f771"
          alt="user avatar"
        ></img>
      </div>
    </header>
  );
});
export default Header;
