import type { CSSProperties } from "react";

export default function ImgSlot({
  className = "",
  label,
  style,
}: {
  className?: string;
  label: string;
  style?: CSSProperties;
}) {
  return (
    <div
      className={`img-slot ${className}`}
      data-label={label}
      style={style}
      aria-hidden
    />
  );
}
