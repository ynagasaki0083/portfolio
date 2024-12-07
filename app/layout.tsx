import type { Metadata } from "next";
// import { Sora } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navber/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";

// const font = Sora({
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
//   subsets: ["latin"],
// });

const HEADER_HEIGHT = "12vh"; // ナビゲーションバーの高さS
export const metadata: Metadata = {
  //title：ブラウザのタブの表示名
  title: "Webdev Portfolio",
  description: "Webdev Portfolio with next js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* ナビゲーションバー */}
        <ResponsiveNav
          className={`fixed top-0 left-0 w-full h-[${HEADER_HEIGHT}] z-50`}
        />

        {/* メインコンテンツ */}
        <main className={`pt-[${HEADER_HEIGHT}]`}>{children}</main>

        {/* フッター */}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
