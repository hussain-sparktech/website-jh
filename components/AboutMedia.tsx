import Image from "next/image";

type AboutFigureProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function AboutFigure({
  src,
  alt,
  className = "about-figure",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 42vw"
}: AboutFigureProps) {
  return (
    <figure className={className}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="about-figure-img"
      />
    </figure>
  );
}
