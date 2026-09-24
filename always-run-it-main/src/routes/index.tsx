import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Soft Ruched Thong Bodysuit | Jwear Studio" },
      {
        name: "description",
        content:
          "Soft, high-stretch V-neck bodysuit with a ruched bust, light tummy control and a seamless thong bottom.",
      },
      { property: "og:title", content: "Soft Ruched Thong Bodysuit | Jwear Studio" },
      {
        property: "og:description",
        content:
          "A smooth, second-skin V-neck bodysuit with a ruched bust, light tummy control and a seamless thong bottom.",
      },
      { property: "og:type", content: "product" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    window.location.replace("/bodysuit.html");
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <p className="text-sm text-muted-foreground">Loading…</p>
    </div>
  );
}
