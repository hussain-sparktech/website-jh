import Image from "next/image";
import type { ReactNode } from "react";

type HeroVisualProps = {
  src: string;
  alt: string;
  focus?: string;
  priority?: boolean;
  className?: string;
  children?: ReactNode;
};

/** Editorial hero-side image — replaces abstract placeholder shapes */
export function HeroVisual({
  src,
  alt,
  focus = "center",
  priority = false,
  className = "",
  children
}: HeroVisualProps) {
  return (
    <div className={`hero-visual ${className}`.trim()}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 900px) 100vw, 42vw"
        className="hero-visual__img"
        style={{ objectPosition: focus }}
      />
      <span className="hero-visual__veil" aria-hidden="true" />
      <span className="hero-visual__frame" aria-hidden="true" />
      {children ? <div className="hero-visual__accent">{children}</div> : null}
    </div>
  );
}
