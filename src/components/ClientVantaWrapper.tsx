"use client";

import dynamic from "next/dynamic";

// Dynamically import the VantaBackground component with no SSR
// This is safe within a client component
const VantaBackground = dynamic(
  () => import("@/components/VantaBackground").then(mod => mod.VantaBackground),
  { ssr: false }
);

export function ClientVantaWrapper() {
  // VantaBackground requires children prop even if empty
  return <VantaBackground>{/* Required empty children */}<></></VantaBackground>;
}
