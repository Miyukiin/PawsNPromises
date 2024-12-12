"use client";

import React, { Suspense } from "react";
import AdoptPageContent from "@/components/adopt/AdoptPageContent";

export default function AdoptPage() {
  return (
    <Suspense fallback={<p>Loading adopt page...</p>}>
      <AdoptPageContent />
    </Suspense>
  );
}
