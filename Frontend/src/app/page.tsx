"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RedirectToHome() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to /home
    router.push("/home");
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p>Redirecting to home...</p>
    </div>
  );
}
