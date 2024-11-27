// import Link from "next/link";

// export default function Home() {
//   return (
//     <div>
//       <h1>Home</h1>
//       <Link href="/about">About</Link>
//     </div>
//   );
// }

import Home from "@/components/Home/Home";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Home />
    </div>
  );
};

export default HomePage;
