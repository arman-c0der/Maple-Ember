"use client";
import { useState } from "react";

// Plain <img> with a brown gradient fallback if the photo fails to load.
export default function SafeImage({ src, alt, className = "" }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return <div role="img" aria-label={alt} className={`bg-gradient-to-br from-clay to-roast ${className}`} />;
  }
  return <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} className={className} />;
}
