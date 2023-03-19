import { Header, PageWrapper, PlaylistIcon } from "mitosis";
import { Outlet, NavLink } from "react-router-dom";

export default function Root() {
  return (
    <PageWrapper>
      <Header>
        <NavLink
          to="/playlist"
          className={({ isActive }) =>
            isActive ? "block text-darkPurple bg-white rounded-md p-1" : "text-white"
          }
        >
          <PlaylistIcon />
        </NavLink>
      </Header>
      <Outlet />
    </PageWrapper>
  );
}
