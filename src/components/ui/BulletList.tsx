export default function BulletList({
  items,
  className = "space-y-1.5",
}: {
  items: readonly string[];
  className?: string;
}) {
  return (
    <ul className={className}>
      {items.map((item) => (
        <li
          key={item}
          className="text-sm text-text-secondary flex items-start gap-2"
        >
          <span aria-hidden className="text-accent mt-0.5 shrink-0">
            ›
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}
