"use client";

import React, { useEffect, useState } from "react";

export default function LoadingWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // ロード状態のシミュレーション
    setIsReady(true);
  }, []);

  if (!isReady) {
    // ローディング中の表示
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  return <>{children}</>;
}
