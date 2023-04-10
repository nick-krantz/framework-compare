import Link from "next/link";
import { Header, PageWrapper, PlaylistIcon } from "../mitosis";
import { Rubik } from "next/font/google";

import "./globals.css";

const rubik = Rubik({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Next App",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={rubik.className}>
      <body>
        <PageWrapper>
          <Header>
            <Link
              href="/playlist"
              className="block border rounded-full p-2 text-white border-white"
            >
              <PlaylistIcon />
            </Link>
          </Header>
          <main>{children}</main>
        </PageWrapper>
      </body>
    </html>
  );
}
