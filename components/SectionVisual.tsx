import Image from "next/image";

type SectionVisualProps = {
  src: string;
  alt: string;
  focus?: string;
  className?: string;
  priority?: boolean;
};

/** Editorial image panel for section / closing layouts (V2) */
export function SectionVisual({
  src,
  alt,
  focus = "center",
  className = "",
  priority = false
}: SectionVisualProps) {
  return (
    <div className={`section-visual design-v2-only ${className}`.trim()}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 900px) 92vw, 38vw"
        className="section-visual__img"
        style={{ objectPosition: focus }}
      />
      <span className="section-visual__veil" aria-hidden="true" />
      <span className="section-visual__frame" aria-hidden="true" />
    </div>
  );
}
