"use client";

import Home from "@/components/Home/Home";
import React from "react";

export default function HomePage() {
  return <Home />;
}

// "use client";
// import { useUser } from "@auth0/nextjs-auth0/client";

// export default function Home() {
//   const { user, error, isLoading } = useUser();
//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>{error.message}</div>;

//   if (user) {
//     return (
//       <div>
//         Welcome {user.name}! <a href="/api/auth/logout">Logout</a>
//       </div>
//     );
//   }

//   return <a href="/api/auth/login">Login</a>;
// }
