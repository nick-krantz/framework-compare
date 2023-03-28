import { Header, PageWrapper, PlaylistIcon } from "framework-compare-mitosis/react";
import { Outlet, NavLink } from "react-router-dom";

export default function Root() {
  return (
    <PageWrapper>
      <Header>
        <NavLink
          to="/playlist"
          className={({ isActive }) =>
            `block border rounded-full p-2 text-white ${isActive ? "border-white" : ""}`
          }
        >
          <PlaylistIcon />
        </NavLink>
      </Header>
      <main>
        <Outlet />
      </main>
    </PageWrapper>
  );
}
