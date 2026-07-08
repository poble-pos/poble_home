import Image from "next/image";
import Link from "next/link";

export function BrandLogo({
  className = "h-6",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label="Poble — home"
      className="inline-flex shrink-0 items-center"
    >
      <Image
        src="/logo-transparent.svg"
        alt="Poble"
        width={1024}
        height={1024}
        priority={priority}
        className={`w-auto ${className}`}
      />
    </Link>
  );
}
