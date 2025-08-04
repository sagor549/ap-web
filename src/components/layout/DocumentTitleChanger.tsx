"use client";

import useDocumentTitle from "@/hooks/useDocumentTitle";

export default function DocumentTitleChanger() {
  useDocumentTitle({
    defaultTitle: "Sagar | Creative Design Engineer",
    onBlurTitle: "Hola!!!!",
  });

  // This component doesn't render anything
  return null;
}
