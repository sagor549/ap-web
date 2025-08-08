"use client";

import useDocumentTitle from "@/hooks/useDocumentTitle";

export default function DocumentTitleChanger() {
  useDocumentTitle({
    defaultTitle: "Ap Agency | Landing Page Lead Booster",
    onBlurTitle: "AP Agency",
  });

  // This component doesn't render anything
  return null;
}
